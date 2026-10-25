import { useState } from "react";

const initialNodes = [
  {
    id: "start",
    type: "input",
    position: { x: 300, y: 50 },
    data: {
      label: "Start",
    },
  },
];

export const useFlowBuilder = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  return {
    nodes,
    setNodes,
    edges,
    setEdges,
    selectedNode,
    setSelectedNode,
  };
};