import { useEffect, useCallback, useState } from "react"

type TyperTypes = {
    inputWords: string;
    wpm?: number;
} 

const useTyper = ({inputWords, wpm = 60} : TyperTypes) : string => {
    const [currentLetters, setCurrentLetters] = useState('')
    const [index, setIndex] = useState(0)

    const addLetters = useCallback((interval: any) => {
        if (index < inputWords.length) {
            const newLetters = currentLetters + inputWords[index]
            setIndex(index + 1)
            setCurrentLetters(newLetters)
        } else {
            clearInterval(interval)
        }
    }, [index, currentLetters, inputWords])

    useEffect(() => {
        const interval = setInterval(() => addLetters(interval), 1000 / (wpm / 60))
        return () => {
            clearInterval(interval)
        }
    }, [addLetters, inputWords])

    useEffect(() => {
        setCurrentLetters('')
        setIndex(0)
    }, [inputWords])

    return currentLetters
} 

export default useTyper