import Panel from "../Common/Panel";
import Footer from "../Common/Footer";
import TextInput from "../Common/TextInput";
import TextArea from "../Common/TextArea";
import SwitchInput from "../Common/SwitchInput";

const PdfProperties = ({ flow, selectedNode }) => {
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
      title="PDF Properties"
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
        label="Document URL"
        value={selectedNode.data?.documentUrl || ""}
        onChange={(v) => updateNodeData("documentUrl", v)}
        placeholder="https://example.com/file.pdf"
      />

      <TextInput
        label="WhatsApp Media ID"
        value={selectedNode.data?.mediaId || ""}
        onChange={(v) => updateNodeData("mediaId", v)}
      />

      <TextInput
        label="Filename"
        value={selectedNode.data?.filename || ""}
        onChange={(v) => updateNodeData("filename", v)}
        placeholder="Brochure.pdf"
      />

      <TextArea
        label="Caption"
        rows={3}
        value={selectedNode.data?.caption || ""}
        onChange={(v) => updateNodeData("caption", v)}
      />

      <SwitchInput
        label="Allow Download"
        value={selectedNode.data?.downloadable ?? true}
        onChange={(v) => updateNodeData("downloadable", v)}
      />

      <SwitchInput
        label="Track Download"
        value={selectedNode.data?.trackDownload ?? false}
        onChange={(v) => updateNodeData("trackDownload", v)}
      />

      {selectedNode.data?.documentUrl && (
        <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
          <p className="text-sm text-slate-300">
            📄 {selectedNode.data.filename || "Document.pdf"}
          </p>

          <p className="mt-2 break-all text-xs text-slate-500">
            {selectedNode.data.documentUrl}
          </p>
        </div>
      )}
    </Panel>
  );
};

export default PdfProperties;