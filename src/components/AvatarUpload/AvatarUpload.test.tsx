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
})
