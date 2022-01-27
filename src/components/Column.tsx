import styled from "styled-components"

type ColumnWrapperProps = {
    width?: string;
    height?: string;
    mobileHeight?: string;
    justifyContent?: string;
    alignItems?: string;
}
const Column = styled.div<ColumnWrapperProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${props => props.width};
    height: ${props => props.height};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    @media (max-width: 880px) {
        height: ${props => props.mobileHeight};
    }

`
export default Column