import { useState, useCallback, SetStateAction } from 'react';
import * as S from './style';
import Slider from '@mui/material/Slider';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../../utils/cropImage';

interface CropProps {
    src: string;
    setImg: React.Dispatch<SetStateAction<null>>;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

// interface ZoomTypes {
//     prev: number;
//     zoom: number;
//     setZoom: React.Dispatch<SetStateAction<number>>
// }

const Crop = ({ src, setImg, setIsOpen }: CropProps) => {
    const [zoom, setZoom] = useState(1);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onZoomChange = (zoom: any) => {
        setZoom(zoom);
    }

    const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const showCroppedImage = useCallback(async () => {
        try {
          const croppedImage = await getCroppedImg(
            src,
            croppedAreaPixels,
          )
          console.log('donee', { croppedImage })
          setImg(croppedImage);
          setIsOpen(false);
        } catch (e) {
          console.error(e)
        }
      }, [croppedAreaPixels])

    return (
        <S.Container >
            <S.CropperContainer>
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
                    onChange={(e, zoom) => onZoomChange(zoom)}
                />
                <S.SaveButton onClick={showCroppedImage}>Save</S.SaveButton>
            </S.Controls>
        </S.Container>
    )
}

export default Crop;