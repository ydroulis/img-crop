import { SetStateAction } from 'react';
import { MdClose } from 'react-icons/md';
import { BsExclamationCircleFill } from 'react-icons/bs';
import Crop from '../Crop';
import * as S from './style';

interface ErrorDialogProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const ErrorDialog = ({ isOpen, setIsOpen  }: ErrorDialogProps) => {

    return (
        <S.Container isOpen={isOpen}>
            <S.ErrorIcon><BsExclamationCircleFill className='alertIcon'/></S.ErrorIcon>
            <S.ErrorMessage>
                <p className='first-line'>Sorry, the upload failed.</p>
                <p className='second-line' onClick={() => setIsOpen(false)}>Try again</p>
            </S.ErrorMessage>
            <S.CloseButton onClick={() => setIsOpen(false)}>
                <MdClose className='close'/>
            </S.CloseButton>
        </S.Container>
    )
}

export default ErrorDialog;