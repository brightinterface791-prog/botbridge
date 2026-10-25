import { Plus, Trash2 } from "lucide-react";

import Panel from "../Common/Panel";
import Footer from "../Common/Footer";
import TextInput from "../Common/TextInput";
import TextArea from "../Common/TextArea";
import SelectInput from "../Common/SelectInput";
import SwitchInput from "../Common/SwitchInput";

const DatabaseProperties = ({ flow, selectedNode }) => {
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

  const mappings = selectedNode.data?.mappings || [];

  const updateMapping = (index, key, value) => {
    const updated = [...mappings];
    updated[index][key] = value;
    updateNodeData("mappings", updated);
  };

  const addMapping = () => {
    updateNodeData("mappings", [
      ...mappings,
      {
        id: Date.now(),
        column: "",
        value: "",
      },
    ]);
  };

  const removeMapping = (index) => {
    updateNodeData(
      "mappings",
      mappings.filter((_, i) => i !== index)
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
      title="Database"
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
        label="Database"
        value={selectedNode.data?.database || "mysql"}
        onChange={(v) => updateNodeData("database", v)}
        options={[
          { label: "MySQL", value: "mysql" },
          { label: "PostgreSQL", value: "postgres" },
          { label: "MongoDB", value: "mongodb" },
          { label: "SQLite", value: "sqlite" },
          { label: "SQL Server", value: "sqlserver" },
        ]}
      />

      <SelectInput
        label="Operation"
        value={selectedNode.data?.operation || "select"}
        onChange={(v) => updateNodeData("operation", v)}
        options={[
          { label: "SELECT", value: "select" },
          { label: "INSERT", value: "insert" },
          { label: "UPDATE", value: "update" },
          { label: "DELETE", value: "delete" },
        ]}
      />

      <TextInput
        label="Table Name"
        value={selectedNode.data?.table || ""}
        onChange={(v) => updateNodeData("table", v)}
      />

      <TextArea
        label="WHERE Clause"
        rows={3}
        value={selectedNode.data?.where || ""}
        onChange={(v) => updateNodeData("where", v)}
        placeholder="id={{customer_id}}"
      />

      <div>
        <div className="mb-3 flex items-center justify-between">
          <label className="text-sm text-slate-400">
            Column Mapping
          </label>

          <button
            onClick={addMapping}
            className="flex items-center gap-1 rounded bg-cyan-500 px-2 py-1 text-xs text-white hover:bg-cyan-600"
          >
            <Plus size={14} />
            Add
          </button>
        </div>

        <div className="space-y-3">
          {mappings.map((mapping, index) => (
            <div
              key={mapping.id}
              className="rounded-lg border border-slate-700 bg-slate-900 p-3"
            >
              <div className="mb-2 flex justify-end">
                <button
                  onClick={() => removeMapping(index)}
                  className="text-red-400"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <TextInput
                label="Column"
                value={mapping.column}
                onChange={(v) =>
                  updateMapping(index, "column", v)
                }
              />

              <div className="mt-2">
                <TextInput
                  label="Value / Variable"
                  value={mapping.value}
                  onChange={(v) =>
                    updateMapping(index, "value", v)
                  }
                  placeholder="{{customer_name}}"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <TextInput
        label="Save Result Variable"
        value={selectedNode.data?.resultVariable || ""}
        onChange={(v) =>
          updateNodeData("resultVariable", v)
        }
        placeholder="{{db_result}}"
      />

      <SwitchInput
        label="Continue On Error"
        value={selectedNode.data?.continueOnError ?? false}
        onChange={(v) =>
          updateNodeData("continueOnError", v)
        }
      />
    </Panel>
  );
};

export default DatabaseProperties;