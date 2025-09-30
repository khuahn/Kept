import React, { useState } from 'react';

// The NoteCreator component (same as before)
const NoteCreator = ({ onNoteSaved }) => {
  const [noteContent, setNoteContent] = useState('');
  const [noteColor, setNoteColor] = useState('#ffeb3b');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!noteContent.trim()) {
      alert("Note content cannot be empty!");
      return;
    }

    const newNote = {
      id: Date.now(),
      content: noteContent.trim(),
      color: noteColor,
      timestamp: new Date().toLocaleTimeString(),
    };

    onNoteSaved(newNote);

    // Reset state
    setNoteContent('');
    setNoteColor('#ffeb3b');
  };

  return (
    <div className="note-creator-card" style={{ backgroundColor: noteColor }}>
      <form onSubmit={handleSubmit}>
        <textarea
          className="note-input"
          placeholder="What should be Kept? Start typing..."
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          rows="5"
          required
        />

        <div className="control-bar">
          <label htmlFor="color-picker" className="color-label">
            Color:
          </label>
          <input
            id="color-picker"
            type="color"
            className="color-picker"
            value={noteColor}
            onChange={(e) => setNoteColor(e.target.value)}
          />

          <button type="submit" className="save-button">
            Kept it!
          </button>
        </div>
      </form>
      
      <p className="status-message">
        {noteContent.length === 0 
          ? 'Ready for a new note.' 
          : `${noteContent.length} characters written.`
        }
      </p>
    </div>
  );
};

export default NoteCreator;
