// __tests__/DeleteBookButton.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeleteBookButton from '../DeleteBookButton/DeleteBookButton';
import Swal from 'sweetalert2';
import { showToast } from '../ToastAdded/ToastNewAdded';

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

jest.mock('../ToastAdded/ToastNewAdded', () => ({
  showToast: jest.fn(),
}));

describe('DeleteBookButton Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('calls onConfirm when confirmation is successful', async () => {

    const onConfirmMock = jest.fn();
    Swal.fire.mockResolvedValue({ isConfirmed: true });
    showToast.mockImplementation(() => {});
    render(<DeleteBookButton onConfirm={onConfirmMock} />);
    fireEvent.click(screen.getByText('Remove'));

    expect(Swal.fire).toHaveBeenCalledWith({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    
    await new Promise((r) => setTimeout(r, 0));

    expect(showToast).toHaveBeenCalledWith({
      title: "SUCCESS",
      text: "you have successfully get rid of the book from your cart!!!",
      icon: "success",
    });

    expect(onConfirmMock).toHaveBeenCalled();
  });

  test('does not call onConfirm when confirmation is canceled', async () => {
    const onConfirmMock = jest.fn();
    Swal.fire.mockResolvedValue({ isConfirmed: false });

    render(<DeleteBookButton onConfirm={onConfirmMock} />);


    fireEvent.click(screen.getByText('Remove'));


    expect(Swal.fire).toHaveBeenCalledWith({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

 
    await new Promise((r) => setTimeout(r, 0));

    expect(showToast).not.toHaveBeenCalled();
    expect(onConfirmMock).not.toHaveBeenCalled();
  });
});
