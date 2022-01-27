import styled from "styled-components";

type RowProps = {
    width?: string;
    height?: string;
    maxHeight?: string;
    maxWidth?: string;
    flex?: boolean;
    mobileColumn?: boolean;
    wrap?: boolean;
    justifyContent?: string;
    alignItems?: string;
}

const Row = styled.div<RowProps>`
    display: flex;
    height: fit-content;
    width: ${props => props.width};
    height: ${props => props.height};
    max-height: ${props => props.maxHeight};
    max-width: ${props => props.maxWidth};
    flex: ${props => props.flex ? '1' : 'none'};
    flex-basis: ${props => props.height};
    flex-wrap: ${props => props.wrap && 'wrap'};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    position: relative;
    @media (max-width: 880px) {
        flex-direction: ${props => props.mobileColumn ? 'column' : 'row'};
    }
`

export default Row;