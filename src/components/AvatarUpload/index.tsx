import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import CropDialog from '../CropDialog';
import * as S from './style';

interface FileType {
    forEach: any;
    preview?: any
}

const AvatarUpload = () => {
    const [files, setFiles] = useState<FileType>([]);
    const [src, setSrc] = useState('');
    const [isCropDialogOpen, setIsCropDialogOpen] = useState(false);
    const [imgResult, setImgResult] = useState(null);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            const file = Object.assign(acceptedFiles[0], { preview: URL.createObjectURL(acceptedFiles[0]) });
            setIsCropDialogOpen(true);
            setSrc(file.preview);
        }
    });

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file: { preview: string; }) => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <S.Container>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
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
        </S.Container>
    )
}

export default AvatarUpload;