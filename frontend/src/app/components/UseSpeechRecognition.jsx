import { useEffect, useRef, useState } from 'react';

const useSpeechRecognition = (onCommand) => {
  const [isListening, setIsListening] = useState(false);
  const [speechRecognition, setSpeechRecognition] = useState(null);
  const count = useRef(false)

  useEffect(() => {
    if(count.current === false){
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      console.error('Speech Recognition API not supported in this browser.');
      return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      console.log('Recognized command:', command); // Debugging line
      if (command.includes('login')) {
        onCommand();
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    setSpeechRecognition(recognition);
    count.current = true    
    }
    return () => {
      if (speechRecognition) {
        speechRecognition.stop();
      }
    };
  }, [onCommand, speechRecognition]);

  const startListening = () => {
    if (speechRecognition && !isListening) {
      setIsListening(true);
      speechRecognition.start();
    }
  };

  const stopListening = () => {
    if (speechRecognition && isListening) {
      setIsListening(false);
      speechRecognition.stop();
    }
  };

  return { isListening, startListening, stopListening };
};

export default useSpeechRecognition;
