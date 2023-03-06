import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import CropDialog from '../CropDialog';
import ErrorDialog from '../ErrorDialog';
import * as S from './style';


const AvatarUpload = () => {
    const [files, setFiles] = useState([]);
    const [src, setSrc] = useState('');
    const [isCropDialogOpen, setIsCropDialogOpen] = useState(false);
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
    const [imgResult, setImgResult] = useState(null);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            try {
                const file = Object.assign(acceptedFiles[0], { preview: URL.createObjectURL(acceptedFiles[0]) });
                setIsCropDialogOpen(true);
                setSrc(file.preview);
            } catch (e) {
                setIsErrorDialogOpen(true)
            }
        }
    });

    useEffect(() => {
        return () => files.forEach((file: { preview: string; }) => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <S.Container className='drop'>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} data-testid='dropzone' />
                <S.DropZone>
                    {imgResult && <S.Avatar src={imgResult} />}
                    <S.Instructions>
                        <S.FirstLine>
                            <img src='/imgIcon.png' />
                            <p className='first-line'>Organization Logo</p>
                        </S.FirstLine>
                        <p className='second-line'>Drop the image here or click to browse.</p>
                    </S.Instructions>
                </S.DropZone>
            </div>
            <CropDialog isOpen={isCropDialogOpen} src={src} setIsOpen={setIsCropDialogOpen} setImg={setImgResult} />
            <ErrorDialog isOpen={isErrorDialogOpen} setIsOpen={setIsErrorDialogOpen} />
        </S.Container>
    )
}

export default AvatarUpload;