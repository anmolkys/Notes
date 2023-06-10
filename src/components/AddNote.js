import React, { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const [noteText,setNoteText] = useState('');
    const limit=200;
    const handleChange = (event) => {
        if(limit-event.target.value.length>=0){
            setNoteText(event.target.value);
        }
    };

    const handleSave = () =>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return(<div className="note new">
        <textarea rows='8'
        cols='10'
        placeholder="New note ..."
        onChange={handleChange}
        value={noteText}></textarea>
        <div className="note-footer">
            <small>{limit-noteText.length} Remaining</small>
            <button className="save" onClick={handleSave}>Save</button>
        </div>
    </div>)
}

export default AddNote;