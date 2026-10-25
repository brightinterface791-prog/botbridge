import { useCallback, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  useReactFlow,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import "../assets/styles/flowcontrols.css";

import MessageNode from "./nodeTypes/MessageNode";
import ButtonNode from "./nodeTypes/ButtonNode";
import ListNode from "./nodeTypes/ListNode";
import ImageNode from "./nodeTypes/ImageNode";
import PdfNode from "./nodeTypes/PdfNode";
import VideoNode from "./nodeTypes/VideoNode";
import ConditionNode from "./nodeTypes/ConditionNode";
import DelayNode from "./nodeTypes/DelayNode";
import ApiNode from "./nodeTypes/ApiNode";
import HumanNode from "./nodeTypes/HumanNode";
import DatabaseNode from "./nodeTypes/DatabaseNode";
import AiNode from "./nodeTypes/AiNode";

const nodeTypes = {
  message: MessageNode,
  button: ButtonNode,
  list: ListNode,
  image: ImageNode,
  pdf: PdfNode,
  video: VideoNode,
  condition: ConditionNode,
  delay: DelayNode,
  api: ApiNode,
  human: HumanNode,
  database: DatabaseNode,
  ai: AiNode,
};

const FlowCanvas = ({ flow }) => {
  const {
    nodes,
    setNodes,
    edges,
    setEdges,
    setSelectedNode,
  } = flow;

  const [showMiniMap] = useState(true);

  const { screenToFlowPosition } = useReactFlow();

  const onNodesChange = useCallback(
    (changes) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => {
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },
    [setEdges]
  );

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
          },
          eds
        )
      );
    },
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData(
        "application/reactflow"
      );

      if (!type) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: `${Date.now()}`,
        type,
        position,
        data: {
          label: type,
          message: "",
        },
      };

      setNodes((nds) => [...nds, newNode]);
    },
    [screenToFlowPosition, setNodes]
  );

  const onSelectionChange = useCallback(
    ({ nodes }) => {
      setSelectedNode(nodes[0] || null);
    },
    [setSelectedNode]
  );

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onSelectionChange={onSelectionChange}
        deleteKeyCode={["Delete", "Backspace"]}
        snapToGrid
        snapGrid={[15, 15]}
        panOnScroll
        selectionOnDrag
      >
        <Background
          gap={24}
          size={1}
          color="#334155"
        />

        <Controls
          position="top-right"
          showInteractive={false}
        />

        {showMiniMap && (
          <MiniMap
            zoomable
            pannable
            style={{
              backgroundColor: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "8px",
            }}
            maskColor="rgba(15,23,42,0.6)"
            nodeColor="#06b6d4"
          />
        )}
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;