import { Plus, Trash2 } from "lucide-react";

import Panel from "../Common/Panel";
import Footer from "../Common/Footer";
import TextInput from "../Common/TextInput";
import SelectInput from "../Common/SelectInput";

const ConditionProperties = ({ flow, selectedNode }) => {
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

  const conditions = selectedNode.data?.conditions || [];

  const updateCondition = (index, key, value) => {
    const updated = [...conditions];
    updated[index][key] = value;
    updateNodeData("conditions", updated);
  };

  const addCondition = () => {
    updateNodeData("conditions", [
      ...conditions,
      {
        id: Date.now(),
        variable: "",
        operator: "equals",
        value: "",
      },
    ]);
  };

  const removeCondition = (index) => {
    updateNodeData(
      "conditions",
      conditions.filter((_, i) => i !== index)
    );
  };

  const duplicateNode = () => {
    setNodes((nodes) => [
      ...nodes,
      {
        ...selectedNode,
        id: Date.now().toString(),
        position: {
          x: selectedNode.position.x + 40,
          y: selectedNode.position.y + 40,
        },
      },
    ]);
  };

  const deleteNode = () => {
    setNodes((nodes) =>
      nodes.filter((node) => node.id !== selectedNode.id)
    );
  };

  return (
    <Panel
      title="Condition Properties"
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
        onChange={(v) => updateNodeData("label", v)}
      />

      <SelectInput
        label="Match Type"
        value={selectedNode.data?.match || "all"}
        onChange={(v) => updateNodeData("match", v)}
        options={[
          { label: "All Conditions (AND)", value: "all" },
          { label: "Any Condition (OR)", value: "any" },
        ]}
      />

      <div className="flex items-center justify-between">
        <label className="text-sm text-slate-400">
          Conditions
        </label>

        <button
          onClick={addCondition}
          className="flex items-center gap-1 rounded bg-cyan-500 px-2 py-1 text-xs text-white hover:bg-cyan-600"
        >
          <Plus size={14} />
          Add
        </button>
      </div>

      <div className="space-y-4">
        {conditions.map((condition, index) => (
          <div
            key={condition.id}
            className="rounded-lg border border-slate-700 bg-slate-900 p-3"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-white">
                Condition {index + 1}
              </span>

              <button
                onClick={() => removeCondition(index)}
                className="text-red-400 hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <TextInput
              label="Variable"
              value={condition.variable}
              onChange={(v) =>
                updateCondition(index, "variable", v)
              }
              placeholder="{{customer_name}}"
            />

            <div className="mt-3">
              <SelectInput
                label="Operator"
                value={condition.operator}
                onChange={(v) =>
                  updateCondition(index, "operator", v)
                }
                options={[
                  {
                    label: "Equals",
                    value: "equals",
                  },
                  {
                    label: "Not Equals",
                    value: "not_equals",
                  },
                  {
                    label: "Contains",
                    value: "contains",
                  },
                  {
                    label: "Starts With",
                    value: "starts_with",
                  },
                  {
                    label: "Ends With",
                    value: "ends_with",
                  },
                  {
                    label: "Greater Than",
                    value: "greater_than",
                  },
                  {
                    label: "Less Than",
                    value: "less_than",
                  },
                  {
                    label: "Is Empty",
                    value: "empty",
                  },
                  {
                    label: "Is Not Empty",
                    value: "not_empty",
                  },
                ]}
              />
            </div>

            <div className="mt-3">
              <TextInput
                label="Value"
                value={condition.value}
                onChange={(v) =>
                  updateCondition(index, "value", v)
                }
              />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
};

export default ConditionProperties;