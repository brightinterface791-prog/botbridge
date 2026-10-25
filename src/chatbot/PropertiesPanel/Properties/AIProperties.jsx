import Panel from "../Common/Panel";
import Footer from "../Common/Footer";
import TextArea from "../Common/TextArea";
import TextInput from "../Common/TextInput";
import SelectInput from "../Common/SelectInput";
import SwitchInput from "../Common/SwitchInput";

const AIProperties = ({ flow, selectedNode }) => {
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
      title="AI Assistant"
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
        label="AI Provider"
        value={selectedNode.data?.provider || "openai"}
        onChange={(v) => updateNodeData("provider", v)}
        options={[
          { label: "OpenAI", value: "openai" },
          { label: "Google Gemini", value: "gemini" },
          { label: "Anthropic Claude", value: "claude" },
          { label: "DeepSeek", value: "deepseek" },
          { label: "Ollama", value: "ollama" },
        ]}
      />

      <TextInput
        label="Model"
        value={selectedNode.data?.model || ""}
        onChange={(v) => updateNodeData("model", v)}
        placeholder="gpt-5.5, gemini-2.5-pro..."
      />

      <TextArea
        label="System Prompt"
        rows={6}
        value={selectedNode.data?.prompt || ""}
        onChange={(v) => updateNodeData("prompt", v)}
      />

      <TextInput
        label="Temperature"
        value={selectedNode.data?.temperature ?? 0.7}
        onChange={(v) =>
          updateNodeData("temperature", Number(v))
        }
      />

      <TextInput
        label="Max Tokens"
        value={selectedNode.data?.maxTokens ?? 500}
        onChange={(v) =>
          updateNodeData("maxTokens", Number(v))
        }
      />

      <TextInput
        label="Save Response Variable"
        value={selectedNode.data?.responseVariable || ""}
        onChange={(v) =>
          updateNodeData("responseVariable", v)
        }
        placeholder="{{ai_response}}"
      />

      <SwitchInput
        label="Enable Memory"
        value={selectedNode.data?.memory ?? true}
        onChange={(v) => updateNodeData("memory", v)}
      />

      <SwitchInput
        label="Stream Response"
        value={selectedNode.data?.stream ?? false}
        onChange={(v) => updateNodeData("stream", v)}
      />

      <SwitchInput
        label="Fallback to Human"
        value={selectedNode.data?.fallback ?? false}
        onChange={(v) => updateNodeData("fallback", v)}
      />
    </Panel>
  );
};

export default AIProperties;