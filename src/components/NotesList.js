import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({notes , handleAddNote , handleDeleteNote}) => {
    return (
    <div className="noteslist">
        {notes.map((note)=> <Note id={note.id} text={note.text} date={note.date}/>)}
        <AddNote handleAddNote={handleAddNote} handleDeleteNote={handleDeleteNote}/>
    </div>
    )
}

export default NotesList;