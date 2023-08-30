import React from "react";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
// component import
import DisplayArchive from "./DisplayArchive";
import { DataContext } from "../context/DataProvider";

function Archive() {
  const contextValue = useContext(DataContext);
  const archiveNotes = contextValue.archiveNotes;

  const DrawerHeader = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Grid container style={{ marginTop: 16 }}>
            {archiveNotes.map((note) => (
              <Grid item>
                <DisplayArchive note={note} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Archive;
