import { useState } from 'react';
import './chatArea.css'
import { getAIResponse, getApiKey } from '../api/api.jsx';

export const Chatarea = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        if (e.key === 'Enter' && message.trim()) {
            e.preventDefault();
            const newMessage = { type: 'user', text: message };
            setMessages(prev => [...prev, newMessage]);
            setIsLoading(true);
            setMessage('');

            const apiKey = getApiKey();
            if (!apiKey) {
                setMessages(prev => [...prev, { type: 'bot', text: 'Please save your API key in the sidebar before sending a message.' }]);
                setIsLoading(false);
                return;
            }

            try {
                const responseText = await getAIResponse(message, 'gpt-4', 'You are Corelyn AI, a helpful assistant.');
                setMessages(prev => [...prev, { type: 'bot', text: responseText || 'No response received.' }]);
            } catch (error) {
                setMessages(prev => [...prev, { type: 'bot', text: `Error: ${error.message}` }]);
            } finally {
                setIsLoading(false);
            }
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
                        {typeof msg.text === 'string' ? msg.text : JSON.stringify(msg.text)}
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