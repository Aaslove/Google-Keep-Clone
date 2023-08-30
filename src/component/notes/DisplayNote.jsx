import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArchiveOutlined as Archive } from "@mui/icons-material";
import { DeleteOutlineOutlined as Delete } from "@mui/icons-material";
import { useContext } from "react";

import { DataContext } from "../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  border-radius: 8px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
`;
function DisplayNote({ note }) {
  const contextValue = useContext(DataContext);

  const notes = contextValue.notes;
  const setNotes = contextValue.setNotes;
  const setArchiveNotes = contextValue.setArchiveNotes;
  const setDeleteNotes = contextValue.setDeleteNotes;

  const archiveNote = (note) => {
    // console.log("Hello");
    const updatedNote = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNote);
    setArchiveNotes((preNote) => [note, ...preNote]);
  };
  const deleteNote = (note) => {
    const updatedNote = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNote);
    setDeleteNotes((preNote) => [note, ...preNote]);
  };
  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Archive
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => {
            archiveNote(note);
          }}
        />
        <Delete
          fontSize="small"
          onClick={() => {
            deleteNote(note);
          }}
        />
      </CardActions>
    </StyledCard>
  );
}

export default DisplayNote;
