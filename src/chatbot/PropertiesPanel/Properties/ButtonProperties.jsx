import { Plus, Trash2 } from "lucide-react";

import Panel from "../Common/Panel";
import Footer from "../Common/Footer";
import TextInput from "../Common/TextInput";
import TextArea from "../Common/TextArea";

const ButtonProperties = ({ flow, selectedNode }) => {
  const { setNodes } = flow;

  const updateNodeData = (key, value) => {
    setNodes((nodes) =>
      nodes.map((node) =>
        node.id === selectedNode.id
          ? {
              ...node,
              data: {
                ...node.data,
                [key]: value,
              },
            }
          : node
      )
    );
  };

  const buttons = selectedNode.data?.buttons || [];

  const updateButton = (index, value) => {
    const updated = [...buttons];
    updated[index].text = value;
    updateNodeData("buttons", updated);
  };

  const addButton = () => {
    if (buttons.length >= 3) return;

    updateNodeData("buttons", [
      ...buttons,
      {
        id: Date.now(),
        text: "",
      },
    ]);
  };

  const removeButton = (index) => {
    const updated = buttons.filter((_, i) => i !== index);
    updateNodeData("buttons", updated);
  };

  const duplicateNode = () => {
    setNodes((nodes) => {
      const copy = {
        ...selectedNode,
        id: `${Date.now()}`,
        position: {
          x: selectedNode.position.x + 40,
          y: selectedNode.position.y + 40,
        },
      };

      return [...nodes, copy];
    });
  };

  const deleteNode = () => {
    setNodes((nodes) =>
      nodes.filter((node) => node.id !== selectedNode.id)
    );
  };

  return (
    <Panel
      title="Button Properties"
      footer={
        <Footer
          onDuplicate={duplicateNode}
          onDelete={deleteNode}
          onSave={() => console.log("Saved")}
        />
      }
    >
      <TextInput
        label="Node Label"
        value={selectedNode.data?.label || ""}
        onChange={(value) => updateNodeData("label", value)}
      />

      <TextArea
        label="Message"
        rows={5}
        value={selectedNode.data?.message || ""}
        onChange={(value) => updateNodeData("message", value)}
      />

      <TextInput
        label="Footer"
        value={selectedNode.data?.footer || ""}
        onChange={(value) => updateNodeData("footer", value)}
      />

      <div>
        <div className="mb-3 flex items-center justify-between">
          <label className="text-sm text-slate-400">
            Buttons ({buttons.length}/3)
          </label>

          <button
            onClick={addButton}
            disabled={buttons.length >= 3}
            className="flex items-center gap-1 rounded bg-cyan-500 px-2 py-1 text-xs text-white hover:bg-cyan-600 disabled:cursor-not-allowed disabled:bg-slate-700"
          >
            <Plus size={14} />
            Add
          </button>
        </div>

        <div className="space-y-3">
          {buttons.map((button, index) => (
            <div
              key={button.id}
              className="rounded-lg border border-slate-700 bg-slate-900 p-3"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Button {index + 1}
                </span>

                <button
                  onClick={() => removeButton(index)}
                  className="text-red-400 hover:text-red-500"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <input
                value={button.text}
                onChange={(e) =>
                  updateButton(index, e.target.value)
                }
                placeholder="Button Text"
                className="w-full rounded-lg border border-slate-700 bg-[#020817] px-3 py-2 text-white outline-none focus:border-cyan-500"
              />
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
};

export default ButtonProperties;