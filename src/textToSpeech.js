import React, {useEffect, useState} from 'react';
import {useSpeechSynthesis} from 'react-speech-kit';


const TextToSpeech = () => {
    const [counter, setCounter] = useState(0);
    const {speak} = useSpeechSynthesis();

    // useEffect(() => {
    //     const read = () => {
    //         speak({text: counter})
    //     }
    //      read()
    //
    //     setTimeout(() => {
    //         setCounter(counter + 1)
    //     }, 2000)
    // }, [counter])


    return (
        <>
            <div> {counter}</div>
        </>
    );
}

export default TextToSpeech;
