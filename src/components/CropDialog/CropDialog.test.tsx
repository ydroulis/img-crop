import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import CropDialog from '.';

describe('CropDialog', () => {
    afterEach(cleanup);

    it('should close the modal when the close button is clicked', () => {
        const setIsOpen = jest.fn();
        const { getByTestId } = render(
            <CropDialog
                isOpen={true}
                setIsOpen={setIsOpen}
                setImg={() => { }}
                src={''}
            />
        );

        const closeButton = getByTestId('close-button');
        fireEvent.click(closeButton);

        expect(setIsOpen).toHaveBeenCalledWith(false);
    });
});
