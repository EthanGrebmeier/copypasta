import styled from "styled-components"

type LetterProps = {
    width?: string;
}

const Letter = styled.button<LetterProps>`
    position: relative;
    margin: 3px;
    border-radius: 5px;
    background: var(--secondary-transparent);
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: var(--primary);
    flex-basis: 28px;
    flex-shrink: 1;
    border: none;
`

const KeyboardLetter = ({letter, onClick}) => {
    return (
        <Letter
            width='10px'
            onClick={() => onClick(letter)}
        >
            <p>
                {letter.toUpperCase()}
            </p>
        </Letter>
    )
}

export default KeyboardLetter