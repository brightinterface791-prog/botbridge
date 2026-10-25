const TextInput = ({
  label,
  value,
  onChange,
  placeholder = "",
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-400">
        {label}
      </label>

      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none focus:border-cyan-500"
      />
    </div>
  );
};

export default TextInput;