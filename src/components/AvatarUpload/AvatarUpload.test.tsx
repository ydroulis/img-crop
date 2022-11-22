import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import AvatarUpload from '.';

describe('AvatarUpload tests', () => {
  it('should render AvatarUpload component', () => {
    render(<AvatarUpload />);

    const avatarUpload = screen.getByText(/Organization Logo/i);

    expect(avatarUpload).toBeInTheDocument();
  });
  
  it("should drop", async () => {
    const file = new File(["hello"], "hello.geojson", {
        type: "application/json"
      });
    
      const { getByTestId } = render(<AvatarUpload />);
    
      const input = getByTestId("dropzone") as HTMLInputElement;
    
      act(() => {
        userEvent.upload(input, file);
      });
    
      expect(input.files[0]).toStrictEqual(file);
      expect(input.files.item(0)).toStrictEqual(file);
      expect(input.files).toHaveLength(1);
  })
})
