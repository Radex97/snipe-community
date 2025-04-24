'use client';

import { useState } from 'react';
import { addMessage } from '../firebase/auth';

const CreateMessage = () => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Hier die Logik zum Speichern der Nachricht hinzufügen
    addMessage(message);
    console.log("Nachricht gesendet:", message);
    setMessage(""); // Nachricht nach dem Senden löschen
  };

  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Nachricht erstellen</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border p-2 rounded-md mb-4"
          placeholder="Deine Nachricht..."
          value={message}
          onChange={handleInputChange}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Senden
        </button>
      </form>
    </div>
  );
};

export default CreateMessage;