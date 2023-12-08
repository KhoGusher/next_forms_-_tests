import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ForgotPassword from '@/pages/auth/forgot-password';
import exp from 'constants';

describe('ForgotPassword Component', () => {


it('should render a form with email input', () => {
    // Arrange
    render(

         <ForgotPassword />
    );

    // Act

    // Assert
 
//  expect(screen.getByLabelText('Email')).toBeInTheDocument();
 
 const email = screen.getByPlaceholderText("email@gmail.com");

 expect(email).toBeInTheDocument();

  });

    it('should allow user to input email and password', () => {
        // Arrange
        const wrapper = render(
            <ForgotPassword />
         );

         var emailInput: HTMLInputElement = wrapper.container.querySelector('input[type="email"]')!;

        // Act
       emailInput.value = 'test@example.com';

 // Trigger the change event manually
 emailInput.dispatchEvent(new Event('change', { bubbles: true }));

    
        // Assert
        expect(emailInput.value).toBe('test@example.com');
      });


});