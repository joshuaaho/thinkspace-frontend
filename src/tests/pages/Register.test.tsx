import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

import App from "@src/App";

const renderRegisterPage = () => {
  render(
    <MemoryRouter initialEntries={["/register"]}>
      <App />
    </MemoryRouter>
  );
};

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

async function fillAndSubmitRegisterForm(
  user: ReturnType<typeof userEvent.setup>,
  formData: RegisterFormData
) {
  const usernameInput = screen.getByPlaceholderText(/enter your username/i);
  const emailInput = screen.getByPlaceholderText(/enter your email/i);
  const passwordInput = screen.getByPlaceholderText(/create a password/i);
  const confirmPasswordInput = screen.getByPlaceholderText(
    /confirm your password/i
  );
  const submitButton = screen.getByRole("button", { name: /create account/i });

  await user.type(usernameInput, formData.username);
  await user.type(emailInput, formData.email);
  await user.type(passwordInput, formData.password);
  await user.type(confirmPasswordInput, formData.confirmPassword);
  await user.click(submitButton);
}

describe("Register Page", () => {
  it("should navigate to login page after successful registration", async () => {
    const user = userEvent.setup();
    renderRegisterPage();

    await fillAndSubmitRegisterForm(user, {
      username: "newuser",
      email: "newuser@example.com",
      password: "StrongPass123",
      confirmPassword: "StrongPass123",
    });

    await waitFor(() => {
      expect(screen.getByText(/forgot password?/i)).toBeInTheDocument();
    });
  });

  it("should show validation errors for invalid form data", async () => {
    const user = userEvent.setup();
    renderRegisterPage();

    await fillAndSubmitRegisterForm(user, {
      username: "a", // too short
      email: "notanemail", // invalid email
      password: "weak", // weak password
      confirmPassword: "different", // doesn't match
    });

    await waitFor(() => {
      expect(screen.getByText(/invalid username/i)).toBeInTheDocument();
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
      expect(screen.getByText(/invalid password/i)).toBeInTheDocument();
      expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
    });
  });
});
