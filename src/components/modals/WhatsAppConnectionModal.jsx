import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";

import MetaConnectButton from "../sidedrawer/MetaConnectButton";
import StepIndicator from "../sidedrawer/StepIndicator";
import SuccessCard from "../sidedrawer/SuccessCard";
import ConnectionStatus from "../sidedrawer/ConnectionStatus";
import whatsappService from "../../api_integration/whatsapp/whatsappService";

const APP_ID = "1508329951320543";
const CONFIG_ID = "1084412320702158";

export default function WhatsAppConnectionModal({
  open,
  onClose,
  connectedAccounts,
  onConnectSuccess,
}) {
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState("");
  const [signupData, setSignupData] = useState({
    code: "",
    businessId: "",
    wabaId: "",
    phoneNumberId: "",
    phoneNumber: "",
    verifiedName: "",
    qualityRating: "",
    messagingLimit: "",
    codeVerificationStatus: "",
  });

  // Reusing logic from WhatsAppSetupDrawer...
  // (In a real app I would refactor this logic into a hook)
  
  useEffect(() => {
    if (window.FB) return;
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: APP_ID,
        cookie: true,
        xfbml: true,
        version: "v26.0",
      });
    };
    (function (d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  useEffect(() => {
    const handler = (event) => {
      if (!event.origin || !event.origin.endsWith("facebook.com")) return;
      if (typeof event.data !== "string") return;
      let data;
      try { data = JSON.parse(event.data); } catch (_) { return; }
      if (data?.type !== "WA_EMBEDDED_SIGNUP") return;

      if (data.event === "FINISH") {
        const eventData = data.data || {};
        setSignupData((prev) => ({
          ...prev,
          businessId: eventData.business_id || prev.businessId || "",
          wabaId: eventData.waba_id || prev.wabaId || "",
          phoneNumberId: eventData.phone_number_id || prev.phoneNumberId || "",
          phoneNumber: eventData.display_phone_number || prev.phoneNumber || "",
          verifiedName: eventData.verified_name || prev.verifiedName || "",
          qualityRating: eventData.quality_rating || prev.qualityRating || "",
          messagingLimit: eventData.messaging_limit || prev.messagingLimit || "",
          codeVerificationStatus: eventData.code_verification_status || prev.codeVerificationStatus || "",
        }));
        return;
      }
      if (data.event === "CANCEL") { setLoading(false); setError("WhatsApp signup was cancelled."); return; }
      if (data.event === "ERROR") {
        setLoading(false);
        const errorMessage = data.data?.error_message || data.data?.message || data.data?.error || "Meta WhatsApp Embedded Signup failed.";
        setError(errorMessage);
        return;
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const connectToBotBridge = useCallback(async (data) => {
    try {
      setLoading(true);
      setError("");
      const payload = {
        code: data.code,
        business_id: data.businessId,
        business_account_id: data.wabaId,
        phone_number_id: data.phoneNumberId,
        phone_number: data.phoneNumber,
        display_phone_number: data.phoneNumber,
        verified_name: data.verifiedName,
        quality_rating: data.qualityRating,
        messaging_limit: data.messagingLimit,
        code_verification_status: data.codeVerificationStatus,
      };
      const response = await whatsappService.connect(payload);
      if (response.status) {
        setConnected(true);
        onConnectSuccess(payload); // Notify parent
      } else {
        setError(response.message || "Connection failed.");
      }
    } catch (err) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }, [onConnectSuccess]);

  useEffect(() => {
    if (!signupData.code || !signupData.businessId || !signupData.wabaId || !signupData.phoneNumberId) return;
    if (connected) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    connectToBotBridge(signupData);
  }, [signupData, connected, connectToBotBridge]);

  const handleMetaSignup = () => {
    if (!window.FB) { setError("Facebook SDK not loaded."); return; }
    setError("");
    setLoading(true);
    setSignupData({
      code: "", businessId: "", wabaId: "", phoneNumberId: "",
      phoneNumber: "", verifiedName: "", qualityRating: "",
      messagingLimit: "", codeVerificationStatus: "",
    });

    window.FB.login(
      function (response) {
        if (!response || !response.authResponse) { 
          setLoading(false); 
          setError("Signup cancelled."); 
          return; 
        }
        const authorizationCode = response.authResponse.code || "";
        if (!authorizationCode) { 
          setLoading(false); 
          return; 
        }
        setSignupData((prev) => ({ ...prev, code: authorizationCode }));
      },
      {
        config_id: CONFIG_ID,
        response_type: "code",
        override_default_response_type: true,
        auth_type: "rerequest",
        extras: { setup: {}, featureType: "whatsapp_business_app_onboarding", sessionInfoVersion: "3" },
      }
    );
  };

  useEffect(() => {
    if (!open) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConnected(false);
    setError("");
    setLoading(false);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-[#020817] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
          <h2 className="text-lg font-semibold text-white">
            {connectedAccounts.length > 0 ? "WhatsApp Accounts" : "Connect WhatsApp"}
          </h2>
          <button onClick={onClose} className="rounded-lg p-2 transition hover:bg-slate-800">
            <X size={18} className="text-slate-400" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {connectedAccounts.length > 0 && !connected && (
             <div className="mb-6">
               <h4 className="text-sm font-medium text-slate-300 mb-2">Connected Accounts</h4>
               <div className="space-y-2">
                 {connectedAccounts.map((acc, i) => (
                   <div key={i} className="flex items-center justify-between bg-white/[0.05] p-3 rounded-lg border border-white/5">
                     <span className="text-sm text-white">{acc.verified_name}</span>
                     <span className="text-xs text-green-400 font-mono">{acc.phone_number}</span>
                   </div>
                 ))}
               </div>
               <button onClick={() => setConnected(false)} className="mt-4 w-full text-xs text-cyan-400 hover:text-cyan-300">
                 + Add Another Account
               </button>
             </div>
          )}

          {!connected && connectedAccounts.length === 0 && (
            <>
              {/* Description */}
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5 mb-6">
                <h3 className="font-semibold text-white">Connect your WhatsApp Business Account</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Securely connect your WhatsApp Business Account through Meta.
                </p>
              </div>

              {/* Step Indicator */}
              <h4 className="mb-4 text-sm font-semibold text-white">Setup Steps</h4>
              <StepIndicator connected={connected} />
            </>
          )}

          {error && (
            <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          {connected && (
            <div className="space-y-5">
              <SuccessCard />
              <ConnectionStatus signupData={signupData} />
            </div>
          )}
        </div>

        {/* Footer */}
        {!connected && (
          <div className="border-t border-slate-800 p-6">
            <MetaConnectButton loading={loading} onConnect={handleMetaSignup} />
          </div>
        )}
      </div>
    </div>
  );
}
