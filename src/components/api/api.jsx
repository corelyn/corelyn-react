// For later. UI not done yet
// Prankapple if ur seeing this, HI!!! :3
// Backbone of the app

// Prankapple, also, I stole ur code from ur api page lol.

import { Modal } from '../modal/modal.jsx'
import { useState } from 'react';
import { Button } from '../button/button.jsx';

const models = [
    ""
];

export function save_api_key(apiKey) {
    localStorage.setItem('api_key', apiKey);
}

export function getApiKey() {
    return localStorage.getItem('api_key') || '';
}

export const LynStore = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Lyn</Button>
            <Modal isOpen={open} onClose={() => setOpen(false)}>Lyn</Modal>
        </>
    );
}

export const ApiKey = () => {
    const [openapi, setOpenapi] = useState(false);
    const [apiKey, setApiKey] = useState(() => localStorage.getItem('api_key') || '');
    
    return (
        <>
            <Button onClick={() => setOpenapi(true)}>API Key</Button>
            <Modal isOpen={openapi} onClose={() => setOpenapi(false)}>
                <label htmlFor="api-key">Put your API key here:</label>
                <input
                    id="api-key"
                    type="text"
                    value={apiKey}
                    onChange={(event) => setApiKey(event.target.value)}
                    placeholder="Enter your API key"
                />
                <br />
                <p>Never share your API key with anyone!</p>
                <Button onClick={() => {
                    save_api_key(apiKey);
                    setOpenapi(false);
                }}>
                    Save
                </Button>
            </Modal>
        </>
    );
}

export async function getAIResponse(userPrompt, model = 'cerebras/llama3.1-8b', lyn = 'You are Corelyn') {
    const apiKey = getApiKey();
    if (!apiKey) {
        throw new Error('No API key found. Please save your API key in the sidebar.');
    }
  try {
    const res = await fetch("https://api.corelyn.ro/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey: apiKey,
        model: model,
        messages: [
          { role: "system", content: lyn },
          { role: "user", content: userPrompt }
        ]
      })
    });

    const data = await res.json();

    console.log("AI Response:", data);

    return data.choices?.[0]?.message?.content || data.text || data;

  } catch (err) {
    console.error("Error fetching AI response:", err);
    throw err;
  }
}
