import styled from "styled-components"


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

const Heading = styled.h1`
    font-size: 72px;
    font-family: 'DM Serif Display', serif
    
`

const TitleCard = () => {
    return (
        <Wrapper>
            <Heading>
                Ethan Grebmeier
                .com
            </Heading>
        </Wrapper>
    )
}

export default TitleCard