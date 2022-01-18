import styled from "styled-components"

type BorderProps = {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    showMobile?: boolean;
    showDesktop?: boolean;
}

export const TopBorder = styled.span<BorderProps>`
    border-top: 1px solid;
    top: 0;
    right: 10px;
    left: 10px;
    position: absolute;
    display: ${props => props?.showDesktop ? 'block' : 'none'};
    @media (max-width: 880px){
        display: ${props => props.showMobile ? 'block' : 'none'};
    }
`

export const LeftBorder = styled.span<BorderProps>`
    border-left: 1px solid;
    top: 10px;
    bottom: 10px;
    left: -1px;
    position: absolute;
    display: ${props => props?.showDesktop ? 'block' : 'none'};
    @media (max-width: 880px){
        display: ${props => props.showMobile ? 'block' : 'none'};
    }
`

export const RightBorder = styled.span<BorderProps>`
    border-right: 1px solid;
    top: 10px;
    bottom: 10px;
    right: -1px;
    position: absolute;
    display: ${props => props?.showDesktop ? 'block' : 'none'};
    @media (max-width: 880px){
        display: ${props => props.showMobile ? 'block' : 'none'};
    }
`

export const BottomBorder = styled.span<BorderProps>`
    border-bottom: 1px solid;
    bottom: 0px;
    left: 10px;
    right: 10px;
    position: absolute;
    display: ${props => props?.showDesktop ? 'block' : 'none'};
    @media (max-width: 880px){
        display: ${props => props.showMobile ? 'block' : 'none'};
    }
`