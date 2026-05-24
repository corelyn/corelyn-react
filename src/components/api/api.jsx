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

export const LynStore = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Lyn</Button>
            <Modal isOpen={open} onClose={() => setOpen(false)}>Lyn</Modal>
        </>
    );
}



const ApiKey = () => {
    let [openapi, setOpenapi] = useState(false);
    
    return (
        <>
        <Modal isOpen={openapi} onClose={() => setOpenapi(false)}>
            Put your API key here: <input type="text" placeholder="i forgot the name, gonna fix later. PRANKAPPLE!-..." /><br></br>
            <p>Never share your API key with anyone!</p>
            <Button onClick={() => setOpenapi(false)}>Save</Button>
        </Modal>
        </>
    );
}


async function getAIResponse(userPrompt, apiKey, model, lyn) {
  try {
    const res = await fetch("https://api.corelyn.ro/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey: apiKey, // Add your api key here
        model: model, // Replace with your model
        messages: [
          { role: "system", content: lyn }, // system instruction
          { role: "user", content: userPrompt }                         // user input
        ]
      })
    });

    const data = await res.json();

    // Log full AI response
    console.log("AI Response:", data);

    // Return just the text of the first choice
    return data.choices?.[0]?.message?.content || data.text || data;

  } catch (err) {
    console.error("Error fetching AI response:", err);
    return null;
  }
}

getAIResponse("What is your name?").then(response => {
  console.log("Final Response:", response);
});