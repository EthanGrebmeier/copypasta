import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: hsla(137, 72%, 86%, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;   
    align-items: center;
    padding: 20px;
`

type BodyTypes = {
    children?: JSX.Element | JSX.Element[];
}

const Body = ({children} : BodyTypes) : JSX.Element => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Body