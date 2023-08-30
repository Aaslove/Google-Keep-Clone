import React from "react";
import { LightbulbOutlined as LightBulb } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Light = styled(LightBulb)`
  font-size: 120px;
  color: #f5f5f5;
`;

const Text = styled(Typography)`
  color: #80868b;
  font-size: 22px;
`;

function EmptyNote() {
  return (
    <Box>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20vh",
        }}
      >
        <Light />
        <Text>Notes you add appear here</Text>
      </div>
    </Box>
  );
}

export default EmptyNote;
