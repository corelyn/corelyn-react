import { useState } from 'react';
import './chatArea.css'

export const Chatarea = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = (e) => {
        if (e.key === 'Enter' && message.trim()) {
            setMessages([...messages, ``]);
            setMessage('');
        }
    };

    return (
        <div className="chatarea">
            {messages}
            <input
                id="messageInput"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleSubmit}
                placeholder="Type a message..."
            />
        </div>
    )
};