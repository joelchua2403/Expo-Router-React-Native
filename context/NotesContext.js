import React, { createContext, useState } from 'react';

const NotesContext = createContext();

const NotesProvider = ({children}) => {
    const [text, setText] = useState('');
    const [notes, setNotes] = useState([]);
    return (
        <NotesContext.Provider value={{text, setText, notes, setNotes}}>
        {children}
        </NotesContext.Provider>
    );
    }

export { NotesContext, NotesProvider };