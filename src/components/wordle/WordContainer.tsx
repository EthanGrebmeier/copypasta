import { useState } from "react";
import styled from "styled-components";
import Column from "../Column";
import Row from "../Row";
import GuessRow from "./GuessRow";
import Keyboard from "./Keyboard";
import LetterBox from "./LetterBox";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: 
`

type GuessObjectType = {
    guessArray?: string[],
    setGuessArray: (guessArray:string[]) => void,
}

const WordContainer = () : JSX.Element => {
    const word = ['p', 'e', 'n', 'i', 's']
    const [guessCount, setGuessCount] = useState(0)
    const [guessIndex, setGuessIndex] = useState(0)
    const [guessOne, setGuessOne] = useState([null, null, null, null, null])
    const [guessTwo, setGuessTwo] = useState([null, null, null, null, null])
    const [guessThree, setGuessThree] = useState([null, null, null, null, null])
    const [guessFour, setGuessFour] = useState([null, null, null, null, null])
    const [guessFive, setGuessFive] = useState([null, null, null, null, null])
    const [guessSix, setGuessSix] = useState([null, null, null, null, null])
    const [statusMessage, setStatusMessage] = useState('')
    const [isFinished, setIsFinished] = useState(false)

    const guesses : GuessObjectType[] = [
        {
            guessArray: guessOne,
            setGuessArray: setGuessOne,
        },
        {
            guessArray: guessTwo,
            setGuessArray: setGuessTwo,
        },
        {
            guessArray: guessThree,
            setGuessArray: setGuessThree,
        },
        {
            guessArray: guessFour,
            setGuessArray: setGuessFour,
        },
        {
            guessArray: guessFive,
            setGuessArray: setGuessFive,
        },
        {
            guessArray: guessSix,
            setGuessArray: setGuessSix,
        },
    ]

    const addLetter = (letter) => {
        const currentGuess = guesses[guessCount]
        if (guessIndex < 5) {
            const oldGuessArray = currentGuess.guessArray
            oldGuessArray[guessIndex] = letter
            currentGuess.setGuessArray(oldGuessArray)
            setGuessIndex(guessIndex + 1)
        }
    }

    const removeLetter = () => {
        const currentGuess = guesses[guessCount]
        if (guessIndex !== 0) {
            const oldGuessArray = currentGuess.guessArray
            oldGuessArray[guessIndex - 1] = null
            currentGuess.setGuessArray(oldGuessArray)
            setGuessIndex(guessIndex - 1)
        }
    }

    const submitGuess = () => {
        if (guessIndex == 5) {
            console.log(checkGuess(guesses[guessCount].guessArray))
            if (checkGuess(guesses[guessCount].guessArray)) {
                setStatusMessage('Congrats, you did it!')
                setIsFinished(true)
            } else if (guessCount == 5) {
                setStatusMessage('Better luck next time!')
                setIsFinished(true)
            } else {
                setGuessCount(guessCount + 1)
                setGuessIndex(0)
                setStatusMessage('')
            }
            setGuessCount(guessCount + 1)
        } else {
            setStatusMessage('All 5 letters required')
        }
    }

    const checkGuess = (guess) => {
        for (const letter in guess) {
            if (guess[letter] !== word[letter]) {
                return false
            }
        }
        return true
    }

    return (
        <Column
            width="100%"
            height="100%"
            justifyContent='space-between'
        >
            <Column>
                <GuessRow
                    guess={guessOne}
                    word={word}
                    isGuessed={guessCount > 0}
                    isCurrentRow={guessCount == 0}
                />
                <GuessRow
                    guess={guessTwo}
                    word={word}
                    isGuessed={guessCount > 1}
                    isCurrentRow={guessCount == 1}
                />
                <GuessRow
                    guess={guessThree}
                    word={word}
                    isGuessed={guessCount > 2}
                    isCurrentRow={guessCount == 2}
                />
                <GuessRow
                    guess={guessFour}
                    word={word}
                    isGuessed={guessCount > 3}
                    isCurrentRow={guessCount == 3}
                />
                <GuessRow
                    guess={guessFive}
                    word={word}
                    isGuessed={guessCount > 4}
                    isCurrentRow={guessCount == 4}
                />
                <GuessRow
                    guess={guessSix}
                    word={word}
                    isGuessed={guessCount > 5}
                    isCurrentRow={guessCount == 5}
                /> 
            </Column>
            <h3>
                {statusMessage}
            </h3>
            <Keyboard
                addLetter={!isFinished ? addLetter : undefined}
                removeLetter={!isFinished ? removeLetter : undefined}
                submit={!isFinished ? submitGuess : undefined}
            />
        </Column>
    )
}

export default WordContainer;