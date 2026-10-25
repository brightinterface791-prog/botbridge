import { Plus, Trash2 } from "lucide-react";

import Panel from "../Common/Panel";
import Footer from "../Common/Footer";
import TextInput from "../Common/TextInput";
import TextArea from "../Common/TextArea";

const ListProperties = ({ flow, selectedNode }) => {
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

  const sections = selectedNode.data?.sections || [];

  const updateSection = (index, key, value) => {
    const updated = [...sections];
    updated[index][key] = value;
    updateNodeData("sections", updated);
  };

  const addSection = () => {
    updateNodeData("sections", [
      ...sections,
      {
        id: Date.now(),
        title: "",
        rows: [],
      },
    ]);
  };

  const removeSection = (index) => {
    const updated = sections.filter((_, i) => i !== index);
    updateNodeData("sections", updated);
  };

  const updateRow = (sectionIndex, rowIndex, key, value) => {
    const updated = [...sections];
    updated[sectionIndex].rows[rowIndex][key] = value;
    updateNodeData("sections", updated);
  };

  const addRow = (sectionIndex) => {
    const updated = [...sections];

    updated[sectionIndex].rows.push({
      id: Date.now(),
      title: "",
      description: "",
    });

    updateNodeData("sections", updated);
  };

  const removeRow = (sectionIndex, rowIndex) => {
    const updated = [...sections];

    updated[sectionIndex].rows =
      updated[sectionIndex].rows.filter(
        (_, i) => i !== rowIndex
      );

    updateNodeData("sections", updated);
  };
    return (
    <Panel
      title="List Message"
      footer={
        <Footer
          onDuplicate={() => {}}
          onDelete={() => {}}
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
        label="Header"
        value={selectedNode.data?.header || ""}
        onChange={(v) => updateNodeData("header", v)}
      />

      <TextArea
        label="Body"
        rows={5}
        value={selectedNode.data?.body || ""}
        onChange={(v) => updateNodeData("body", v)}
      />

      <TextInput
        label="Footer"
        value={selectedNode.data?.footer || ""}
        onChange={(v) => updateNodeData("footer", v)}
      />

      <TextInput
        label="Button Text"
        value={selectedNode.data?.buttonText || ""}
        onChange={(v) => updateNodeData("buttonText", v)}
      />

      <div className="flex items-center justify-between">

        <label className="text-sm text-slate-400">
          Sections
        </label>

        <button
          onClick={addSection}
          className="flex items-center gap-1 rounded bg-cyan-500 px-2 py-1 text-xs text-white hover:bg-cyan-600"
        >
          <Plus size={14} />
          Section
        </button>

      </div>

      <div className="space-y-4">
        {sections.map((section, sectionIndex) => (
          <div
            key={section.id}
            className="rounded-lg border border-slate-700 bg-slate-900 p-3"
          >
            <div className="mb-3 flex items-center justify-between">

              <span className="font-medium text-white">
                Section {sectionIndex + 1}
              </span>

              <button
                onClick={() =>
                  removeSection(sectionIndex)
                }
                className="text-red-400"
              >
                <Trash2 size={16} />
              </button>

            </div>

            <TextInput
              label="Section Title"
              value={section.title}
              onChange={(v) =>
                updateSection(sectionIndex, "title", v)
              }
            />
                        <div className="mt-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-slate-300">
                  Rows ({section.rows.length})
                </span>

                <button
                  onClick={() => addRow(sectionIndex)}
                  className="flex items-center gap-1 rounded bg-cyan-500 px-2 py-1 text-xs text-white hover:bg-cyan-600"
                >
                  <Plus size={14} />
                  Row
                </button>
              </div>

              <div className="space-y-3">
                {section.rows.map((row, rowIndex) => (
                  <div
                    key={row.id}
                    className="rounded-lg border border-slate-700 bg-[#020817] p-3"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        Row {rowIndex + 1}
                      </span>

                      <button
                        onClick={() =>
                          removeRow(sectionIndex, rowIndex)
                        }
                        className="text-red-400 hover:text-red-500"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <TextInput
                      label="Title"
                      value={row.title}
                      onChange={(v) =>
                        updateRow(
                          sectionIndex,
                          rowIndex,
                          "title",
                          v
                        )
                      }
                    />

                    <div className="mt-3">
                      <TextArea
                        label="Description"
                        rows={2}
                        value={row.description}
                        onChange={(v) =>
                          updateRow(
                            sectionIndex,
                            rowIndex,
                            "description",
                            v
                          )
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
};

export default ListProperties;