import Column from "../Column"
import Row from "../Row"
import KeyboardLetter from "./KeyboardLetter"

const Keyboard = ({
    correctSpotLetters,
    correctLetters,
    wrongLetters,
    addLetter,
    removeLetter,
    submit,
}) => {
    return (
        <Column
            width='100%'
        >
            <Row>
                <KeyboardLetter 
                    letter='q'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='w'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='e'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='r'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='t'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='y'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='u'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='i'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='o'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='p'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
            </Row>
            <Row>
                <KeyboardLetter 
                    letter='a'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='s'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='d'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='f'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='g'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='h'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='j'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='k'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='l'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
            </Row>
            <Row>
                <KeyboardLetter 
                    letter='z'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='x'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='c'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='v'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='b'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='n'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
                <KeyboardLetter 
                    letter='m'
                    onClick={addLetter}
                    correctSpotLetters={correctSpotLetters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}

                />
            </Row>
            <Row>
                <KeyboardLetter 
                    letter='Back'
                    onClick={removeLetter}
                />
                <KeyboardLetter 
                    letter='Enter'
                    onClick={submit}
                />
            </Row>
        </Column>
    )
}

export default Keyboard