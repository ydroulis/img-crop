import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DropZone = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    border: #C7CDD3 solid 2px;
    border-style: dashed;
    border-radius: 8px;

    width: 553px;
    height: 177px;

    background-color: #F2F5F8;

    cursor: pointer;

    font-size: 0.875rem;

    p{
        margin: 0px;
    }

    .second-line{
        color: #677489;
        font-weight: 400;
    }
`
export const Avatar = styled.img`
    min-width: 117px;
    max-width: 117px;
    min-height: 117px;
    max-height: 117px;
    border-radius: 50%;
`

export const Instructions = styled.div`
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FirstLine = styled.div`
    display: flex;

    img{
        width: 16px;
        height: 12px;
        margin-right: 12px;
    }

    p{
        color: #495567;
        font-weight: 500;
    }
`