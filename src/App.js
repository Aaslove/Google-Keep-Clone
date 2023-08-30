import React from 'react'

import KeepNotes from './component/KeepNotes';
import DataProvider from './component/context/DataProvider';
function App() {
  return (
    <DataProvider>
      <KeepNotes />
    </DataProvider>
  )
}

export default App;