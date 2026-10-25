import { Handle, Position } from "@xyflow/react";
import { Paper, Typography } from "@mui/material";

export default function MessageNode() {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        width: 220,
        borderRadius: 2,
      }}
    >
      <Handle type="target" position={Position.Top} />

      <Typography fontWeight={600}>
        💬 Message
      </Typography>

      <Typography variant="body2">
        Message Node
      </Typography>

      <Handle type="source" position={Position.Bottom} />
    </Paper>
  );
}