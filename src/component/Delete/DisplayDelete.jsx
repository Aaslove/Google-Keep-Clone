import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArchiveOutlined as Archive } from "@mui/icons-material";
import {
  DeleteOutlineOutlined as Delete,
  RestoreFromTrashOutlined as Restore,
} from "@mui/icons-material";
import { useContext } from "react";

import { DataContext } from "../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  border-radius: 8px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
`;
function DisplayDelete({ note }) {
  const contextValue = useContext(DataContext);

  const deleteNotes = contextValue.notes;
  const setNotes = contextValue.setNotes;
  const setArchiveNotes = contextValue.setArchiveNotes;
  const setDeleteNotes = contextValue.setDeleteNotes;

  const deleteNote = (note) => {
    const updatedNote = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(updatedNote);
  };
  const undeleteNote = (note) => {
    const updatedNote = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(updatedNote);
    setNotes((preNote) => [note, ...preNote]);
  };
  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Delete
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => {
            deleteNote(note);
          }}
        />
        <Restore
          fontSize="small"
          onClick={() => {
            undeleteNote(note);
          }}
        />
      </CardActions>
    </StyledCard>
  );
}

export default DisplayDelete;
