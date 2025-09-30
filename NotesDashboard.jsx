import React, { useState } from 'react';
import NoteCreator from './NoteCreator'; // Imports the component above
// Note: In a real project, you would need to create a simple CSS file and link it!

// Sub-component to Display a Single Note
const NoteItem = ({ note }) => (
  <div className="kept-note-item" style={{ backgroundColor: note.color }}>
    <p className="note-content">{note.content}</p>
    <div className="note-footer">
      <small>Kept at: {note.timestamp}</small>
    </div>
  </div>
);

// Main Dashboard Component
const NotesDashboard = () => {
  const [notes, setNotes] = useState([]);

  const handleSaveNote = (newNote) => {
    // Adds the new note to the beginning of the 'notes' array
    setNotes(prevNotes => [newNote, ...prevNotes]);
  };

  return (
    <div className="notes-dashboard-container">
      
      <header className="app-header">
        <h1>Kept: Notes Dashboard</h1>
        <p className="slogan">The definitive way to note. Kept. 📝</p>
      </header>
      
      <section className="note-creator-section">
        <h2>Create a New Note</h2>
        <NoteCreator onNoteSaved={handleSaveNote} />
      </section>

      <hr />

      <section className="notes-list-section">
        <h2>Your Kept Notes ({notes.length})</h2>

        {/* Conditional rendering */}
        {notes.length === 0 ? (
          <div className="empty-state">
            <p>You haven't **Kept** anything yet! Use the creator above.</p>
          </div>
        ) : (
          <div className="notes-grid">
            {notes.map((note) => (
              <NoteItem key={note.id} note={note} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default NotesDashboard;
