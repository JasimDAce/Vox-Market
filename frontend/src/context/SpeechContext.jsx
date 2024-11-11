// 'use client';
// import React, { useState } from 'react';
// import useAppContext from './AppContext';

// const SpeechNavigator = () => {
//   const { handleVoiceCommand } = useAppContext();
//   const [message, setMessage] = useState("Tap to start listening...");

//   const startListening = () => {
//     if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
//       setMessage("Speech Recognition not supported in this browser.");
//       return;
//     }

//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();
//     recognition.continuous = false;
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     // Event when speech is recognized
//     recognition.onresult = (event) => {
//       const command = event.results[0][0].transcript.toLowerCase().trim();
//       setMessage(`Heard: "${command}"`);

//       // Pass the recognized command to the handleVoiceCommand function
//       handleVoiceCommand(command);
//     };

//     recognition.onspeechend = () => recognition.stop();
//     recognition.onerror = (event) => setMessage("Error occurred: " + event.error);

//     recognition.start();
//     setMessage("Listening...");
//   };

//   return (
//     <div style={{ height: "100vh", textAlign: "center", paddingTop: "20px" }}>
//       <h1>Speech Navigator</h1>
//       <button onClick={startListening} style={{ padding: "10px", fontSize: "16px" }}>Start Listening</button>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default SpeechNavigator;
