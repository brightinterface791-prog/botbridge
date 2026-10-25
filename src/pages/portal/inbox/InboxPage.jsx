import { useEffect, useRef, useState } from "react";
import {
  Search, MoreVertical, Paperclip, Smile, Send, Check, CheckCheck,
  ChevronDown, UserRound, X, Plus, Phone, Globe, Link2, FileText,
  Zap, ArrowLeft, PanelRightOpen, MessageCircle,
} from "lucide-react";

// Drop-in main content only. Requires Tailwind CSS and lucide-react.
// Demo data and UI state are local; sending/assignment are not connected to an API.
const seedContacts = [
  { id: 1, name: "Priya Sharma", initials: "PS", color: "bg-violet-300", preview: "Could you share the catalogue?", time: "10:26 AM", unread: 2, assignee: "Arpit Singh", status: "Open", phone: "+91 98•••••210", tags: ["VIP customer", "Festive interest"], notes: ["Interested in the festive collection. Follow up tomorrow."] },
  { id: 2, name: "Rahul Mehta", initials: "RM", color: "bg-indigo-600 text-white", preview: "What's the price for bulk order?", time: "9:48 AM", unread: 3, assignee: "Arpit Singh", status: "Open", phone: "+91 98•••••542", tags: ["Bulk enquiry"], notes: [] },
  { id: 3, name: "Ayana Industries", initials: "AI", color: "bg-amber-200", preview: "Do you have GST invoice?", time: "9:12 AM", unread: 1, assignee: "Unassigned", status: "Open", phone: "+91 98•••••135", tags: ["Business"], notes: [] },
  { id: 4, name: "Neha Jain", initials: "NJ", color: "bg-violet-300", preview: "Thank you!", time: "Yesterday", unread: 4, assignee: "Unassigned", status: "Open", phone: "+91 98•••••308", tags: [], notes: [] },
  { id: 5, name: "Vikram Singh", initials: "VS", color: "bg-emerald-200", preview: "Can you confirm the delivery date?", time: "Yesterday", unread: 1, assignee: "Arpit Singh", status: "Open", phone: "+91 98•••••704", tags: ["Delivery"], notes: [] },
  { id: 6, name: "Anjali Gupta", initials: "AG", color: "bg-pink-200", preview: "Is this available in different colors?", time: "Oct 28", unread: 2, assignee: "Unassigned", status: "Open", phone: "+91 98•••••618", tags: [], notes: [] },
];
const seedThreads = {
  1: [
    { id: "p1", direction: "in", text: "Hi! I'm interested in your festive collection.", time: "10:24 AM" },
    { id: "p2", direction: "out", text: "Hi Priya! Happy to help. Are you looking for something specific?", time: "10:25 AM", delivered: true },
    { id: "p3", direction: "in", text: "Could you share the catalogue?", time: "10:26 AM" },
    { id: "p4", direction: "out", text: "Here you go! Let me know what you like.", file: { name: "Festive Collection.pdf", size: "2.4 MB" }, time: "10:27 AM", delivered: true },
  ],
};
const panel = "rounded-xl border border-[#1c3048] bg-[#0b1727]";
const field = "border border-[#30455f] bg-[#132238] text-[#e7edff] outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400";
const smallButton = "inline-flex items-center justify-center gap-2 rounded-lg border border-[#30455f] bg-[#102035] px-3 py-2 text-xs font-medium text-[#dce7ff] transition hover:bg-[#1b304a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400";
function Avatar({ contact, large = false }) {
  return <span className={`${large ? "h-16 w-16 text-xl" : "h-12 w-12 text-base"} ${contact.color} inline-flex shrink-0 items-center justify-center rounded-full border border-white/10 font-semibold text-[#091324] shadow-[inset_0_2px_8px_rgba(255,255,255,0.2)]`}>{contact.initials}</span>;
}
function IconButton({ label, children, onClick, ...props }) {
  return <button type="button" aria-label={label} title={label} onClick={onClick} className="rounded-md p-1.5 text-[#a8bde4] transition hover:bg-white/5 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" {...props}>{children}</button>;
}
function AssigneeSelect({ value, onChange }) {
  return <div className={`relative flex items-center rounded-lg ${field}`}>
    <UserRound size={17} className="pointer-events-none absolute left-3 text-[#b5c6e6]" />
    <select aria-label="Assign conversation" value={value} onChange={(e) => onChange(e.target.value)} className="w-full appearance-none rounded-lg bg-transparent py-2 pl-9 pr-8 text-xs font-medium outline-none">
      {["Arpit Singh", "Unassigned"].map((name) => <option key={name} className="bg-[#132238]">{name}</option>)}
    </select>
    <ChevronDown size={15} className="pointer-events-none absolute right-2 text-[#b5c6e6]" />
  </div>;
}

export default function InboxPage() {
  const [contacts, setContacts] = useState(seedContacts);
  const [selectedId, setSelectedId] = useState(1);
  const [threads, setThreads] = useState(seedThreads);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [mode, setMode] = useState("Reply");
  const [drafts, setDrafts] = useState({});
  const [attachments, setAttachments] = useState({});
  const [showDetails, setShowDetails] = useState(true);
  const [mobileDetails, setMobileDetails] = useState(false);
  const [mobileThread, setMobileThread] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [tagInput, setTagInput] = useState(null);
  const [noteInput, setNoteInput] = useState(null);
  const fileInput = useRef(null);
  const endRef = useRef(null);
  const sequence = useRef(0);
  const contact = contacts.find((item) => item.id === selectedId);
  const draftKey = `${selectedId}:${mode}`;
  const draft = drafts[draftKey] || "";
  const attachment = attachments[draftKey] || null;
  const messages = threads[selectedId] || [{ id: `first-${selectedId}`, direction: "in", text: contact.preview, time: contact.time }];
  const setDraft = (value) => setDrafts((current) => ({ ...current, [draftKey]: value }));
  const patchContact = (patch) => setContacts((current) => current.map((item) => item.id === selectedId ? { ...item, ...patch } : item));
  const visibleContacts = contacts.filter((item) => {
    const matchesText = `${item.name} ${item.preview}`.toLowerCase().includes(query.toLowerCase());
    return matchesText && (filter === "All" || (filter === "Mine" ? item.assignee === "Arpit Singh" : item.assignee === "Unassigned"));
  });
  const counts = { All: contacts.length, Mine: contacts.filter((c) => c.assignee === "Arpit Singh").length, Unassigned: contacts.filter((c) => c.assignee === "Unassigned").length };
  useEffect(() => { endRef.current?.scrollIntoView({ block: "nearest" }); }, [selectedId, threads]);
  const selectContact = (item) => {
    setSelectedId(item.id); setMobileThread(true); setShowMenu(false); setShowEmoji(false); setShowReplies(false); setTagInput(null); setNoteInput(null);
    setContacts((current) => current.map((c) => c.id === item.id ? { ...c, unread: 0 } : c));
  };
  const sendMessage = () => {
    if ((!draft.trim() && !attachment) || (mode === "Reply" && contact.status === "Resolved")) return;
    const time = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    const newMessage = { id: `local-${Date.now()}-${++sequence.current}`, direction: "out", text: draft.trim(), file: attachment, time, note: mode === "Internal note", local: true };
    setThreads((current) => ({ ...current, [selectedId]: [...messages, newMessage] }));
    if (mode === "Reply") patchContact({ preview: draft.trim() || attachment.name, time, unread: 0 });
    setDraft(""); setAttachments((current) => ({ ...current, [draftKey]: null })); setShowEmoji(false); setShowReplies(false);
  };

  return (
    <section className="flex h-full min-h-[680px] w-full min-w-0 flex-col bg-[#071321] p-3 text-[#eef0ff] sm:p-5" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
      <div className="mb-4 px-1">
        <h1 className="text-[28px] font-bold tracking-tight">Inbox</h1>
        <p className="mt-0.5 text-sm text-[#a8bde1]">Every conversation. One shared workspace.</p>
      </div>
      <div className={`relative grid min-h-0 flex-1 gap-2 ${showDetails ? "xl:grid-cols-[280px_minmax(0,1fr)_290px] 2xl:grid-cols-[320px_minmax(0,1fr)_320px]" : "xl:grid-cols-[280px_minmax(0,1fr)]"} md:grid-cols-[260px_minmax(0,1fr)]`}>
        {/* Main content: conversation list, not the application navigation sidebar. */}
        <section aria-label="Conversations" className={`${panel} ${mobileThread ? "hidden md:flex" : "flex"} min-h-0 flex-col overflow-hidden`}>
          <div className="px-3.5 pt-4">
            <h2 className="mb-4 text-lg font-semibold">Conversations</h2>
            <div className="relative">
              <Search size={19} className="pointer-events-none absolute left-3 top-2.5 text-[#acc0e4]" />
              <input aria-label="Search conversations" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search conversations" className={`${field} w-full rounded-lg py-2 pl-10 pr-3 text-sm placeholder:text-[#8198bd]`} />
            </div>
            <div className="mt-3 flex justify-between gap-1" role="tablist" aria-label="Conversation filter">
              {Object.keys(counts).map((tab) => <button type="button" role="tab" aria-selected={filter === tab} key={tab} onClick={() => setFilter(tab)} className={`flex items-center justify-center gap-1.5 border-b-2 px-2 py-2.5 text-xs font-medium ${filter === tab ? "border-cyan-400 text-cyan-300" : "border-transparent text-[#bdccec] hover:text-white"}`}>
                {tab}<span className={`rounded-full px-1.5 py-0.5 text-[11px] ${filter === tab ? "bg-cyan-400/10" : "bg-[#1b2a40]"}`}>{counts[tab]}</span>
              </button>)}
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">
            {visibleContacts.map((item) => <button key={item.id} type="button" onClick={() => selectContact(item)} aria-pressed={selectedId === item.id} className={`flex w-full items-center gap-3 border-b border-[#1b2b42] border-l-4 px-3 py-[18px] text-left transition ${selectedId === item.id ? "border-l-cyan-400 bg-[#102d43]" : "border-l-transparent hover:bg-[#122239]"}`}>
              <Avatar contact={item} />
              <span className="min-w-0 flex-1">
                <span className="flex items-center justify-between gap-1"><span className="truncate text-sm font-semibold">{item.name}</span><span className="shrink-0 text-[11px] font-normal text-[#adc1e4]">{item.time}</span></span>
                <span className="mt-1.5 flex items-center justify-between gap-2"><span className="truncate text-xs text-[#a6bce0]">{item.preview}</span>{item.unread > 0 && <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-400 px-1 text-[11px] font-semibold text-[#062034]">{item.unread}</span>}</span>
              </span>
            </button>)}
            {!visibleContacts.length && <p className="p-6 text-center text-sm text-slate-400">No matching conversations.</p>}
          </div>
        </section>

        <section aria-label={`Conversation with ${contact.name}`} className={`${panel} ${mobileThread ? "flex" : "hidden md:flex"} min-h-0 min-w-0 flex-col`}>
          <div className="flex flex-wrap items-center gap-2 border-b border-[#203149] px-3 py-4">
            <span className="md:hidden"><IconButton label="Back to conversations" onClick={() => setMobileThread(false)}><ArrowLeft size={20} /></IconButton></span>
            <Avatar contact={contact} />
            <div className="min-w-0 flex-1 pl-1">
              <h2 className="truncate text-base font-semibold">{contact.name}</h2>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-[#a5b9dc]"><MessageCircle size={16} className="text-green-400" />WhatsApp · {selectedId === 1 ? "Active now" : "Contact"}</p>
            </div>
            <div className="hidden xl:block"><AssigneeSelect value={contact.assignee} onChange={(value) => patchContact({ assignee: value })} /></div>
            <button type="button" className={smallButton} onClick={() => patchContact({ status: contact.status === "Open" ? "Resolved" : "Open" })}><Check size={17} /><span className="hidden lg:inline">{contact.status === "Open" ? "Resolve" : "Reopen"}</span></button>
            <IconButton label={showDetails ? "Hide contact details" : "Show contact details"} onClick={() => { if (window.innerWidth < 1280) { setShowDetails(true); setMobileDetails(!mobileDetails); } else { setShowDetails(!showDetails); } }}><PanelRightOpen size={18} /></IconButton>
            <div className="relative">
              <IconButton label="Conversation actions" onClick={() => setShowMenu(!showMenu)}><MoreVertical size={20} /></IconButton>
              {showMenu && <div className="absolute right-0 top-10 z-20 w-44 rounded-lg border border-[#30455f] bg-[#132238] p-1 shadow-xl">
                <button type="button" className="w-full rounded p-2 text-left text-xs hover:bg-white/10" onClick={() => { patchContact({ unread: 1 }); setShowMenu(false); }}>Mark as unread</button>
                <button type="button" className="w-full rounded p-2 text-left text-xs hover:bg-white/10" onClick={() => { patchContact({ assignee: "Unassigned" }); setShowMenu(false); }}>Unassign conversation</button>
              </div>}
            </div>
          </div>
          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-3" aria-live="polite" role="log">
            <div className="mb-4 text-center"><span className="inline-block rounded-full border border-[#1c324d] bg-[#13253c] px-4 py-1 text-xs text-[#c2d2ef]">Today</span></div>
            {messages.map((message) => <div key={message.id} className={`flex ${message.direction === "out" ? "justify-end" : "justify-start"}`}>
              <div className="max-w-[88%] sm:max-w-[82%]">
                <div className={`rounded-2xl p-3 text-sm leading-relaxed ${message.note ? "border border-amber-400/20 bg-amber-400/10 text-amber-100" : message.direction === "out" ? "rounded-br-sm bg-[#07445b]" : "rounded-bl-sm bg-[#1d2b40]"}`}>
                  {message.note && <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300">Internal note</p>}
                  {message.file && <div className="mb-2 flex items-center gap-3 rounded-xl border border-[#36445b] bg-[#182a40] p-3">
                    <span className="flex h-11 w-9 shrink-0 items-center justify-center rounded-md bg-[#f17e8b]"><FileText size={23} className="text-white" /></span>
                    <div className="min-w-0"><p className="break-all text-xs font-medium">{message.file.name}</p><p className="mt-1 text-xs text-[#b3c3df]">{message.file.name.toLowerCase().endsWith(".pdf") ? "PDF" : "File"} · {message.file.size}</p></div>
                  </div>}
                  <p className="whitespace-pre-wrap break-words">{message.text}</p>
                </div>
                <p className={`mt-1.5 flex items-center gap-2 px-2 text-[11px] text-[#9bb2d8] ${message.direction === "out" ? "justify-end" : ""}`}>{message.time}{message.delivered && <CheckCheck size={16} className="text-cyan-400" />}{message.local && <span className="text-[#8ba2c3]">Local preview</span>}</p>
              </div>
            </div>)}
            <div className="py-1 text-center"><span className="inline-flex items-center gap-2 rounded-2xl border border-[#21364f] bg-[#102036] px-4 py-2 text-xs text-[#adbee1]"><UserRound size={15} />{contact.assignee === "Unassigned" ? "Conversation unassigned" : `Assigned to ${contact.assignee}`}</span></div>
            <div ref={endRef} />
          </div>
          <div className="m-2 mt-0 rounded-xl border border-[#233b55] bg-[#0c192b]">
            <div className="flex items-center gap-2 rounded-t-xl bg-[#112339] px-3 py-2 text-[11px]"><span className={`h-2.5 w-2.5 rounded-full ${contact.status === "Open" ? "bg-green-400" : "bg-slate-400"}`} /><span className="font-medium text-cyan-300">{contact.status === "Open" ? "Reply window open" : "Conversation resolved"}</span><span className="text-[#afc2e5]">· {contact.status === "Open" ? "23h remaining" : "Reopen to reply"}</span></div>
            <div className="flex px-2" role="tablist" aria-label="Composer mode">{["Reply", "Internal note"].map((tab) => <button type="button" role="tab" aria-selected={mode === tab} key={tab} onClick={() => { setMode(tab); setShowReplies(false); }} className={`border-b-2 px-5 py-2 text-xs ${mode === tab ? "border-cyan-400 font-semibold text-cyan-300" : "border-transparent text-[#b5c7e6]"}`}>{tab}</button>)}</div>
            <div className={`relative m-1.5 rounded-xl ${field}`}>
              {attachment && <div className="mx-3 mt-2 flex items-center gap-2 rounded bg-white/5 px-2 py-1 text-xs"><Paperclip size={13} /><span className="truncate">{attachment.name}</span><IconButton label="Remove attachment" onClick={() => setAttachments((current) => ({ ...current, [draftKey]: null }))}><X size={12} /></IconButton></div>}
              <textarea aria-label={mode === "Reply" ? "Message" : "Internal note"} value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); sendMessage(); } }} rows={2} placeholder={mode === "Reply" ? "Type your message..." : "Write a private note for your team..."} className="w-full resize-none bg-transparent px-3 pt-3 text-sm outline-none placeholder:text-[#8fa8cf]" />
              <div className="flex items-center justify-between px-2 pb-2 pt-1">
                <div className="flex items-center gap-1">
                  <input ref={fileInput} type="file" className="hidden" onChange={(e) => { const file = e.target.files?.[0]; if (file) setAttachments((current) => ({ ...current, [draftKey]: { name: file.name, size: `${(file.size / 1024 / 1024).toFixed(1)} MB` } })); e.target.value = ""; }} />
                  <IconButton label="Attach a file" onClick={() => fileInput.current?.click()}><Paperclip size={20} /></IconButton>
                  <IconButton label="Choose emoji" onClick={() => { setShowEmoji(!showEmoji); setShowReplies(false); }}><Smile size={20} /></IconButton>
                  <IconButton label="Use catalogue reply" onClick={() => setDraft("Here is our catalogue. Let me know which products interest you.")}><FileText size={19} /></IconButton>
                  <IconButton label="Quick replies" onClick={() => { setShowReplies(!showReplies); setShowEmoji(false); }}><Zap size={19} /></IconButton>
                </div>
                <button type="button" onClick={sendMessage} disabled={(!draft.trim() && !attachment) || (mode === "Reply" && contact.status === "Resolved")} className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-[#042033] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"><Send size={18} />{mode === "Reply" ? "Send" : "Add note"}</button>
              </div>
              {showEmoji && <div className="absolute bottom-14 left-2 z-10 flex rounded-lg border border-[#30455f] bg-[#132238] p-2 shadow-xl">{["😊", "👍", "🙏", "❤️", "🎉"].map((emoji) => <button type="button" aria-label={`Insert ${emoji}`} key={emoji} onClick={() => { setDraft(draft + emoji); setShowEmoji(false); }} className="rounded p-2 hover:bg-white/10">{emoji}</button>)}</div>}
              {showReplies && <div className="absolute bottom-14 left-2 right-2 z-10 rounded-lg border border-[#30455f] bg-[#132238] p-1 shadow-xl">{["Thanks for reaching out! How can I help?", "I'll check this and get back to you shortly."].map((reply) => <button type="button" key={reply} onClick={() => { setDraft(reply); setShowReplies(false); }} className="block w-full rounded p-2 text-left text-xs hover:bg-white/10">{reply}</button>)}</div>}
            </div>
          </div>
        </section>

        {showDetails && <section aria-label="Contact details" className={`${panel} ${mobileDetails ? "block" : "hidden xl:block"} absolute inset-y-0 right-0 z-30 w-[min(320px,100%)] overflow-y-auto p-4 shadow-2xl xl:static xl:z-auto xl:block xl:w-auto xl:shadow-none`}>
          <div className="flex items-center justify-between"><h2 className="text-base font-semibold">Contact details</h2><IconButton label="Close contact details" onClick={() => { setShowDetails(false); setMobileDetails(false); }}><X size={18} /></IconButton></div>
          <div className="my-5 flex items-center gap-4"><Avatar contact={contact} large /><div className="min-w-0"><h3 className="truncate text-base font-semibold">{contact.name}</h3><p className="mt-1.5 flex items-center gap-2 text-xs text-[#b5c5e3]"><MessageCircle size={17} className="text-green-400" />WhatsApp contact</p></div></div>
          <div className="space-y-4 border-t border-[#2a3f5a] py-4">
            <div><label className="mb-2 block text-xs text-[#afc2e6]">Assigned to</label><AssigneeSelect value={contact.assignee} onChange={(value) => patchContact({ assignee: value })} /></div>
            <div className="flex items-center gap-5"><span className="text-xs text-[#afc2e6]">Status</span><div className="relative"><select aria-label="Conversation status" value={contact.status} onChange={(e) => patchContact({ status: e.target.value })} className="appearance-none rounded-full bg-cyan-400 py-1.5 pl-4 pr-8 text-xs font-semibold text-[#052033] outline-none focus:ring-2 focus:ring-cyan-200"><option>Open</option><option>Resolved</option></select><ChevronDown size={14} className="pointer-events-none absolute right-2 top-2 text-[#052033]" /></div></div>
            <div><p className="mb-2 text-xs text-[#afc2e6]">Tags</p><div className="flex flex-wrap gap-1.5">{contact.tags.map((tag, index) => <span key={tag} className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${index % 2 ? "bg-cyan-400/15 text-cyan-300" : "bg-violet-400/20 text-violet-300"}`}>{tag}</span>)}<button type="button" onClick={() => setTagInput("")} className={`${smallButton} !px-2 !py-1 !text-[10px]`}><Plus size={12} />Add tag</button></div>
              {tagInput !== null && <form className="mt-2 flex gap-1" onSubmit={(e) => { e.preventDefault(); if (tagInput.trim()) patchContact({ tags: [...new Set([...contact.tags, tagInput.trim()])] }); setTagInput(null); }}><input autoFocus aria-label="New tag" value={tagInput} onChange={(e) => setTagInput(e.target.value)} className={`${field} min-w-0 flex-1 rounded px-2 py-1 text-xs`} /><button className={smallButton}>Add</button></form>}
            </div>
          </div>
          <div className="space-y-3 border-t border-[#2a3f5a] py-4"><h3 className="text-xs font-medium text-[#afc2e6]">Contact information</h3>{[[Phone, "Phone", contact.phone], [Globe, "Language", "English"], [Link2, "Source", "Website"]].map(([Icon, label, value]) => <div key={label} className="grid grid-cols-[18px_72px_minmax(0,1fr)] items-center gap-2 text-xs"><Icon size={16} className="text-[#9fb6dc]" /><span className="text-[#aebfe0]">{label}</span><span className="truncate">{value}</span></div>)}</div>
          <div className="border-t border-[#2a3f5a] py-4"><h3 className="mb-2 text-xs font-medium text-[#afc2e6]">Notes</h3><div className="space-y-2">{contact.notes.map((note, index) => <p key={index} className="rounded-lg border border-[#2b405d] bg-[#122137] p-3 text-xs leading-relaxed text-[#d2def5]">{note}</p>)}</div>
            {noteInput !== null ? <form className="mt-2" onSubmit={(e) => { e.preventDefault(); if (noteInput.trim()) patchContact({ notes: [...contact.notes, noteInput.trim()] }); setNoteInput(null); }}><textarea autoFocus aria-label="Contact note" value={noteInput} onChange={(e) => setNoteInput(e.target.value)} className={`${field} w-full rounded-lg p-2 text-xs`} rows={3} /><button className={`${smallButton} mt-1`}>Save note</button></form> : <button type="button" onClick={() => setNoteInput("")} className={`${smallButton} mt-2`}><Plus size={15} />Add note</button>}
          </div>
          <div className="border-t border-[#2a3f5a] pt-4"><h3 className="mb-3 text-xs font-medium text-[#afc2e6]">Recent activity</h3><div className="flex items-start gap-3"><FileText size={20} className="text-[#a3bae3]" /><div className="text-xs"><p>{selectedId === 1 ? "Catalogue shared" : "Conversation received"}</p><p className="mt-1 text-[#9fb5d9]">{selectedId === 1 ? "Today, 10:27 AM" : contact.time}</p></div></div></div>
        </section>}
      </div>
    </section>
  );
}
