import React, {useEffect, useState} from 'react';
import {useSpeechRecognition} from 'react-speech-kit';
import {useSpeechSynthesis} from 'react-speech-kit';

const VoiceControl = () => {
    const [value, setValue] = useState('');
    const {speak} = useSpeechSynthesis();
    const {listen, listening, stop} = useSpeechRecognition({
        onResult: (result) => {
            setValue(result);
        },
    });

        useEffect(()  => {
            if (value === "Grażyna Czy Jacek znajdzie szybko pracę"){
                const read = () => {
                    speak({text: "Tak bo jest przekozackim developerem"})
                }
                read()
            }
        },[value])

    return (
        <div>
      <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
      />
            <button onMouseDown={listen} onMouseUp={stop}>
                <span> 🎤 </span>
            </button>
            {listening && <div>Co chcesz powiedzieć ?</div>}
        </div>
    );
}
export default VoiceControl