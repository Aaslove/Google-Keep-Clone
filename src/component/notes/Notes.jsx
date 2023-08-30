import React from "react";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
// component import
import Form from "./Form";
import DisplayNote from "./DisplayNote";
import { DataContext } from "../context/DataProvider";
import EmptyNote from "./EmptyNote";

function Notes() {
  const contextValue = useContext(DataContext);
  const notes = contextValue.notes;

  const DrawerHeader = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));
  return (
    <>
      <Box sx={{ display: "flex", margin: "auto" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Form />
          {notes.length > 0 ? (
            <Grid container style={{ marginTop: 16 }}>
              {notes.map((note) => (
                <Grid item>
                  <DisplayNote note={note} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <EmptyNote />
          )}
        </Box>
      </Box>
    </>
  );
}

export default Notes;
