import Panel from "../Common/Panel";
import Footer from "../Common/Footer";
import TextInput from "../Common/TextInput";
import TextArea from "../Common/TextArea";
import SwitchInput from "../Common/SwitchInput";

const VideoProperties = ({ flow, selectedNode }) => {
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
      title="Video Properties"
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
        label="Video URL"
        value={selectedNode.data?.videoUrl || ""}
        onChange={(v) => updateNodeData("videoUrl", v)}
        placeholder="https://example.com/video.mp4"
      />

      <TextInput
        label="WhatsApp Media ID"
        value={selectedNode.data?.mediaId || ""}
        onChange={(v) => updateNodeData("mediaId", v)}
        placeholder="Optional"
      />

      <TextArea
        label="Caption"
        rows={3}
        value={selectedNode.data?.caption || ""}
        onChange={(v) => updateNodeData("caption", v)}
      />

      <SwitchInput
        label="Auto Play"
        value={selectedNode.data?.autoplay ?? false}
        onChange={(v) => updateNodeData("autoplay", v)}
      />

      <SwitchInput
        label="Loop Video"
        value={selectedNode.data?.loop ?? false}
        onChange={(v) => updateNodeData("loop", v)}
      />

      <SwitchInput
        label="Muted"
        value={selectedNode.data?.muted ?? false}
        onChange={(v) => updateNodeData("muted", v)}
      />

      {selectedNode.data?.videoUrl && (
        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Preview
          </label>

          <video
            src={selectedNode.data.videoUrl}
            controls
            className="w-full rounded-lg border border-slate-700"
          />
        </div>
      )}
    </Panel>
  );
};

export default VideoProperties;