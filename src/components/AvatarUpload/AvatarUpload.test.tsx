import { render, fireEvent, waitFor } from '@testing-library/react';
import AvatarUpload from '.';

describe('AvatarUpload', () => {
  it('should change state when file is dropped simulating a file upload', async () => {
    const { getByTestId, findByText } = render(<AvatarUpload />);
    const dropzone = getByTestId('dropzone');

    Object.defineProperty(dropzone, 'files', {
      value: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
    });

    fireEvent.drop(dropzone);
    const cropDialog = await findByText('Crop');

    await waitFor(() => {
      expect(cropDialog).toBeInTheDocument();
    })
  });

  it('should change the state when the user clicks on the component simulating a file upload', async () => {
    const { getByTestId, findByText } = render(<AvatarUpload />);
    const dropzone = getByTestId('dropzone');

    Object.defineProperty(dropzone, 'files', {
      value: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
    });

    fireEvent.click(dropzone);
    const cropDialog = await findByText('Crop');

    await waitFor(() => {
      expect(cropDialog).toBeInTheDocument();
    })
  });
});
