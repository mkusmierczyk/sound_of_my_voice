import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom'
import {useSpeechRecognition} from 'react-speech-kit';
import {useSpeechSynthesis} from 'react-speech-kit';


const VoiceControl = () => {
    const [value, setValue] = useState('');
    const [searchValue, setSearchValue] = useState("")
    const {speak} = useSpeechSynthesis();
    const {listen, listening, stop} = useSpeechRecognition({
        onResult: (result) => {
            setValue(result);
        },
    });
    useEffect(() => {
        if (value === "Grażyna przekaż pozdrowienia dla Asi") {
            const read = () => {
                speak({text: "Najserdeczniejsze Pozdrowienia z Brzegu Dolnego przesyła Grażyna i Mąż Janusz "})
            }
            read()

        }
        if (value.includes("YouTube") ) {
            const change = () => {
                window.location.href = `https://www.youtube.com/results?search_query=${value}`;
            }
            change()
        }
        if (value.includes("Google") ) {
            const change = () => {
                window.location.href = `http://www.google.com/search?q=${value}`;
            }
            change()
        }
    }, [value])

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