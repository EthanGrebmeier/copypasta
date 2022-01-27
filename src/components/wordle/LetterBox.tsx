import styled from "styled-components"
import { BottomBorder, LeftBorder, RightBorder, TopBorder } from "../Border"

const Wrapper = styled.div<LetterElementType>`
    width: 3rem;
    font-size: 2rem;
    text-align: center;
    position: relative;
    background: ${props => props.isCorrectLetter ? props.isCorrectSpot ? 'var(--secondary-transparent)' : 'var(--tertiary-transparent)' : ''};
    margin: 6px;
    border-radius: 10px;
    @media (max-width: 880px) {
        width: 2.4rem;
        font-size: 1.6rem;
    }
`
type LetterElementType = {
    isCorrectSpot?: boolean,
    isCorrectLetter?: boolean,
}

type LetterBoxType = {
    letter?: string,
}

const LetterBox = ({
    letter,
    isCorrectSpot,
    isCorrectLetter,
} : LetterBoxType & LetterElementType) : JSX.Element => {
    return (
        <Wrapper
            isCorrectSpot={isCorrectSpot}
            isCorrectLetter={isCorrectLetter}
        >
            <TopBorder
                showDesktop
                showMobile
            />
            <RightBorder
                showDesktop
                showMobile
            />
            <BottomBorder
                showDesktop
                showMobile
            />
            <LeftBorder
                showDesktop
                showMobile
            />
            <p>
                {letter ? letter.toUpperCase() : '_'}
            </p>
        </Wrapper>
    )
} 

export default LetterBox