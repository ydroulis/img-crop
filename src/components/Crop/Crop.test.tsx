import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import Crop from '.';

describe('Crop component', () => {
    test('renders the component', () => {
        const src = 'https://example.com/test-image.jpg';
        const setImg = jest.fn();
        const setIsOpen = jest.fn();
        const setZoom = jest.fn();
        const { getByTestId } = render(
            <Crop
                src={src}
                setImg={setImg}
                setIsOpen={setIsOpen}
                zoom={1}
                setZoom={setZoom}
            />
        );
        const cropElement = getByTestId('crop');
        expect(cropElement).toBeInTheDocument();
    });

    it('should zoom in and out the image', () => {
        const src = 'https://example.com/test-image.jpg';
        const setImg = jest.fn();
        const setIsOpen = jest.fn();
        const setZoom = jest.fn();
        const { getByTestId } = render(
            <Crop
                src={src}
                setImg={setImg}
                setIsOpen={setIsOpen}
                zoom={1}
                setZoom={setZoom}
            />
        );

        const zoomSlider = getByTestId('zoom-slider');
        const imageCropped = getByTestId('container');

        const sliderThumb = zoomSlider.querySelector('.MuiSlider-thumb') as HTMLElement;

        fireEvent.mouseDown(sliderThumb, { clientX: 100 });
        fireEvent.mouseUp(sliderThumb, { clientX: 300 });

        expect(imageCropped).toBeInTheDocument();
        expect(setZoom).toHaveBeenCalledWith(3);
    });

    it('should close crop dialog when click in button save', async () => {
        const src = 'https://example.com/test-image.jpg';
        const setImg = jest.fn();
        const setIsOpen = jest.fn();
        const { getByTestId, findByText } = render(
            <Crop
                src={src}
                setImg={setImg}
                setIsOpen={setIsOpen}
                zoom={1}
                setZoom={jest.fn()}
            />
        );

        const saveButton = getByTestId('save-button');
        fireEvent.click(saveButton);

        expect(setIsOpen).toHaveBeenCalledWith(false);
    });
});
