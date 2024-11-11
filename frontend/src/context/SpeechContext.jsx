import "regenerator-runtime/runtime";
import React, { createContext, useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useRouter } from "next/navigation";

const SpeechContext = createContext();

const SpeechProvider = ({ children }) => {
  const [command, setCommand] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    console.log("Login command detected");
    router.push("/login");
  };

  const commands = [
    {
      command: "*",
      callback: (transcript) => {
        if (transcript.toLowerCase().includes('home')) {
          console.log("home command detected");
          window.location.href = "/";   
         
        }
        if (transcript.toLowerCase().includes("sign up.")) {
          console.log("signup command detected");
            window.location.href = "/signup";
          //router.push("/signup");
        }
        if (transcript.toLowerCase().includes("seller login")) {
          console.log("seller login command detected");
          window.location.href = "/seller-login";
        //  router.push("/seller-login");
        }
        if (transcript.toLowerCase().includes("login")) {
            router.push("/login");
            //   handleLogin();
        } else {
          console.log(`Command not found ${transcript}`);
        }
      },
    },
  ];

  const { transcript, resetTranscript, listening } = useSpeechRecognition({
    commands,
  });

  useEffect(() => {
    if (transcript) {
      setCommand(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    // Automatically stop listening when the user stops speaking
    if (listening) {
      SpeechRecognition.onend = () => {
        console.log("User stopped speaking, stopping microphone.");
        SpeechRecognition.stopListening();
      };
    }
  }, [listening]);

  const startListening = () => {
    if (SpeechRecognition) {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    } else {
      console.warn("SpeechRecognition is not available");
    }
  };

  const stopListening = () => {
    if (SpeechRecognition) {
      SpeechRecognition.stopListening();
    }
  };

  return (
    <SpeechContext.Provider value={{ command, startListening, stopListening }}>
      {children}
    </SpeechContext.Provider>
  );
};

export { SpeechContext, SpeechProvider };
