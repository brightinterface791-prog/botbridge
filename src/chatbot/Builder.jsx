import { ReactFlowProvider } from "@xyflow/react";
import { Box } from "@mui/material";

import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";
import FlowCanvas from "./FlowCanvas";
import PropertiesPanel from "./PropertiesPanel";

import { useFlowBuilder } from "./hooks/useFlowBuilder";

const Builder = () => {

    const flow = useFlowBuilder();

    return (
        <ReactFlowProvider>

            <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>

                <Toolbar flow={flow} />

                <Box sx={{ flex: 1, display: "flex", overflow: "hidden" }}>

                    <Sidebar />

                    <FlowCanvas flow={flow} />

                    <PropertiesPanel flow={flow} selectedNode={flow.selectedNode} />

                </Box>

            </Box>

        </ReactFlowProvider>
    );
};

export default Builder;