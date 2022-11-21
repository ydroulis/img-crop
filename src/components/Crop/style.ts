import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`

export const CropperContainer = styled.div`
    position: absolute;
    top: 32px;
    left: 31px;
    right: 0;
    bottom: 80px;
    width: 20%;
    border-radius: 50%;
    overflow: hidden;
    width: 117px;
    height: 117px;

    img + div{
        width: 117px !important;
        height: 117px !important;
    }
`

export const AvatarImg = styled.img`
    border-radius: 50%;
    width: 114px;
    height: 114px;
`

export const Controls = styled.div`
    width: 276px; 
    height: 100%; 
    margin-left: 32px;
    display: flex; 
    flex-direction: column; 
    position: absolute;
    right: 100px;
    top: 29px;

    p{
        margin: 20px 0px 0px 0px;
        color: #677489;
        text-align: left;
    }
`

export const SaveButton = styled.button`
    color: #fff;
    width: 109px;
    height: 32px;

    background: #3D485F;
    border-radius: 16px;

    border: none;

    position: absolute;
    right: 0px;
    bottom: 54px;

    font-size: Inter, 'san-serif';
    font-size: 0.875rem;
    weight: 500;

    cursor: pointer;
`