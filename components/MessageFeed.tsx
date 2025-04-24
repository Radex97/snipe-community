import React, { useState, useEffect } from "react";
import { getMessages } from "../firebase/auth";

const MessageFeed = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const messagesData = await getMessages();
      setMessages(messagesData);
    };
    fetchMessages();
  }, []);

  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Nachrichten-Feed</h2>
      {messages.length === 0 ? (
        <p>Keine Nachrichten vorhanden</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <li key={message.id} className="mb-2">
              {message.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MessageFeed;