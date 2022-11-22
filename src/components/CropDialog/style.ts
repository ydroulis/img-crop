import styled from "styled-components";

interface ContainerProps {
    isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: ${props => props.isOpen ? 'flex' : 'none'};
    align-items: center;
    position: absolute;
    width: 553px;
    height: 177px;
    border-radius: 8px;
    background: #F2F5F8;
    padding: 0px 28px 0px 31px;
`

export const CloseButton = styled.button`
    position: absolute;
    right: 28px;
    top: 36px;
    border: none;
    background: transparent;

    color: #677489;

    cursor: pointer;

    .close{
        font-size: 20px;
    }
`