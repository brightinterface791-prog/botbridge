import Panel from "../Common/Panel";
import Footer from "../Common/Footer";
import TextInput from "../Common/TextInput";
import TextArea from "../Common/TextArea";
import SwitchInput from "../Common/SwitchInput";

const ImageProperties = ({ flow, selectedNode }) => {
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
      title="Image Properties"
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
        label="Image URL"
        value={selectedNode.data?.imageUrl || ""}
        onChange={(v) => updateNodeData("imageUrl", v)}
        placeholder="https://example.com/image.jpg"
      />

      <TextInput
        label="Media ID"
        value={selectedNode.data?.mediaId || ""}
        onChange={(v) => updateNodeData("mediaId", v)}
        placeholder="Optional WhatsApp Media ID"
      />

      <TextArea
        label="Caption"
        rows={4}
        value={selectedNode.data?.caption || ""}
        onChange={(v) => updateNodeData("caption", v)}
      />

      <SwitchInput
        label="Preview Image"
        value={selectedNode.data?.preview ?? true}
        onChange={(v) => updateNodeData("preview", v)}
      />

      <SwitchInput
        label="Downloadable"
        value={selectedNode.data?.downloadable ?? true}
        onChange={(v) => updateNodeData("downloadable", v)}
      />

      {selectedNode.data?.imageUrl && (
        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Preview
          </label>

          <img
            src={selectedNode.data.imageUrl}
            alt="Preview"
            className="w-full rounded-lg border border-slate-700 object-cover"
          />
        </div>
      )}
    </Panel>
  );
};

export default ImageProperties;