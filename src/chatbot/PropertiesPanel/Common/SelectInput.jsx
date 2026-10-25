const SelectInput = ({
  label,
  value,
  options = [],
  onChange,
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-400">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none focus:border-cyan-500"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;