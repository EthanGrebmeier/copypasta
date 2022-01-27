import styled from "styled-components"
import Dot from "../Dot"
import Row from "../Row"
import LetterBox from "./LetterBox"

const DotSpan = styled.span`
    position: absolute;
    top: 50%;
    left: -30px;
    transform: translateY(-50%);
`

const GuessRow = ({
    word, 
    guess,
    isGuessed,
    isCurrentRow
}) => {
    return (
        <Row 
            width='100%'
            justifyContent='center'
        >
            <DotSpan>
                {isCurrentRow && <Dot/>}
            </DotSpan>
            {[0,1,2,3,4].map(index => (
                <LetterBox
                    key={index}
                    letter={guess[index]}
                    isCorrectSpot={isGuessed && guess[index] == word[index]}
                    isCorrectLetter={isGuessed && word.includes(guess[index])}
                />
            ))}
        </Row>
    )
}

export default GuessRow