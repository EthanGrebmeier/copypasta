import styled from "styled-components";

type ContentBorderProps = {
    width?: string; 
    mobileWidth?: string;
    height?: string;
    mobileHeight?: string;
    mobileFlex?: string;
    flex?: boolean;
}

const Wrapper = styled.div<ContentBorderProps>`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
    flex: ${props => props.flex && '1'};
    flex-basis: ${props => props.height};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    @media (max-width: 880px) {
        width: ${props => props.mobileWidth};
        height: ${props => props.mobileHeight};
        flex-basis: ${props => props.mobileHeight};
        flex: ${props => props.mobileFlex && '1'};
    }
`

const Inner = styled.div`
    padding: 10px;   
    max-height: 100%;
    height: 100%;
    overflow-x: auto;
    &::-webkit-scrollbar {
        background: none;
        width: 1px;
    }

    &::-webkit-scrollbar-thumb {
        outline: 1px solid var(--secondary);
    }
`

type ContentTypes = {
    children?: JSX.Element | JSX.Element[]; 
    width?: string;
    height?: string;
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    mobileWidth?: string;
    mobileHeight?: string;
    flex?: boolean;
}


const ContentBlock = ({children, 
    width, 
    mobileWidth,
    height,
    mobileHeight,
    flex,
} : ContentTypes) : JSX.Element => {
    return (
    <Wrapper
        width={width}
        mobileWidth={mobileWidth}
        height={height}
        mobileHeight={mobileHeight}
        flex={flex}
    >
        <Inner>
            {children}
        </Inner>
    </Wrapper>
    )
}

export default ContentBlock