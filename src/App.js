import { useEffect, useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
const App = () => {
  const d=new Date();
  const dnew=d.toLocaleDateString();
  const [notes,setNotes] = useState([{
    text:"Add some text in the GREEN BOX to add a Note , The website is under construction so the DELETION will not work. (For Now)",
    date:dnew,
    id: nanoid(),
  },
  ]);

  useEffect(()=>{
    const saved=JSON.parse(localStorage.getItem('react-notes-yssmvv-data'));
  
    if(saved){
      setNotes(saved);
    }
  },[])


  useEffect(()=> {
    localStorage.setItem('react-notes-yssmvv-data', JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid(),
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) =>{
    const newList = notes.filter((note) => note.id!==id);
    console.log(newList)
  }

  const [search,setSearch] = useState('');


  return (
    <div className="container">
      <Search handleSearch={setSearch}></Search>
      <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  )
}

export default App
