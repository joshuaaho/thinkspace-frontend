import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "@store/auth";
import PersistLogin from "@middleware/PersistLogin";


import { queryClient } from "@src/queryClient";
import { HttpResponse } from "msw";
import { server } from "@src/tests/server";
import { http } from "msw";
// import { fetchCurrentUser } from "@api/user/request";
import { axiosPrivate } from "@api/axios";


const renderPersistLogin = () => {
 
  render(
    <MemoryRouter initialEntries={["/test"]}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<PersistLogin />}>
            <Route path="/test" element={<div>Test</div>} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </MemoryRouter>
  );
};

describe("PersistLogin", () => {
  it("should render outlet immediately if access token exists in store", async () => {
    // Arrange
    useAuthStore.setState({ accessToken: "existing_token" });

    // Act
    renderPersistLogin();
    await axiosPrivate.me.handleGetMe();

    // Assert
    await waitFor(() => {
      expect(screen.getByText(/test/i)).toBeInTheDocument();
    });
  });

  it("should attempt refresh and render outlet on success", async () => {
    // Arrange

    // Act
    renderPersistLogin();

    // Assert
    await waitFor(() => {
      expect(useAuthStore.getState().accessToken).toBe("new_access_token");
    });
    await waitFor(() => {
      expect(screen.getByText(/test/i)).toBeInTheDocument();
    });
  });

  it("should clear token and render outlet on refresh failure", async () => {
    // Arrange

    server.use(
      http.post("http://localhost:8080/auth/refresh", () => {
        return new HttpResponse(null, { status: 401 });
      })
    );

    // Act
    renderPersistLogin();

    // Assert
    await waitFor(() => {
      expect(useAuthStore.getState().accessToken).toBeNull();
    });
    await waitFor(() => {
      expect(screen.getByText(/test/i)).toBeInTheDocument();
    });
  });
});
