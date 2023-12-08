import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Signin from '../pages/auth/signin';

describe('Signin Component', () => {
    test('renders the login form', () => {
        // ARRANGE

        render(<Signin />);

        const passwordInput = screen.getByLabelText('Password');
        const loginButton = screen.getByText('Login');

        expect(passwordInput).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
    });

    test('checks if email input is in the document', () => {
        render(<Signin />);
        const emailInput = screen.getByLabelText('Email') as HTMLElement;
        expect(emailInput).toBeInTheDocument();
    });

    test('updates email state on input change', () => {
        render(<Signin />);
        const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

        expect(emailInput.value).toBe('test@example.com');
    });

    test('updates password state on input change', () => {
        
        render(<Signin />);
        
        const passwordInput = screen.getByLabelText('Password');
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

        expect((passwordInput as HTMLInputElement).value).toBe('testpassword');
    });

    test('displays error message for invalid password', () => {
        render(<Signin />);
        const passwordInput = screen.getByLabelText('Password');
        fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });
        const errorMessage = screen.getByText('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        expect(errorMessage).toBeInTheDocument();
    });
      

    test('displays loading spinner while submitting the form', async () => {
        render(<Signin />);
        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    
    });

    test('navigates to signup page when "Sign up" link is clicked', () => {
        render(<Signin />);
        const signUpLink = screen.getByText('Sign up');
        fireEvent.click(signUpLink);

        // After that click add assertion for navigation to the signup page
    });

    test('navigates to forgot password page when "Forgot password" link is clicked', () => {
        render(<Signin />);
        const forgotPasswordLink = screen.getByText('Forgot password');
        fireEvent.click(forgotPasswordLink);

        // Add assertion for navigation to the forgot password page
    });
});
