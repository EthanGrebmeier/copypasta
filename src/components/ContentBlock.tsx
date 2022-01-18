import styled from "styled-components";

type ContentBorderProps = {
    width?: string; 
    mobileWidth?: string;
    height?: string;
    mobileHeight?: string;
    mobileFlex?: string;
}

const Wrapper = styled.div<ContentBorderProps>`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
    @media (max-width: 880px) {
        width: ${props => props.mobileWidth};
        height: ${props => props.mobileHeight};
        flex: ${props => props.mobileFlex && '1'};
    }
`

const Inner = styled.div`
    padding: 10px;   
    max-height: 100%;
    height: 100%;
    overflow: scroll;
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
}


const ContentBlock = ({children, 
    width, 
    mobileWidth,
    height,
    mobileHeight,
} : ContentTypes) : JSX.Element => {
    return (
    <Wrapper
        width={width}
        mobileWidth={mobileWidth}
        height={height}
        mobileHeight={mobileHeight}
    >
        <Inner>
            {children}
        </Inner>
    </Wrapper>
    )
}

export default ContentBlock