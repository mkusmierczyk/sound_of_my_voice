import React from 'react';
import './App.scss';

import TextToSpeech from "./textToSpeech";
import VoiceControl from "./voiceControl";

const App = () => {
    return (
        <>
            <TextToSpeech/>
            <VoiceControl/>
        </>
    );
}
export default App;
