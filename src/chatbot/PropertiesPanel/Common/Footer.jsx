import {
  Copy,
  Trash2,
  Save,
} from "lucide-react";

const Footer = ({
  onDuplicate,
  onDelete,
  onSave,
}) => {
  return (
    <div className="border-t border-slate-700 p-4">

      <div className="flex gap-2">

        <button
          onClick={onDuplicate}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-800 py-2 text-white hover:bg-slate-700"
        >
          <Copy size={16} />
          Duplicate
        </button>

        <button
          onClick={onDelete}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 py-2 text-white hover:bg-red-700"
        >
          <Trash2 size={16} />
          Delete
        </button>

      </div>

      <button
        onClick={onSave}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 py-2 font-semibold text-white hover:bg-cyan-600"
      >
        <Save size={16} />
        Save Changes
      </button>
    </div>
  );
};

export default Footer;