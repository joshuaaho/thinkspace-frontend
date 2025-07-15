import { render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  describe,
  it,
  expect,
  
} from "vitest";
import { MemoryRouter } from "react-router-dom";

import App from "@src/App";

import { http, HttpResponse } from "msw";
import { server } from "@src/tests/server";


type LoginFormData = {
  username: string;
  password: string;
};

const renderLoginPage = () => {
  render(
    <MemoryRouter initialEntries={["/login"]}>
      <App />
    </MemoryRouter>
  );
};

const fillAndSubmitLoginForm = async (user: ReturnType<typeof userEvent.setup>, formData: LoginFormData) => {
  const usernameInput = screen.getByPlaceholderText(/enter your username/i);
  const passwordInput = screen.getByPlaceholderText(/enter your password/i);
  const submitButton = screen.getByRole("button", { name: /sign in/i });

  await user.type(usernameInput, formData.username);
  await user.type(passwordInput, formData.password);
  await user.click(submitButton);
};



describe("Login Page", () => {
  it("should show error message when wrong password is entered", async () => {
    server.use(
      http.post("http://localhost:8080/auth/login", () => {
        return new HttpResponse(null, { status: 401 });
      })
    );

    renderLoginPage();
    const user = userEvent.setup();
    
    await fillAndSubmitLoginForm(user, {
      username: "wronguser",
      password: "wrongpassword"
    });

    await waitFor(() => {
      expect(screen.getByText(/failed to login/i)).toBeInTheDocument();
    });
    
  });

  // it("should call the login function with the inputs provided", async () => {
  //   const mutateMock = vi.fn();
  //   vi.spyOn(auth, "useLoginMutation").mockReturnValue({
  //     mutate: mutateMock,
  //   } as any);

  //   renderLoginPage();
  //   const user = userEvent.setup();

  //   await fillAndSubmitLoginForm(user, {
  //     username: "someuser",
  //     password: "somepassword"
  //   });

  //   await waitFor(() => {
  //     expect(mutateMock).toHaveBeenCalledWith({
  //       username: "someuser",
  //       password: "somepassword",
  //     });
  //   });
  // });
  
  it("should arrive to authenticated home page", async () => {

    renderLoginPage();
    const user = userEvent.setup();

    await fillAndSubmitLoginForm(user, {
      username: "correctuser",
      password: "correctpassword"
    });
 
    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

  });
  
  it("should find the search icon", async () => {
    renderLoginPage();
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });

});
