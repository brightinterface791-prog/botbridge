import Panel from "../Common/Panel";
import Footer from "../Common/Footer";
import TextInput from "../Common/TextInput";
import TextArea from "../Common/TextArea";
import SelectInput from "../Common/SelectInput";
import SwitchInput from "../Common/SwitchInput";

const HumanProperties = ({ flow, selectedNode }) => {
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
      title="Human Agent"
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
        label="Department"
        value={selectedNode.data?.department || ""}
        onChange={(v) => updateNodeData("department", v)}
        options={[
          { label: "Select Department", value: "" },
          { label: "Sales", value: "sales" },
          { label: "Support", value: "support" },
          { label: "Billing", value: "billing" },
          { label: "Technical", value: "technical" },
          { label: "General", value: "general" },
        ]}
      />

      <SelectInput
        label="Priority"
        value={selectedNode.data?.priority || "medium"}
        onChange={(v) => updateNodeData("priority", v)}
        options={[
          { label: "Low", value: "low" },
          { label: "Medium", value: "medium" },
          { label: "High", value: "high" },
          { label: "Critical", value: "critical" },
        ]}
      />

      <TextInput
        label="Assign To"
        value={selectedNode.data?.assignTo || ""}
        onChange={(v) => updateNodeData("assignTo", v)}
        placeholder="Agent ID or Email"
      />

      <TextArea
        label="Message Before Transfer"
        rows={4}
        value={selectedNode.data?.message || ""}
        onChange={(v) => updateNodeData("message", v)}
        placeholder="Please wait while we connect you to a support agent."
      />

      <TextInput
        label="Queue Timeout (seconds)"
        value={selectedNode.data?.timeout || 300}
        onChange={(v) =>
          updateNodeData("timeout", Number(v))
        }
      />

      <TextInput
        label="Save Ticket Variable"
        value={selectedNode.data?.ticketVariable || ""}
        onChange={(v) =>
          updateNodeData("ticketVariable", v)
        }
        placeholder="{{ticket_id}}"
      />

      <SwitchInput
        label="Notify Customer"
        value={selectedNode.data?.notifyCustomer ?? true}
        onChange={(v) =>
          updateNodeData("notifyCustomer", v)
        }
      />

      <SwitchInput
        label="Close Bot Session"
        value={selectedNode.data?.closeBotSession ?? true}
        onChange={(v) =>
          updateNodeData("closeBotSession", v)
        }
      />

      <SwitchInput
        label="Resume Bot After Agent"
        value={selectedNode.data?.resumeBot ?? false}
        onChange={(v) => updateNodeData("resumeBot", v)}
      />
    </Panel>
  );
};

export default HumanProperties;