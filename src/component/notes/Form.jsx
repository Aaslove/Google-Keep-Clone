import React, { useState, useRef, useContext, useEffect } from "react";

// MUI
import { TextField, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ClickAwayListener } from "@mui/base";
// UUID
import { v4 as uuid } from "uuid";
// Context Api
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  min-height: 30px;
`;

const note = {
  id: "",
  heading: "",
  text: "",
};

function Form() {
  // const [notes, setNotes] = useContext(DataContext);
  const contextValue = useContext(DataContext);

  // Accessing the properties directly
  const setNotes = contextValue.setNotes;
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });
  const [showtextfield, setShowtextfield] = useState(false);
  const containerRef = useRef();

  const handleInputClick = () => {
    setShowtextfield(true);
    containerRef.current.style.minHeight = "70px";
  };
  const handleClickAway = () => {
    setShowtextfield(false);
    containerRef.current.style.minHeight = "30px";
    setAddNote({ ...note, id: uuid() });
    if (addNote.heading || addNote.text) {
      setNotes((prevArr) => [addNote, ...prevArr]);
    }
  };

  const onTextChange = (e) => {
    // console.log(e.target.name, e.target.value);
    const updatedNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(updatedNote);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showtextfield && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange={onTextChange}
            name="heading"
            value={addNote.heading}
          />
        )}
        <TextField
          placeholder="Take a note..."
          multiline
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={handleInputClick}
          onChange={(e) => onTextChange(e)}
          name="text"
          value={addNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
}

export default Form;
