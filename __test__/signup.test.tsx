import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "../pages/auth/signup";

test("renders sign up form", () => {
    render(<SignUp />);
    
    const fullNameInput = screen.getByPlaceholderText("Full name");
    const emailInput = screen.getByPlaceholderText("Email");
    const phoneNumberInput = screen.getByPlaceholderText("Phone Number");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByText("Submit");

    expect(fullNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

test("validates password input", () => {
    render(<SignUp />);
    
    const passwordInput = screen.getByLabelText("Password");

    fireEvent.change(passwordInput, { target: { value: 'invalpas' } });

    const errorText = screen.getByText(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    );

    expect(errorText).toBeInTheDocument();

    // try for valid password
    // fireEvent.change(passwordInput, { target: { value: "weakpassword" } });

    // expect(errorText).toBeInTheDocument();

    // fireEvent.change(passwordInput, { target: { value: "StrongPassword1!" } });

    // expect(errorText).not.toBeInTheDocument();
});
