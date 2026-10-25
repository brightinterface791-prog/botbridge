import Panel from "../Common/Panel";
import Footer from "../Common/Footer";
import TextInput from "../Common/TextInput";
import TextArea from "../Common/TextArea";
import SelectInput from "../Common/SelectInput";
import SwitchInput from "../Common/SwitchInput";

const MessageProperties = ({ flow, selectedNode }) => {
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
        id: `${Date.now()}`,
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
      title="Message Properties"
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
        label="Message Type"
        value={selectedNode.data?.messageType || "text"}
        onChange={(v) => updateNodeData("messageType", v)}
        options={[
          { label: "Text", value: "text" },
          { label: "Template", value: "template" },
        ]}
      />

      <TextArea
        label="Message"
        rows={6}
        value={selectedNode.data?.message || ""}
        onChange={(v) => updateNodeData("message", v)}
        placeholder="Type your WhatsApp message..."
      />

      <TextInput
        label="Header"
        value={selectedNode.data?.header || ""}
        onChange={(v) => updateNodeData("header", v)}
      />

      <TextInput
        label="Footer"
        value={selectedNode.data?.footer || ""}
        onChange={(v) => updateNodeData("footer", v)}
      />

      <TextInput
        label="Variable Name"
        value={selectedNode.data?.variable || ""}
        onChange={(v) => updateNodeData("variable", v)}
        placeholder="{{customer_name}}"
      />

      <SelectInput
        label="Typing Delay"
        value={selectedNode.data?.typingDelay || 2}
        onChange={(v) =>
          updateNodeData("typingDelay", Number(v))
        }
        options={[
          { label: "No Delay", value: 0 },
          { label: "1 Second", value: 1 },
          { label: "2 Seconds", value: 2 },
          { label: "3 Seconds", value: 3 },
          { label: "5 Seconds", value: 5 },
          { label: "10 Seconds", value: 10 },
        ]}
      />

      <SwitchInput
        label="Save Contact"
        value={selectedNode.data?.saveContact || false}
        onChange={(v) => updateNodeData("saveContact", v)}
      />

      <SwitchInput
        label="Typing Indicator"
        value={selectedNode.data?.typingIndicator || true}
        onChange={(v) => updateNodeData("typingIndicator", v)}
      />

      <SwitchInput
        label="Continue On Error"
        value={selectedNode.data?.continueOnError || false}
        onChange={(v) =>
          updateNodeData("continueOnError", v)
        }
      />
    </Panel>
  );
};

export default MessageProperties;