import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Column from "../Column";
import GuessRow from "./GuessRow";
import Keyboard from "./Keyboard";
import {possibleWords, selectedWords} from '../../constants/wordle'
import { useRouter } from "next/router";

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
    const [word, setWord] = useState(['e','r','r','o','r'])
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
    const [wrongLetters, setWrongLetters] = useState([])
    const [correctLetters, setCorrectLetters] = useState([])
    const [correctSpotLetters, setCorrectSpotLetters] = useState([])
    const router = useRouter()


    useEffect(() => {
        if (typeof router.query?.endless !== 'undefined') {
            resetGame()
        } else {
            axios.get('https://word-get.herokuapp.com/').then((res) => {
                setWord(res.data.word.split(''))
            }).catch(err => {
                console.log(err)
            })
        }
    }, [router])

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
        if (!isFinished && guessIndex < 5) {
            const oldGuessArray = currentGuess.guessArray
            oldGuessArray[guessIndex] = letter
            currentGuess.setGuessArray(oldGuessArray)
            setGuessIndex(guessIndex + 1)
        }
    }

    const removeLetter = () => {
        const currentGuess = guesses[guessCount]
        if (!isFinished && guessIndex !== 0) {
            const oldGuessArray = currentGuess.guessArray
            oldGuessArray[guessIndex - 1] = null
            currentGuess.setGuessArray(oldGuessArray)
            setGuessIndex(guessIndex - 1)
        }
    }

    const addGuessedLetters = (guess) => {
        let newCorrectSpotLetters = [...correctSpotLetters]
        let newCorrectLetters = [...correctLetters]
        let newWrongLetters = [...wrongLetters]

        for (const letterIndex in guess) {
            const letter = guess[letterIndex]
            if (guess[letterIndex] == word[letterIndex]) {
                newCorrectSpotLetters.push(letter)
            } else if (word.includes(letter)) {
                newCorrectLetters.push(letter)
            } else {
                newWrongLetters.push(letter)
            }
        }

        setCorrectSpotLetters(Array.from(new Set(newCorrectSpotLetters)))
        setCorrectLetters(Array.from(new Set(newCorrectLetters)))
        setWrongLetters(Array.from(new Set(newWrongLetters)))
    }

    const submitGuess = () => {
        if (![...possibleWords, ...selectedWords].includes(guesses[guessCount].guessArray.join(''))) {
            setStatusMessage('Invalid word')
        } else if (!isFinished && guessIndex == 5) {
            addGuessedLetters(guesses[guessCount].guessArray)
            if (checkGuess(guesses[guessCount].guessArray)) {
                setStatusMessage('Congrats, you did it!')
                endGame()
            } else if (guessCount == 5) {
                setStatusMessage('Better luck next time!')
                endGame()
            } else {
                setStatusMessage('')
            }
            setGuessCount(guessCount + 1)
            setGuessIndex(0)
        } else {
            setStatusMessage('All 5 letters required')
        }
    }

    const endGame = () => {
        setIsFinished(true)
        if (typeof router.query?.endless !== 'undefined') {
            console.log('ENDLESS MODE')
            setTimeout(() => {
                resetGame()
            }, 3000)
        }
    }
    
    const resetGame = () => {
        const index = Math.floor(Math.random() * selectedWords.length)
        const chosenWord = selectedWords[index].split('')
        setWord(chosenWord)
        setGuessOne([null, null, null, null, null])
        setGuessTwo([null, null, null, null, null])
        setGuessThree([null, null, null, null, null])
        setGuessFour([null, null, null, null, null])
        setGuessFive([null, null, null, null, null])
        setGuessSix([null, null, null, null, null])
        setGuessCount(0)
        setGuessIndex(0)
        setStatusMessage('')
        setIsFinished(false)
        setCorrectLetters([])
        setCorrectSpotLetters([])
        setWrongLetters([])
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
                correctSpotLetters={correctSpotLetters}
                correctLetters={correctLetters}
                wrongLetters={wrongLetters}
                addLetter={addLetter}
                removeLetter={removeLetter}
                submit={submitGuess}
            />
        </Column>
    )
}

export default WordContainer;