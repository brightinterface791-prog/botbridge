import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, BatteryFull, Bot, CalendarDays,
  Check, CheckCheck, CheckCircle2, ChevronDown, Clock3, Eye, FileText,
  Info, MessageCircle, MoreVertical, Phone, Save, Send, ShieldCheck,
  Signal, Sparkles, Users, Wifi, X,
} from "lucide-react";

// Replace these sample records with your approved templates and opted-in audiences.
// Audience sizes are illustrative; validate recipients and permissions on the server.
const AUDIENCES = [
  { id: "engaged", name: "Engaged customers", count: 1240 },
  { id: "vip", name: "VIP customers", count: 320 },
  { id: "new", name: "New subscribers", count: 860 },
];
const TEMPLATES = [
  { id: "festive_offer", category: "Marketing", language: "English", code: "en", title: "Festive joy", message: "Your early access is here. Discover our festive collection and find something you’ll love.", cta: "Explore collection", banner: true },
  { id: "welcome_message", category: "Marketing", language: "English", code: "en", title: "Welcome aboard", message: "Welcome to our community! We’re happy you’re here. Look out for new collections, updates and something special.", cta: "Discover more", banner: false },
  { id: "appointment_reminder", category: "Utility", language: "English", code: "en", title: "Appointment reminder", message: "A reminder about your upcoming appointment. Please check your booking details for the date and time.", cta: "View appointment", banner: false },
];
const MAPPINGS = [
  { value: "first_name", label: "Contact first name", sample: "Priya" },
  { value: "full_name", label: "Contact full name", sample: "Priya Sharma" },
  { value: "custom", label: "Custom value", sample: "there" },
];
const fieldClass = "block w-full min-w-0 rounded-lg border border-slate-700/80 bg-slate-950/50 px-3.5 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/15 disabled:cursor-not-allowed disabled:opacity-60";
const secondaryClass = "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 disabled:cursor-not-allowed disabled:opacity-50";
const primaryClass = "inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-300/40 bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/20 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-50";
const formatNumber = (value) => value.toLocaleString("en-IN");
function istDate(offsetDays = 0) {
  return new Date(Date.now() + 19800000 + offsetDays * 86400000).toISOString().slice(0, 10);
}
function initialForm() {
  return { name: "", audienceId: "engaged", templateId: "festive_offer", variableSource: "first_name", customValue: "", delivery: "later", date: istDate(1), time: "10:00", consent: false };
}
function SelectField({ id, label, value, onChange, children, icon: Icon, ...props }) {
  return (
    <div className="min-w-0">
      {label && <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-slate-200">{label}</label>}
      <div className="relative">
        {Icon && <Icon size={17} aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />}
        <select id={id} value={value} onChange={onChange} className={`${fieldClass} appearance-none pr-10 ${Icon ? "pl-10" : ""}`} style={{ colorScheme: "dark" }} {...props}>{children}</select>
        <ChevronDown size={16} aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  );
}
function Section({ id, icon: Icon, title, description, children }) {
  return (
    <section id={id} tabIndex={-1} className="scroll-mt-6 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-900/50 p-4 outline-none sm:p-6">
      <div className="mb-6 flex items-start gap-3">
        <Icon size={24} strokeWidth={1.6} aria-hidden="true" className="mt-0.5 shrink-0 text-indigo-200" />
        <div><h2 className="text-sm font-semibold text-slate-100">{title}</h2><p className="mt-1 text-[10px] leading-relaxed text-slate-400 sm:text-xs">{description}</p></div>
      </div>
      {children}
    </section>
  );
}
function MessagePreview({ template, firstName, recipientCount, businessName, headerMediaUrl }) {
  return (
    <aside className="min-w-0 self-start rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-900/40 p-4 sm:p-5 xl:sticky xl:top-6" aria-label="Live WhatsApp message preview">
      <div className="flex items-start gap-3"><Eye size={23} className="shrink-0 text-indigo-200" /><div><h2 className="text-base font-semibold">Live message preview</h2><p className="mt-1 text-xs leading-relaxed text-slate-400">This is how your message will appear on WhatsApp.</p></div></div>
      <div className="mx-auto mt-6 max-w-[360px] overflow-hidden rounded-[36px] border-[5px] border-slate-700/70 bg-[#0a181c] shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between px-5 pb-2 pt-3 text-[10px] font-semibold"><span>9:41</span><span className="h-3 w-20 rounded-full bg-black/60" /><span className="flex gap-1"><Signal size={12} /><Wifi size={12} /><BatteryFull size={15} /></span></div>
        <div className="flex items-center gap-2.5 border-b border-white/5 bg-[#0c1c22] px-3 py-3">
          <ArrowLeft size={19} className="shrink-0 text-slate-300" aria-hidden="true" />
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300"><Bot size={26} /></span>
          <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{businessName}</p><p className="mt-0.5 text-[10px] text-slate-400">Business account</p></div>
          <Phone size={17} className="shrink-0 text-slate-300" aria-hidden="true" /><MoreVertical size={18} className="shrink-0 text-slate-300" aria-hidden="true" />
        </div>
        <div className="min-h-[370px] px-3 pb-6 pt-4 sm:px-4" style={{ backgroundColor: "#0c2328", backgroundImage: "radial-gradient(rgba(115,157,153,.10) 1px, transparent 1px)", backgroundSize: "17px 17px" }}>
          <div className="mb-4 text-center"><span className="rounded-md bg-black/20 px-3 py-1 text-[9px] text-slate-400">Today</span></div>
          <div className="overflow-hidden rounded-xl rounded-tl-none border border-white/5 bg-[#153b40] shadow-lg">
            {template.banner && (headerMediaUrl ? <img src={headerMediaUrl} alt="Campaign header" className="aspect-[1.85] w-full object-cover" /> : <div className="relative m-1 overflow-hidden rounded-lg border border-amber-200/10 bg-gradient-to-br from-emerald-950 via-[#143e36] to-[#5b4b25] px-4 py-6 text-center text-amber-100">
              <Sparkles size={18} className="absolute left-3 top-4 text-amber-200/50" /><Sparkles size={25} className="absolute bottom-4 right-3 text-amber-200/40" />
              <p className="text-[8px] tracking-[0.25em] text-amber-200/80">A LITTLE</p><p className="mt-2 font-serif text-[25px] leading-tight tracking-wide">FESTIVE JOY</p><p className="mt-2 font-serif text-xs text-amber-100/90">Good things. Just for you.</p>
            </div>)}
            <div className="px-3.5 pb-1 pt-3"><p className="break-words text-[13px] leading-6 text-slate-100">Hi {firstName} {template.category === "Marketing" ? "👋" : ""}</p><p className="mt-2.5 whitespace-pre-line text-[13px] leading-[1.75] text-slate-100">{template.message}</p><p className="mt-4 text-[10px] text-slate-400">{template.category === "Marketing" ? "Reply STOP to opt out." : "Thank you for choosing us."}</p><div className="mb-1 mt-2 flex justify-end gap-1 text-[9px] text-slate-400">10:00 AM <CheckCheck size={14} className="text-cyan-400" /></div></div>
            <div className="flex items-center justify-center gap-2 border-t border-white/10 py-3 text-xs font-semibold text-cyan-300">{template.cta}<ArrowUpRight size={15} /></div>
          </div>
          <p className="mt-5 text-center text-[9px] text-slate-500">Illustrative preview · sample contact</p>
        </div>
        <div className="flex items-center gap-2 bg-[#0b1c22] px-3 py-3"><span className="flex-1 rounded-full bg-white/5 px-4 py-2 text-xs text-slate-500">Message</span><span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/80 text-white"><MessageCircle size={17} /></span></div>
      </div>
      <div className="mt-6 grid grid-cols-2 divide-x divide-slate-700/70 border-t border-slate-800 pt-5">
        <div className="flex min-w-0 gap-2 pr-3"><Users size={18} className="shrink-0 text-indigo-200" /><div><p className="text-xs font-medium">{formatNumber(recipientCount)} recipients</p><p className="mt-1 text-[10px] text-slate-500">Estimated audience</p></div></div>
        <div className="flex min-w-0 gap-2 pl-3"><FileText size={18} className="shrink-0 text-indigo-200" /><div><p className="text-xs font-medium">{template.category} template</p><p className="mt-1 text-[10px] text-slate-500">Approved sample</p></div></div>
      </div>
    </aside>
  );
}

/**
 * Drop-in page: React + Tailwind CSS + lucide-react. No sidebar is included,
 * so this can sit inside your existing dashboard layout.
 * onSubmit(payload): OPTIONAL async callback for your backend integration.
 * onSaveDraft(payload): OPTIONAL async callback; otherwise saves locally.
 * draftStorageKey: use a workspace/user-specific key in a multi-tenant app.
 * headerMediaUrl: optional real template header image URL.
 * Replace sample records above with real server-approved template data.
 */
export default function CreateCampaign({
  businessName = "Bot Bridge",
  draftStorageKey = "botbridge:create-campaign:demo:v1",
  headerMediaUrl = "",
  onSubmit,
  onSaveDraft,
  onBack,
}) {
  const { setHeaderContent } = useOutletContext();
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    setHeaderContent(
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">Create broadcast</h1>
        <p className="text-xs text-slate-400">A thoughtful message. The right audience.</p>
      </div>
    );
    return () => setHeaderContent(null);
  }, [setHeaderContent]);
  
  // ... rest of component ...
  const [activeStep, setActiveStep] = useState(2);
  const [notice, setNotice] = useState(null);
  const [busy, setBusy] = useState(false);
  const [hasDraft, setHasDraft] = useState(false);
  const formRef = useRef(null);
  const dialogRef = useRef(null);
  const audience = AUDIENCES.find((item) => item.id === form.audienceId) || AUDIENCES[0];
  const template = TEMPLATES.find((item) => item.id === form.templateId) || TEMPLATES[0];
  const mapping = MAPPINGS.find((item) => item.value === form.variableSource) || MAPPINGS[0];
  const firstName = form.variableSource === "custom" ? form.customValue.trim() || "there" : mapping.sample;
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    try { setHasDraft(Boolean(localStorage.getItem(draftStorageKey))); } catch { setHasDraft(false); }
  }, [draftStorageKey]);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(null), 6500);
    return () => clearTimeout(timer);
  }, [notice]);
  function payload(status) {
    return { name: form.name.trim(), sendingAccount: businessName, audienceId: audience.id, templateId: template.id, language: template.code, variables: { first_name: { source: form.variableSource, ...(form.variableSource === "custom" ? { value: form.customValue.trim() } : {}) } }, delivery: form.delivery, scheduledAt: form.delivery === "later" && form.date && form.time ? `${form.date}T${form.time}:00+05:30` : null, timezone: "Asia/Kolkata", consentConfirmed: form.consent, status };
  }
  function validateSchedule() {
    if (form.delivery === "later" && (!form.date || !form.time || new Date(`${form.date}T${form.time}:00+05:30`).getTime() <= Date.now())) {
      setNotice({ type: "error", text: "Choose a future date and time in Asia/Kolkata." });
      return false;
    }
    return true;
  }
  function review(event) {
    event?.preventDefault();
    if (!formRef.current?.reportValidity()) return;
    if (!form.name.trim()) { setNotice({ type: "error", text: "Please enter a campaign name." }); return; }
    if (form.variableSource === "custom" && !form.customValue.trim()) { setNotice({ type: "error", text: "Enter a custom variable value." }); return; }
    if (!validateSchedule()) return;
    setActiveStep(3);
    dialogRef.current?.showModal();
  }
  async function saveDraft() {
    setBusy(true);
    try {
      if (onSaveDraft) await onSaveDraft(payload("draft"));
      else {
        localStorage.setItem(draftStorageKey, JSON.stringify({ version: 1, form: { ...form, consent: false } }));
        setHasDraft(true);
      }
      setNotice({ type: "success", text: onSaveDraft ? "Draft saved successfully." : "Draft saved in this browser. Consent must be confirmed before sending." });
    } catch { setNotice({ type: "error", text: "Could not save the draft. Please try again." }); }
    finally { setBusy(false); }
  }
  function restoreDraft() {
    try {
      const saved = JSON.parse(localStorage.getItem(draftStorageKey));
      if (saved?.version !== 1 || !saved.form || typeof saved.form !== "object") throw new Error("Invalid draft");
      const d = saved.form, defaults = initialForm();
      setForm({
        name: typeof d.name === "string" ? d.name.slice(0, 80) : "",
        audienceId: AUDIENCES.some((x) => x.id === d.audienceId) ? d.audienceId : defaults.audienceId,
        templateId: TEMPLATES.some((x) => x.id === d.templateId) ? d.templateId : defaults.templateId,
        variableSource: MAPPINGS.some((x) => x.value === d.variableSource) ? d.variableSource : defaults.variableSource,
        customValue: typeof d.customValue === "string" ? d.customValue.slice(0, 80) : "",
        delivery: d.delivery === "now" ? "now" : "later",
        date: /^\d{4}-\d{2}-\d{2}$/.test(d.date) ? d.date : defaults.date,
        time: /^\d{2}:\d{2}$/.test(d.time) ? d.time : defaults.time,
        consent: false,
      });
      setNotice({ type: "success", text: "Draft restored. Check its schedule and confirm audience consent." });
    } catch { setNotice({ type: "error", text: "This draft could not be restored." }); }
  }
  function jumpTo(step) {
    if (step === 3) { review(); return; }
    setActiveStep(step);
    const target = document.getElementById(step === 1 ? "bb-campaign-details" : "bb-audience-message");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    target?.focus({ preventScroll: true });
  }
  async function confirm() {
    if (!validateSchedule()) { dialogRef.current?.close(); return; }
    if (!onSubmit) {
      dialogRef.current?.close();
      setNotice({ type: "success", text: "Review complete. No messages were sent: connect onSubmit to your backend." });
      return;
    }
    setBusy(true);
    try {
      await onSubmit(payload(form.delivery === "later" ? "scheduled" : "queued"));
      dialogRef.current?.close();
      setNotice({ type: "success", text: "Your backend accepted the campaign. Check delivery status in Broadcasts." });
    } catch { dialogRef.current?.close(); setNotice({ type: "error", text: "The campaign could not be submitted. Your form has been kept." }); }
    finally { setBusy(false); }
  }

  return (
    <div className="min-h-screen min-w-0 bg-[#080f1e] text-slate-100 selection:bg-cyan-400/25">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8 2xl:px-10">
        {hasDraft && <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-cyan-900/50 bg-cyan-950/20 px-4 py-3 text-xs text-cyan-200"><span>A saved draft is available in this browser.</span><button type="button" onClick={restoreDraft} disabled={busy} className="font-semibold underline underline-offset-4">Restore draft</button></div>}
        <nav aria-label="Campaign steps" className="mb-7 grid grid-cols-3 gap-2 sm:gap-4 lg:max-w-[850px]">
          {["Campaign details", "Audience & message", "Review & schedule"].map((label, index) => {
            const step = index + 1;
            return <div key={label} className="flex min-w-0 items-center gap-3"><button type="button" onClick={() => jumpTo(step)} aria-current={activeStep === step ? "step" : undefined} className={`flex min-w-0 flex-1 flex-col items-center gap-2 text-center text-[10px] sm:flex-row sm:text-left sm:text-xs ${activeStep === step ? "text-cyan-300" : "text-slate-400"}`}><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-semibold ${activeStep === step ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-900/20" : "bg-slate-800 text-indigo-200"}`}>{step}</span><span>{label}</span></button>{step < 3 && <span aria-hidden="true" className={`hidden h-px w-6 shrink-0 lg:block xl:w-12 ${activeStep > step ? "bg-cyan-500/70" : "bg-slate-700"}`} />}</div>;
          })}
        </nav>
        <form id="bb-campaign-form" ref={formRef} onSubmit={review}>
          <div className="grid min-w-0 grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_360px] 2xl:grid-cols-[minmax(0,1fr)_400px]">
            <div className="min-w-0 space-y-5">
              <Section id="bb-campaign-details" icon={FileText} title="Campaign details" description="Give your broadcast a name and choose the sending account.">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div><label htmlFor="bb-name" className="mb-1.5 block text-xs font-medium">Campaign name <span className="text-cyan-400">*</span></label><input id="bb-name" value={form.name} onChange={(e) => update("name", e.target.value)} maxLength={80} required autoComplete="off" placeholder="Diwali early access" className={fieldClass} /></div>
                  <SelectField id="bb-account" label="Sending account" value="business" onChange={() => {}} icon={Bot}><option value="business">{businessName} · WhatsApp Business</option></SelectField>
                </div>
              </Section>
              <Section id="bb-audience-message" icon={Users} title="Audience & message" description="Choose who will receive this broadcast and the message template.">
                <div className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2">
                  <div><SelectField id="bb-audience" label="Audience" value={form.audienceId} onChange={(e) => update("audienceId", e.target.value)} icon={Users}>{AUDIENCES.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}</SelectField><p className="mt-2 text-xs text-cyan-400">{formatNumber(audience.count)} opted-in contacts <span className="text-slate-500">· sample</span></p></div>
                  <div><div className="mb-2 flex flex-wrap items-center justify-between gap-2"><label htmlFor="bb-template" className="text-sm font-medium">Approved template</label><span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-400"><CheckCircle2 size={12} />Approved sample</span></div><SelectField id="bb-template" value={form.templateId} onChange={(e) => update("templateId", e.target.value)} icon={FileText}>{TEMPLATES.map((t) => <option key={t.id} value={t.id}>{t.id}</option>)}</SelectField></div>
                  <SelectField id="bb-language" label="Language" value={template.code} onChange={() => {}}><option value={template.code}>{template.language}</option></SelectField>
                  <div className="min-w-0"><label htmlFor="bb-variable" className="mb-2 block text-sm font-medium">Template variables</label><div className="flex min-w-0 flex-wrap items-center gap-2"><code className="rounded-lg border border-slate-700/80 bg-slate-950/50 px-3 py-3 text-xs text-slate-200">{"{{first_name}}"}</code><ArrowRight size={15} className="shrink-0 text-slate-500" /><div className="min-w-[130px] flex-1"><SelectField id="bb-variable" value={form.variableSource} onChange={(e) => update("variableSource", e.target.value)}>{MAPPINGS.map((m) => <option key={m.value} value={m.value}>{m.label}</option>)}</SelectField></div></div>{form.variableSource === "custom" && <div className="mt-3"><label htmlFor="bb-custom" className="mb-2 block text-xs text-slate-400">Custom value</label><input id="bb-custom" required maxLength={80} value={form.customValue} onChange={(e) => update("customValue", e.target.value)} placeholder="Enter a name or greeting" className={fieldClass} /></div>}</div>
                </div>
              </Section>
              <Section id="bb-delivery" icon={Clock3} title="Delivery" description="Choose when to send your broadcast.">
                <fieldset><legend className="sr-only">Delivery timing</legend><div className="mb-5 flex flex-wrap gap-x-7 gap-y-3">{[{ value: "now", label: "Send now" }, { value: "later", label: "Schedule for later" }].map((item) => <label key={item.value} className="flex cursor-pointer items-center gap-2.5 text-sm"><input type="radio" name="delivery" value={item.value} checked={form.delivery === item.value} onChange={(e) => update("delivery", e.target.value)} className="h-4 w-4 accent-cyan-400" /><span className={form.delivery === item.value ? "text-slate-100" : "text-slate-400"}>{item.label}</span></label>)}</div></fieldset>
                {form.delivery === "later" ? <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2"><div><label htmlFor="bb-date" className="mb-2 block text-sm text-slate-300">Date</label><div className="relative"><CalendarDays size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" /><input id="bb-date" type="date" min={istDate()} required value={form.date} onChange={(e) => update("date", e.target.value)} style={{ colorScheme: "dark" }} className={`${fieldClass} pl-10`} /></div></div><div><label htmlFor="bb-time" className="mb-2 block text-sm text-slate-300">Time</label><input id="bb-time" type="time" required value={form.time} onChange={(e) => update("time", e.target.value)} style={{ colorScheme: "dark" }} className={fieldClass} /></div><p className="flex items-center gap-1.5 text-xs text-slate-400 sm:col-span-2"><Clock3 size={13} />Asia/Kolkata (UTC+05:30)</p></div> : <p className="rounded-lg border border-cyan-900/40 bg-cyan-950/15 px-3 py-3 text-xs leading-relaxed text-slate-400">The campaign can be submitted after you review and confirm its details.</p>}
                <label className="mt-6 flex cursor-pointer items-start gap-3 text-xs leading-6 text-slate-200 sm:text-sm"><input type="checkbox" required checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-cyan-400" /><span>Send only to contacts who have opted in to receive messages from my business.</span><Info size={15} aria-hidden="true" className="mt-1 shrink-0 text-slate-500" /></label>
              </Section>
              <div className="flex items-start gap-2 px-1 text-xs leading-relaxed text-slate-500"><ShieldCheck size={16} className="mt-0.5 shrink-0" /><span>Sample account, audiences and templates. Connect your backend to use real approved templates and recipient data.</span></div>
              <div className="flex flex-wrap gap-3 pt-4">
                  <button type="button" onClick={saveDraft} disabled={busy} className={`${secondaryClass} flex-1 sm:flex-none`}><Save size={17} />Save draft</button>
                  <button type="submit" disabled={busy} className={`${primaryClass} flex-1 sm:flex-none`}>Review broadcast<ArrowRight size={17} /></button>
              </div>
            </div>
            <MessagePreview template={template} firstName={firstName} recipientCount={audience.count} businessName={businessName} headerMediaUrl={headerMediaUrl} />
          </div>
        </form>
      </div>
      {notice && <div role={notice.type === "error" ? "alert" : "status"} className={`fixed bottom-5 left-4 right-4 z-[100] mx-auto flex max-w-lg items-start gap-3 rounded-xl border px-4 py-4 text-sm shadow-2xl sm:left-6 sm:right-6 ${notice.type === "error" ? "border-rose-700 bg-rose-950 text-rose-100" : "border-emerald-700 bg-emerald-950 text-emerald-100"}`}><Info size={18} className="mt-0.5 shrink-0" /><p className="flex-1 leading-relaxed">{notice.text}</p><button type="button" onClick={() => setNotice(null)} aria-label="Dismiss notification"><X size={17} /></button></div>}
      <dialog ref={dialogRef} onClose={() => setActiveStep(2)} onCancel={(event) => { if (busy) event.preventDefault(); }} className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-0 text-slate-100 shadow-2xl backdrop:bg-slate-950/80 backdrop:backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-5 sm:px-6"><h2 className="text-lg font-semibold">Review your broadcast</h2><button type="button" disabled={busy} onClick={() => dialogRef.current?.close()} aria-label="Close review" className="rounded p-1 hover:bg-slate-800"><X size={20} /></button></div>
        <div className="space-y-5 p-5 sm:p-6"><p className="text-sm text-slate-400">Check your audience and timing before continuing.</p><dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-4 text-sm"><dt className="text-slate-500">Campaign</dt><dd className="break-words">{form.name}</dd><dt className="text-slate-500">Account</dt><dd>{businessName}</dd><dt className="text-slate-500">Audience</dt><dd>{audience.name}<span className="mt-1 block text-xs text-cyan-300">{formatNumber(audience.count)} sample recipients</span></dd><dt className="text-slate-500">Template</dt><dd className="break-words">{template.id} · {template.language}</dd><dt className="text-slate-500">Delivery</dt><dd>{form.delivery === "now" ? "After confirmation" : `${form.date} at ${form.time}`}<span className="mt-1 block text-xs text-slate-500">Asia/Kolkata</span></dd></dl><div className="flex items-center gap-2 text-xs text-emerald-400"><Check size={15} />Audience consent confirmed</div>{!onSubmit && <p className="rounded-lg border border-cyan-900/40 bg-cyan-950/20 p-3 text-xs leading-relaxed text-cyan-200">Design preview only. No WhatsApp messages will be sent.</p>}</div>
        <div className="flex flex-wrap justify-end gap-3 border-t border-slate-800 p-5 sm:p-6"><button type="button" disabled={busy} onClick={() => dialogRef.current?.close()} className={secondaryClass}>Back to editing</button><button type="button" disabled={busy} onClick={confirm} className={primaryClass}>{busy ? "Submitting…" : <><Send size={16} />{onSubmit ? (form.delivery === "later" ? "Schedule broadcast" : "Submit broadcast") : "Finish preview"}</>}</button></div>
      </dialog>
    </div>
  );
}
