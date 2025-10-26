import React, { useState, useRef } from 'react';
import './VoiceButton.css';
import { useNavigate } from 'react-router-dom';

const VoiceButton = () => {
  const navigate = useNavigate();
  const recognitionRef = useRef(null);
  const [listening, setListening] = useState(false);

  const startRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Voice recognition not supported in this browser.');
      return;
    }

    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'en-US'; // ✅ Better for Indian accent
      recognitionRef.current.interimResults = false;
      recognitionRef.current.maxAlternatives = 1;

      recognitionRef.current.onresult = (event) => {
        const spoken = event.results[0][0].transcript.toLowerCase().trim();
        console.log('Voice command:', spoken);
        setListening(false);

        // Navigation commands
        if (spoken.includes('home')) {
          navigate('/');
        } else if (spoken.includes('about')) {
          navigate('/about');
        } else if (spoken.includes('project') || spoken.includes('projects')) {
          navigate('/projects');
        } else if (
          spoken.includes('creative') ||
          spoken.includes('creative corner') ||
          spoken.includes('canvas')
        ) {
          navigate('/creative');
        } else if (spoken.includes('contact')) {
          navigate('/contact');
        }

        // Resume
        else if (
          spoken.includes('resume') ||
          spoken.includes('open my resume') ||
          spoken.includes('show my resume')
        ) {
          window.open('/NagunooriSiriRes.pdf', '_blank');
        }

        // Scrolling
        else if (spoken.includes('scroll down')) {
          window.scrollBy({ top: 500, behavior: 'smooth' });
        } else if (spoken.includes('scroll up')) {
          window.scrollBy({ top: -500, behavior: 'smooth' });
        }

        // Unknown command
        else {
          alert("Sorry, I didn't catch that. Try saying 'Go to About' or 'Open resume'.");
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech error:', event.error);
        setListening(false);
        alert('Mic error: ' + event.error);
      };

      recognitionRef.current.onend = () => {
        setListening(false);
      };
    }

    recognitionRef.current.start();
    setListening(true);
  };

  return (
    <button className="voice-btn" onClick={startRecognition}>
      {listening ? '🎤 Listening...' : '🎤'}
    </button>
  );
};

export default VoiceButton;

