import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext(null);

// local storage
const getLocalStorageitems = () => {
  let list = localStorage.getItem("lists");
  // console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

function DataProvider({ children }) {
  const [notes, setNotes] = useState(getLocalStorageitems);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deleteNotes, setDeleteNotes] = useState([]);
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(notes));
  }, [notes]);

  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setArchiveNotes,
        deleteNotes,
        setDeleteNotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
export { DataContext };
