import { useState, SetStateAction } from 'react';
import { MdClose } from 'react-icons/md';
import Crop from '../Crop';
import * as S from './style';

interface CropDialogProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
    setImg: React.Dispatch<SetStateAction<null>>;
    src: string;
}

const CropDialog = ({ isOpen, setIsOpen, setImg, src }: CropDialogProps) => {
    const [zoom, setZoom] = useState(1);

    const handleClose = () => {
        setIsOpen(false);
        setZoom(1);
    }

    return (
        <S.Container isOpen={isOpen}>
            <Crop src={src} setImg={setImg} setIsOpen={setIsOpen} zoom={zoom} setZoom={setZoom}/>
            <S.CloseButton onClick={handleClose}>
                <MdClose className='close'/>
            </S.CloseButton>
        </S.Container>
    )
}

export default CropDialog;