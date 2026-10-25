import { Plus, Trash2 } from "lucide-react";

import Panel from "../Common/Panel";
import Footer from "../Common/Footer";
import TextInput from "../Common/TextInput";
import TextArea from "../Common/TextArea";
import SelectInput from "../Common/SelectInput";
import SwitchInput from "../Common/SwitchInput";

const ApiProperties = ({ flow, selectedNode }) => {
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

  const headers = selectedNode.data?.headers || [];

  const updateHeader = (index, key, value) => {
    const updated = [...headers];
    updated[index][key] = value;
    updateNodeData("headers", updated);
  };

  const addHeader = () => {
    updateNodeData("headers", [
      ...headers,
      {
        id: Date.now(),
        key: "",
        value: "",
      },
    ]);
  };

  const removeHeader = (index) => {
    updateNodeData(
      "headers",
      headers.filter((_, i) => i !== index)
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
      nodes.filter((n) => n.id !== selectedNode.id)
    );
  };

  return (
    <Panel
      title="API Request"
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
        label="Method"
        value={selectedNode.data?.method || "GET"}
        onChange={(v) => updateNodeData("method", v)}
        options={[
          { label: "GET", value: "GET" },
          { label: "POST", value: "POST" },
          { label: "PUT", value: "PUT" },
          { label: "PATCH", value: "PATCH" },
          { label: "DELETE", value: "DELETE" },
        ]}
      />

      <TextInput
        label="URL"
        value={selectedNode.data?.url || ""}
        onChange={(v) => updateNodeData("url", v)}
        placeholder="https://api.example.com/users"
      />

      <div>
        <div className="mb-3 flex items-center justify-between">
          <label className="text-sm text-slate-400">
            Headers
          </label>

          <button
            onClick={addHeader}
            className="flex items-center gap-1 rounded bg-cyan-500 px-2 py-1 text-xs text-white hover:bg-cyan-600"
          >
            <Plus size={14} />
            Header
          </button>
        </div>

        <div className="space-y-2">
          {headers.map((header, index) => (
            <div
              key={header.id}
              className="rounded-lg border border-slate-700 bg-slate-900 p-3"
            >
              <div className="mb-2 flex justify-end">
                <button
                  onClick={() => removeHeader(index)}
                  className="text-red-400"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <TextInput
                label="Key"
                value={header.key}
                onChange={(v) =>
                  updateHeader(index, "key", v)
                }
              />

              <div className="mt-2">
                <TextInput
                  label="Value"
                  value={header.value}
                  onChange={(v) =>
                    updateHeader(index, "value", v)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <TextArea
        label="Request Body (JSON)"
        rows={6}
        value={selectedNode.data?.body || ""}
        onChange={(v) => updateNodeData("body", v)}
      />

      <TextInput
        label="Timeout (ms)"
        value={selectedNode.data?.timeout || 30000}
        onChange={(v) =>
          updateNodeData("timeout", Number(v))
        }
      />

      <TextInput
        label="Save Response Variable"
        value={selectedNode.data?.responseVariable || ""}
        onChange={(v) =>
          updateNodeData("responseVariable", v)
        }
        placeholder="{{api_response}}"
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

export default ApiProperties;