import React, {useEffect, useState} from 'react';
import {useSpeechSynthesis} from 'react-speech-kit';

const TextToSpeech = ({value}) => {
    const [counter, setCounter] = useState(0);
    const {speak} = useSpeechSynthesis();

    useEffect(() => {
        if (value === "Resetuj licznik") {
            setCounter(0)
        }
        if (value.includes('X')) {
            const multiply = value
            console.log(multiply);
        }
        if (value === "Włącz odliczanie") {
            const read = () => {
                speak({text: counter})
            }
            read()
            setTimeout(() => {
                setCounter(counter + 1)
            }, 2000)
        }
    }, [counter, value])

    return (
        <>
            <div> {counter}</div>
        </>
    );
}

export default TextToSpeech;
