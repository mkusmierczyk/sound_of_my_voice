import React, {useEffect, useState} from 'react';
import {useSpeechRecognition} from 'react-speech-kit';
import {useSpeechSynthesis} from 'react-speech-kit';
import TextToSpeech from "./textToSpeech";


const VoiceControl = () => {
    const [value, setValue] = useState('');
    const {speak} = useSpeechSynthesis();

    const {listen, listening, stop} = useSpeechRecognition({
        onResult: (result) => {
            setValue(result);
        },
    });

    let myRegex = /.*?(?=[\wäöüß]+$)/i;

    useEffect(() => {
        if (value === "Grażyna jak się masz") {
            const read = () => {
                speak({text: "Dobrze Mateusz Dziekuje za troskę "})
            }
            read()
        }
        if (value.includes("YouTube")) {
            const youtube = () => {
                speak({text: "Już pokazuje najlepsze dopasowanie "})
                window.open(`https://www.youtube.com/results?search_query=${value.match(myRegex)}`);
            }
            youtube()
        }
        if (value.includes("Google")) {
            const google = () => {
                speak({text: "Już pokazuje najlepsze dopasowanie "})
                window.open(`http://www.google.com/search?q=${value.match(myRegex)}`);
            }
            google()
        }
        if (value.includes("mapy")) {
            const maps = () => {
                speak({text: "Już pokazuje najlepsze dopasowanie "})
                window.open(`http://www.google.com/maps?q=${value.match(myRegex)}`);
            }
            maps()
        }
        if (value.includes("nasłuch")) {
            stop()
        }
    }, [value])

    return (
        <div>
            <TextToSpeech value={value}/>
            <textarea
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button onClick={listen}>
                <span> 🎤 </span>
            </button>
            <button onClick={stop}>
                <span> 🎤 </span>
            </button>
            {listening && <div>Co chcesz powiedzieć ?</div>}

        </div>
    );
}
export default VoiceControl