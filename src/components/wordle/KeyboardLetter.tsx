import styled from "styled-components"

type KeyboardLetterProps = {
    letter: string; 
    onClick: (any) => any;
    correctSpotLetters?: string[];
    correctLetters?: string[];
    wrongLetters?: string[];
}

type LetterProps = {
    width?: string;
    correctSpotLetter?: boolean;
    correctLetter?: boolean;
    wrongLetter?: boolean;
}

const Letter = styled.button<LetterProps>`
    position: relative;
    margin: 3px;
    border-radius: 5px;
    background: ${props => props.correctSpotLetter ? 
        'var(--secondary-transparent)' : 
        props.correctLetter ? 'var(--tertiary-transparent)' :
        props.wrongLetter ? 'var(--wrong-transparent)' : 'var(--grey)'};
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: var(--primary);
    flex-basis: 28px;
    flex-shrink: 1;
    border: none;
`

const KeyboardLetter = ({
    letter, 
    onClick, 
    correctSpotLetters,
    correctLetters,
    wrongLetters,
} : KeyboardLetterProps) => {
    return (
        <Letter
            width='10px'
            onClick={() => onClick && onClick(letter)}
            correctSpotLetter={correctSpotLetters?.includes(letter)}
            correctLetter={correctLetters?.includes(letter)}
            wrongLetter={wrongLetters?.includes(letter)}
        >
            <p>
                {letter.toUpperCase()}
            </p>
        </Letter>
    )
}

export default KeyboardLetter