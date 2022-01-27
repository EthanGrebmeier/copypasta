import styled from "styled-components"
import useTyper from "../hooks/useTyper"

type TyperProps = {
    text: string;
    as?: 'a' | 'p' | 'h1' | 'h2' | 'h3';
    href?: string;
}

const TypeRender = styled.p`
    line-height: 35px;
    font-size: 2rem;
    @media (max-width: 880px) {
        line-height: 30px;
        font-size: 1.8rem;
    }
`

const Typer = ({text, as, href} : TyperProps) : JSX.Element => {
    const currentWords = useTyper({
        inputWords: text,
        wpm: 3900
    })

    return (
        <TypeRender
            as={as}
            href={href}
        >
            {currentWords}
        </TypeRender>
    )
}

export default Typer