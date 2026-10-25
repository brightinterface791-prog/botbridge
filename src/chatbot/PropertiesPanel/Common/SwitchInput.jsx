const SwitchInput = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center justify-between">

      <span className="text-sm text-slate-300">
        {label}
      </span>

      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  );
};

export default SwitchInput;