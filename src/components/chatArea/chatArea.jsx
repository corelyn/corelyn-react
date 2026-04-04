import { useState } from 'react';
import './chatArea.css'
import { Button } from '../button/button.jsx';
export const Chatarea = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        if (e.key === 'Enter' && message.trim()) {
            const newMessage = { type: 'user', text: message };
            setMessages(prev => [...prev, newMessage]);
            setIsLoading(true);

            // Simulation of API call, TODO: Replace with actual API call
            setTimeout(() => {
                setMessages(prev => [...prev, { type: 'bot', text: 'Test message :D' }]);
                setIsLoading(false);
            }, 2000);

            setMessage('');
        }
    };

    return (
        <div className="chatarea">
            <div className="messages-list">
                {messages.map((msg, index) => (
                    <div
                        key={`${msg.type}-${index}`}
                        className={msg.type === 'user' ? 'user-message' : 'bot-message'}
                    >
                        {msg.text}
                    </div>
                ))}
                {isLoading && <div className="idle bot-message">Waiting for response...</div>}
            </div>
            <div className='input-box'>
                <input
                    id="messageInput"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleSubmit}
                    placeholder="Type a message..."
                />
                <a id="disclaimer"><p>Corelyn can make mistakes.  Vertify important info.</p></a>
            </div>
        </div>
    )
};