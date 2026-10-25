import Panel from "../Common/Panel";
import Footer from "../Common/Footer";
import TextInput from "../Common/TextInput";
import SelectInput from "../Common/SelectInput";
import SwitchInput from "../Common/SwitchInput";

const DelayProperties = ({ flow, selectedNode }) => {
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
      title="Delay Properties"
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

      <TextInput
        label="Delay Value"
        value={selectedNode.data?.value || 5}
        onChange={(v) =>
          updateNodeData("value", Number(v))
        }
        placeholder="5"
      />

      <SelectInput
        label="Time Unit"
        value={selectedNode.data?.unit || "seconds"}
        onChange={(v) => updateNodeData("unit", v)}
        options={[
          { label: "Seconds", value: "seconds" },
          { label: "Minutes", value: "minutes" },
          { label: "Hours", value: "hours" },
          { label: "Days", value: "days" },
        ]}
      />

      <SwitchInput
        label="Show Typing Indicator"
        value={selectedNode.data?.typing ?? true}
        onChange={(v) => updateNodeData("typing", v)}
      />

      <SwitchInput
        label="Allow Skip"
        value={selectedNode.data?.allowSkip ?? false}
        onChange={(v) => updateNodeData("allowSkip", v)}
      />

      <SwitchInput
        label="Continue After Timeout"
        value={
          selectedNode.data?.continueAfterTimeout ?? true
        }
        onChange={(v) =>
          updateNodeData("continueAfterTimeout", v)
        }
      />

      <div className="rounded-lg border border-slate-700 bg-slate-900 p-3">
        <p className="text-sm text-slate-300">
          Current Delay
        </p>

        <p className="mt-1 text-lg font-semibold text-cyan-400">
          {selectedNode.data?.value || 5}{" "}
          {selectedNode.data?.unit || "seconds"}
        </p>
      </div>
    </Panel>
  );
};

export default DelayProperties;