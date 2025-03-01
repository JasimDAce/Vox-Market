'use client';
import React, { useState } from 'react';

const colors = ["aqua", "azure", "beige", "bisque", "black", "blue", "brown", "chocolate", "coral"];

const SpeechColorChanger = () => {
  const [bgColor, setBgColor] = useState("white");
  const [message, setMessage] = useState("Tap to start listening...");

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setMessage("Speech Recognition not supported in this browser.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    // Event when speech is recognized
    recognition.onresult = (event) => {
      // Clean up the transcript by removing punctuation and trimming whitespace
      let color = event.results[0][0].transcript.toLowerCase().replace(/[^\w\s]/gi, '').trim();
      setMessage(`Heard: "${color}"`);
      
      // Check if the recognized color is in the colors list
      if (colors.some((c) => color.includes(c))) {
        setBgColor(color);
      } else {
        setMessage("Color not recognized. Try again.");
        console.error("Unrecognized color:", color);
      }
    };

    recognition.onspeechend = () => recognition.stop();
    recognition.onerror = (event) => setMessage("Error occurred: " + event.error);
    
    recognition.start();
    setMessage("Listening...");
  };

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh", color: "#333", textAlign: "center", paddingTop: "20px" }}>
      <h1>Speech Color Changer</h1>
      <button onClick={startListening} style={{ padding: "10px", fontSize: "16px" }}>Start Listening</button>
      <p>{message}</p>
    </div>
  );
};

export default SpeechColorChanger;
