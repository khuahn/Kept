import React from 'react';
import ReactDOM from 'react-dom/client';
import NotesDashboard from './NotesDashboard'; // Imports the main component

// Find the root element in the HTML (usually in index.html)
const rootElement = document.getElementById('root');

// Create the root container for the React application
const root = ReactDOM.createRoot(rootElement);

// Render the main NotesDashboard component into the root
root.render(
  <React.StrictMode>
    <NotesDashboard />
  </React.StrictMode>
);
