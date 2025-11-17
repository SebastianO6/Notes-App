import { useState } from "react"
import NotesList from "./components/NotesList"
import { nanoid } from 'nanoid'

 const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note",
    date: "1/05/2006" 
    },
    {
    id: nanoid(),
    text: "This is my second note",
    date: "20/05/2006" 
    },
    {
    id: nanoid(),
    text: "This is my third note",
    date: "12/05/2006" 
    }
  ]) 

   


  return (
    <div className="container">
      <NotesList notes = {notes}/>
    </div>
  )
 }

 export default App