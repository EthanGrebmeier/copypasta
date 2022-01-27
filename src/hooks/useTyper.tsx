import { useEffect, useCallback, useState } from "react"

type TyperTypes = {
    inputWords: string;
    wpm?: number;
    ready?: boolean;
} 

const useTyper = ({inputWords, wpm = 600, ready} : TyperTypes) : [string, boolean] => {
    const [currentLetters, setCurrentLetters] = useState('')
    const [isFinished, setIsFinished] = useState(false)
    const [index, setIndex] = useState(0)

    const addLetters = useCallback((interval: any) => {
        if (index < inputWords.length) {
            const newLetters = currentLetters + inputWords[index]
            setIndex(index + 1)
            setCurrentLetters(newLetters)
        } else {
            clearInterval(interval)
            setIsFinished(true)
        }
    }, [index, currentLetters, inputWords])

    useEffect(() => {
        let interval
        if ((typeof ready !== 'undefined' && ready) || typeof ready == 'undefined') {
            interval = setInterval(() => addLetters(interval), 1000 / (wpm / 60))
        }
        return () => {
            clearInterval(interval)
        }
    }, [addLetters, inputWords])

    useEffect(() => {
        setCurrentLetters('')
        setIndex(0)
    }, [inputWords])

    return [currentLetters, isFinished]
} 

export default useTyper