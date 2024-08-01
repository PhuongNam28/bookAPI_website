import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../Modal/Modal';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../Redux/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { showToast } from '../ToastAdded/ToastNewAdded';

// Mock react-redux
jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

// Create a store for redux
const store = createStore(rootReducer);

describe('Modal Component', () => {
    const mockItem = {
        img: 'test-image.jpg',
        title: 'Test Book Title',
        author: 'Test Author',
        description: 'Test Description',
        newPrice: 19.99,
        oldPrice: 29.99,
        category: 'Test Category',
    };

    test('should render modal when show prop is true', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Modal show={true} item={mockItem} onClose={() => {}} />
                </Router>
            </Provider>
        );

        expect(screen.getByText('Test Book Title')).toBeInTheDocument();
        expect(screen.getByText('Test Author')).toBeInTheDocument();
        expect(screen.getByText('$19.99')).toBeInTheDocument();
        expect(screen.getByText('$29.99')).toBeInTheDocument();
    });

    // test('should not render modal when show prop is false', () => {
    //     render(
    //         <Provider store={store}>
    //             <Router>
    //                 <Modal show={false} item={mockItem} onClose={() => {}} />
    //             </Router>
    //         </Provider>
    //     );

    //     expect(screen.queryByText('Test Book Title')).toBeNull();
    // });

    // test('should call onClose when close button is clicked', () => {
    //     const onCloseMock = jest.fn();
    //     render(
    //         <Provider store={store}>
    //             <Router>
    //                 <Modal show={true} item={mockItem} onClose={onCloseMock} />
    //             </Router>
    //         </Provider>
    //     );

    //     fireEvent.click(screen.getByText('×'));
    //     expect(onCloseMock).toHaveBeenCalled();
    // });

    // test('should increase and decrease quantity', () => {
    //     render(
    //         <Provider store={store}>
    //             <Router>
    //                 <Modal show={true} item={mockItem} onClose={() => {}} />
    //             </Router>
    //         </Provider>
    //     );

    //     fireEvent.click(screen.getByText('+'));
    //     expect(screen.getByText('2')).toBeInTheDocument();

    //     fireEvent.click(screen.getByText('-'));
    //     expect(screen.getByText('1')).toBeInTheDocument();
    // });

    // test('should dispatch addBook action when addToCart button is clicked', () => {
    //     const dispatch = jest.fn();
    //     useDispatch.mockReturnValue(dispatch);

    //     render(
    //         <Provider store={store}>
    //             <Router>
    //                 <Modal show={true} item={mockItem} onClose={() => {}} />
    //             </Router>
    //         </Provider>
    //     );

    //     fireEvent.click(screen.getByText('Add To Cart'));

    //     expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({
    //         type: 'ADD_BOOK',
    //         payload: expect.objectContaining({
    //             bookName: 'Test Book Title',
    //         }),
    //     }));
    // });

    // test('should navigate to details page when viewDetails button is clicked', () => {
    //     const navigate = jest.fn();
    //     jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(navigate);

    //     render(
    //         <Provider store={store}>
    //             <Router>
    //                 <Modal show={true} item={mockItem} onClose={() => {}} />
    //             </Router>
    //         </Provider>
    //     );

    //     fireEvent.click(screen.getByText('View Product Details'));
    //     expect(navigate).toHaveBeenCalledWith('/details', { state: { book: mockItem } });
    // });

    // test('should show success message when book is added to cart', () => {
    //     render(
    //         <Provider store={store}>
    //             <Router>
    //                 <Modal show={true} item={mockItem} onClose={() => {}} />
    //             </Router>
    //         </Provider>
    //     );

    //     fireEvent.click(screen.getByText('Add To Cart'));
    //     expect(screen.getByText('Added to cart successfully!')).toBeInTheDocument();
    // });
});
