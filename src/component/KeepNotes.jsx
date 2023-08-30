import React from "react";
import SlidingDrawer from "./SlidingDrawer";
import { Box } from "@mui/material";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// Self Made
import Notes from "./notes/Notes";
import Archive from "./Archive/Archive";
import Delete from "./Delete/Delete";

function KeepNotes() {
  return (
    <>
      <Box style={{ display: "flex" }}>
        <Router>
          <SlidingDrawer />
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/Archive" element={<Archive />} />
            <Route path="/Delete" element={<Delete />} />
          </Routes>
        </Router>
      </Box>
    </>
  );
}

export default KeepNotes;
