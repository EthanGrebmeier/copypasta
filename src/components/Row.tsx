import styled from "styled-components";

type RowProps = {
    width?: string;
    maxWidth?: string;
    wrap?: boolean;
}

const Row = styled.div<RowProps>`
    display: flex;
    height: fit-content;
    width: ${props => props.width};
    max-width: ${props => props.maxWidth};
    flex-wrap: ${props => props.wrap && 'wrap'};
`

export default Row;