import React from "react";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
// component import
import { DataContext } from "../context/DataProvider";
import DisplayDelete from "./DisplayDelete";

function Delete() {
  const contextValue = useContext(DataContext);
  const deleteNotes = contextValue.deleteNotes;

  const DrawerHeader = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Grid container style={{ marginTop: 16 }}>
            {deleteNotes.map((note) => (
              <Grid item>
                <DisplayDelete note={note} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Delete;
