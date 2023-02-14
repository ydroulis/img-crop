import { useState, useCallback, SetStateAction } from 'react';
import * as S from './style';
import Slider from '@mui/material/Slider';
import Cropper, { Area } from 'react-easy-crop';
import getCroppedImg from '../../utils/cropImage';

interface CropProps {
    src: string;
    zoom: number;
    setZoom: React.Dispatch<SetStateAction<number>>
    setImg: React.Dispatch<SetStateAction<null>>;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Crop = ({ src, setImg, setIsOpen, zoom, setZoom }: CropProps) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>({ x: 0, y: 0, width: 0, height: 0 });

    const parentElement = {
        width: 117,
        height: 117
    };

    const onZoomChange = (zoom: any) => {
        setZoom(zoom);
    }

    const onCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                src,
                croppedAreaPixels,
            )
            setImg(croppedImage);
            setZoom(1);
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels])

    return (
        <S.Container id="crop" data-testid='crop'>
            <S.CropperContainer style={parentElement}>
                <Cropper
                    image={src}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    cropShape="round"
                    showGrid={false}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    cropSize={{ width: parentElement.width, height: parentElement.height }}
                    data-testid='image-cropped'
                />
            </S.CropperContainer>
            <S.Controls>
                <p>Crop</p>
                <Slider
                    size="small"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-labelledby="Zoom"
                    onChange={(_e, zoom) => onZoomChange(zoom)}
                    data-testid='zoom-slider'
                />
                <S.SaveButton
                    onClick={() => {
                        showCroppedImage();
                        setIsOpen(false);
                    }}
                    data-testid='save-button'>
                    Save
                </S.SaveButton>
            </S.Controls>
        </S.Container>
    )
}

export default Crop;