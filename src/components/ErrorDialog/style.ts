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

export const ErrorIcon = styled.div`
    width: 113px;
    height: 113px;
    border-radius: 50%;
    background: #C3CBD5;
    display: flex;
    justify-content: center;
    align-items: center;

    .alertIcon{
        color: #fff;
        font-size: 20px;
    }
`

export const ErrorMessage = styled.div`
    font-size: 1rem;
    text-align: left;
    margin-left: 32px;

    p{
        margin: 0px;
    }
    
    .first-line{
        color: #C64D32;
    }

    .second-line{
        color: #3D485F;
        font-weight: 500;
        text-decoration: underline;
        cursor: pointer;
        margin-top: 8px;
    }
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