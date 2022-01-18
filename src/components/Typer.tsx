import styled from "styled-components"
import useTyper from "../hooks/useTyper"

const Typer = ({text}) => {
    const currentWords = useTyper({
        inputWords: text,
        wpm: 1900
    })
    const TypeRender = styled.p`
        line-height: 35px;
        font-size: 2rem;
        @media (max-width: 880px) {
            line-height: 30px;
            font-size: 1.8rem;
        }
    `
    return (
        <TypeRender>
            {currentWords}
        </TypeRender>
    )
}

export default Typer