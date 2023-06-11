import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
//import notes from '../samplenotes';
import CreateArea from './CreateArea';


function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        //it is being called in CreateArea using props that is passed in below with props feature
        setNotes(preNotes => {
            return [...preNotes,
                newNote]
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Header></Header>
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
            })}
            {/* {notes.map((noteItem) =>
                <Note
                    key={noteItem.key}
                    title={noteItem.title}
                    content={noteItem.content}
                />
            )} */}
            <Footer />
        </div>
    )
}
export default App;