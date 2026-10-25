import { useEffect, useState } from "react";
import { X } from "lucide-react";

import MetaConnectButton from "./MetaConnectButton";
import StepIndicator from "./StepIndicator";
import SuccessCard from "./SuccessCard";
import ConnectionStatus from "./ConnectionStatus";
import whatsappService from "../../api_integration/whatsapp/whatsappService";

const APP_ID = "1508329951320543";
const CONFIG_ID = "1084412320702158";

export default function WhatsAppSetupDrawer({
  open,
  onClose,
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

  /*
  |--------------------------------------------------------------------------
  | Facebook SDK
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    /*
     * If Facebook SDK is already loaded,
     * don't load it again.
     */
    if (window.FB) {
      return;
    }

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

      if (d.getElementById(id)) {
        return;
      }

      js = d.createElement(s);

      js.id = id;

      js.src =
        "https://connect.facebook.net/en_US/sdk.js";

      fjs.parentNode.insertBefore(js, fjs);
    })(
      document,
      "script",
      "facebook-jssdk"
    );
  }, []);

  /*
  |--------------------------------------------------------------------------
  | WhatsApp Embedded Signup Events
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handler = (event) => {
      /*
       * Facebook can communicate through
       * facebook.com / web.facebook.com.
       */
      if (
        !event.origin ||
        !event.origin.endsWith("facebook.com")
      ) {
        return;
      }

      /*
       * Embedded Signup messages are strings.
       */
      if (typeof event.data !== "string") {
        return;
      }

      /*
       * Try to parse the message.
       */
      let data;

      try {
        data = JSON.parse(event.data);
      } catch (err) {
        return;
      }

      /*
       * Only process WhatsApp Embedded Signup events.
       */
      if (data?.type !== "WA_EMBEDDED_SIGNUP") {
        return;
      }

      console.log(
        "===================================="
      );

      console.log(
        "META EMBEDDED SIGNUP EVENT"
      );

      console.log("Event:", data.event);

      console.log("Data:", data.data);

      console.log("Full Event:", data);

      console.log(
        "===================================="
      );

      /*
       |--------------------------------------------------------------------------
       | FINISH
       |--------------------------------------------------------------------------
       */

      if (data.event === "FINISH") {
        const eventData = data.data || {};

        console.log(
          "Embedded Signup FINISH received"
        );

        console.log(
          "Business ID:",
          eventData.business_id
        );

        console.log(
          "WABA ID:",
          eventData.waba_id
        );

        console.log(
          "Phone Number ID:",
          eventData.phone_number_id
        );

        /*
         * IMPORTANT:
         *
         * FINISH can arrive before OR after
         * the FB.login callback.
         *
         * Therefore we only update the
         * available fields here.
         */

        setSignupData((prev) => ({
          ...prev,

          businessId:
            eventData.business_id ||
            prev.businessId ||
            "",

          wabaId:
            eventData.waba_id ||
            prev.wabaId ||
            "",

          phoneNumberId:
            eventData.phone_number_id ||
            prev.phoneNumberId ||
            "",

          phoneNumber:
            eventData.display_phone_number ||
            prev.phoneNumber ||
            "",

          verifiedName:
            eventData.verified_name ||
            prev.verifiedName ||
            "",

          qualityRating:
            eventData.quality_rating ||
            prev.qualityRating ||
            "",

          messagingLimit:
            eventData.messaging_limit ||
            prev.messagingLimit ||
            "",

          codeVerificationStatus:
            eventData.code_verification_status ||
            prev.codeVerificationStatus ||
            "",
        }));

        return;
      }

      /*
       |--------------------------------------------------------------------------
       | CANCEL
       |--------------------------------------------------------------------------
       */

      if (data.event === "CANCEL") {
        console.warn(
          "WhatsApp Embedded Signup cancelled",
          data.data
        );

        setLoading(false);

        setError(
          "WhatsApp signup was cancelled."
        );

        return;
      }

      /*
       |--------------------------------------------------------------------------
       | ERROR
       |--------------------------------------------------------------------------
       */

      if (data.event === "ERROR") {
        console.error(
          "WhatsApp Embedded Signup ERROR",
          data.data
        );

        setLoading(false);

        const errorMessage =
          data.data?.error_message ||
          data.data?.message ||
          data.data?.error ||
          "Meta WhatsApp Embedded Signup failed.";

        setError(errorMessage);

        return;
      }
    };

    window.addEventListener(
      "message",
      handler
    );

    return () => {
      window.removeEventListener(
        "message",
        handler
      );
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Connect To BotBridge
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    /*
     * Don't call API until all required
     * Embedded Signup information exists.
     */
    if (
      !signupData.code ||
      !signupData.businessId ||
      !signupData.wabaId ||
      !signupData.phoneNumberId
    ) {
      return;
    }

  /*
  |--------------------------------------------------------------------------
  | Connect BotBridge API
  |--------------------------------------------------------------------------
  */

  const connectToBotBridge = async (data) => {
    try {
      setLoading(true);

      setError("");

      /*
       * IMPORTANT:
       *
       * data.code MUST be the Meta authorization code.
       *
       * NEVER use the Facebook access token
       * as the authorization code.
       */

      const payload = {
        code: data.code,

        business_id:
          data.businessId,

        business_account_id:
          data.wabaId,

        phone_number_id:
          data.phoneNumberId,

        phone_number:
          data.phoneNumber,

        display_phone_number:
          data.phoneNumber,

        verified_name:
          data.verifiedName,

        quality_rating:
          data.qualityRating,

        messaging_limit:
          data.messagingLimit,

        code_verification_status:
          data.codeVerificationStatus,
      };

      console.log(
        "===================================="
      );

      console.log(
        "BOTBRIDGE WHATSAPP CONNECT"
      );

      /*
       * Don't print the actual authorization code.
       */
      console.log("Payload:", {
        ...payload,
        code: payload.code
          ? "RECEIVED"
          : "NOT RECEIVED",
      });

      console.log(
        "===================================="
      );

      const response =
        await whatsappService.connect(
          payload
        );

      console.log(
        "BotBridge Response:",
        response
      );

      if (response.status) {
        setConnected(true);
      } else {
        setError(
          response.message ||
            "Connection failed."
        );
      }
    } catch (err) {
      console.error(
        "BotBridge WhatsApp Connect Error:",
        err
      );

      setError(
        err?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Meta WhatsApp Embedded Signup
  |--------------------------------------------------------------------------
  */

  const handleMetaSignup = () => {
    if (!window.FB) {
      setError(
        "Facebook SDK not loaded."
      );

      return;
    }

    /*
     * Reset previous error.
     */

    setError("");

    setLoading(true);

    /*
     * Reset previous signup information.
     */

    setSignupData({
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

    /*
     |--------------------------------------------------------------------------
     | Start Meta Embedded Signup
     |--------------------------------------------------------------------------
     */

    window.FB.login(
      function (response) {
        console.log(
          "===================================="
        );

        console.log(
          "FB LOGIN COMPLETE RESPONSE"
        );

        console.log(response);

        console.log(
          "===================================="
        );

        console.log(
          "Status:",
          response?.status
        );

        /*
         * Don't print the complete auth response
         * because it contains an access token.
         */
        console.log(
          "AuthResponse received:",
          !!response?.authResponse
        );

        /*
         |--------------------------------------------------------------------------
         | Login cancelled / failed
         |--------------------------------------------------------------------------
         */

        if (
          !response ||
          !response.authResponse
        ) {
          console.warn(
            "Facebook login/signup cancelled."
          );

          setLoading(false);

          setError(
            "Signup cancelled."
          );

          return;
        }

        const authResponse =
          response.authResponse;

        /*
         |--------------------------------------------------------------------------
         | Authorization Code
         |--------------------------------------------------------------------------
         */

        const authorizationCode =
          authResponse.code || "";

        /*
         * We only check whether a token exists.
         *
         * DO NOT log the actual token.
         */

        const accessToken =
          authResponse.accessToken || "";

        console.log(
          "Authorization Code:",
          authorizationCode
            ? "RECEIVED"
            : "NOT RECEIVED"
        );

        console.log(
          "Access Token:",
          accessToken
            ? "RECEIVED"
            : "NOT RECEIVED"
        );

        console.log(
          "Expires In:",
          authResponse.expiresIn
        );

        console.log(
          "User ID:",
          authResponse.userID
        );

        console.log(
          "Granted Scopes:",
          authResponse.grantedScopes
        );

        console.log(
          "Reauthorize Required:",
          authResponse.reauthorize_required_in
        );

        /*
         |--------------------------------------------------------------------------
         | Authorization code missing
         |--------------------------------------------------------------------------
         */

        if (!authorizationCode) {
          console.warn(
            "Meta FB.login callback did not return an authorization code."
          );

          console.warn(
            "The access token will NOT be used as code."
          );

          /*
           * Do not send the access token
           * to the BotBridge connect API as code.
           *
           * The Embedded Signup FINISH event
           * may already have arrived or may
           * still arrive.
           */

          setLoading(false);

          return;
        }

        /*
         |--------------------------------------------------------------------------
         | Authorization code received
         |--------------------------------------------------------------------------
         */

        console.log(
          "Meta authorization code received successfully."
        );

        /*
         * Store ONLY the authorization code.
         */

        setSignupData((prev) => ({
          ...prev,

          code: authorizationCode,
        }));
      },

      /*
       |--------------------------------------------------------------------------
       | Login for Business / Embedded Signup Configuration
       |--------------------------------------------------------------------------
       */

      {
        config_id: CONFIG_ID,

        /*
         * Request authorization-code response.
         */
        response_type: "code",

        /*
         * Do not allow Meta to fall back
         * to the default response type.
         */
        override_default_response_type: true,

        /*
         * Ask Meta to re-request the required
         * permissions/configuration when needed.
         */
        auth_type: "rerequest",

        /*
         * WhatsApp Embedded Signup settings.
         */
        extras: {
          setup: {},

          featureType:
            "whatsapp_business_app_onboarding",

          sessionInfoVersion: "3",
        },
      }
    );
  };

  /*
  |--------------------------------------------------------------------------
  | Reset Drawer
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!open) {
      return;
    }

    setConnected(false);

    setError("");

    setLoading(false);

    setSignupData({
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
  }, [open]);

  /*
  |--------------------------------------------------------------------------
  | UI
  |--------------------------------------------------------------------------
  */

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">

      <div className="flex h-full w-full max-w-md flex-col border-l border-slate-800 bg-[#020817] shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">

          <div>
            <h2 className="text-lg font-semibold text-white">
              Connect WhatsApp
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Official Meta Cloud API
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-slate-800"
          >
            <X
              size={18}
              className="text-slate-400"
            />
          </button>

        </div>

        {/* Body */}

        <div className="flex-1 overflow-y-auto px-6 py-6">

          {/* Description */}

          <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">

            <h3 className="font-semibold text-white">
              Connect your WhatsApp Business Account
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Securely connect your WhatsApp Business Account
              through Meta. BotBridge will automatically
              configure your Cloud API connection.
            </p>

          </div>

          {/* Features */}

          <div className="mt-6 space-y-3">

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="text-green-500">
                ✓
              </span>

              Official Meta Cloud API
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="text-green-500">
                ✓
              </span>

              Secure OAuth Authentication
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="text-green-500">
                ✓
              </span>

              No manual configuration
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="text-green-500">
                ✓
              </span>

              Connect in less than one minute
            </div>

          </div>

          {/* Step Indicator */}

          <div className="mt-8">

            <h4 className="mb-4 text-sm font-semibold text-white">
              Setup Steps
            </h4>

            <StepIndicator
              connected={connected}
            />

          </div>

          {/* Error */}

          {error && (

            <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4">

              <p className="text-sm text-red-400">
                {error}
              </p>

            </div>

          )}

          {/* Connected */}

          {connected && (

            <div className="mt-6 space-y-5">

              <SuccessCard />

              <ConnectionStatus
                signupData={signupData}
              />

            </div>

          )}

        </div>

        {/* Footer */}

        {!connected && (

          <div className="border-t border-slate-800 p-6">

            <MetaConnectButton
              loading={loading}
              onConnect={
                handleMetaSignup
              }
            />

            <p className="mt-4 text-center text-xs text-slate-500">
              By continuing, you authorize BotBridge to
              access your WhatsApp Business Account using
              Meta's official Embedded Signup flow.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}