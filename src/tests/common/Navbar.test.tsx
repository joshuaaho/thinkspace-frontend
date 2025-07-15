import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Navbar from "@common/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { setAccessToken } from "@store/auth";

import { queryConfig } from "@src/queryClient";


const renderNavbar = () => {
    const queryClient = new QueryClient(queryConfig);
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
      </QueryClientProvider>
    </MemoryRouter>
  );
};

describe("Navbar", () => {
  describe("Desktop view (>= 768px)", () => {
    it("should see a search bar", async () => {
      window.innerWidth = 1024;
      renderNavbar();
      await waitFor(() => {
        expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
      });
    });

    it("not see a search icon", async () => {
      renderNavbar();
      await waitFor(() => {
        expect(
          screen.queryByRole("button", { name: /search/i })
        ).not.toBeInTheDocument();
      });
    });

    describe("Authenticated user should", () => {
      it("see a profile image", async () => {
        setAccessToken("test_access_token");
        renderNavbar();
        
        await waitFor(() => {
          expect(
            screen.getByRole("img", { name: /profile image/i })
          ).toBeInTheDocument();
        });
      });

      it("see a menu button", async () => {
        setAccessToken("test_access_token");
        renderNavbar();
        await waitFor(() => {
          expect(screen.getByRole("menu")).toBeInTheDocument();
        });
      });
    });

    describe("Unauthenticated user should ", () => {
      it("see login button", async () => {
        renderNavbar();
        await waitFor(() => {
          expect(
            screen.getByRole("button", { name: /login/i })
          ).toBeInTheDocument();
        });
      });
    });
  });

  describe("Mobile view (< 768px)", () => {
    it("see a search icon", async () => {
      window.innerWidth = 500;
      renderNavbar();
      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: /search/i })
        ).toBeInTheDocument();
      });
    });

    //   it("not see the search bar", async () => {
    //     renderNavbar();
    //     await waitFor(() => {
    //       expect(
    //         screen.queryByPlaceholderText(/search/i)
    //       ).not.toBeInTheDocument();
    //     });
    //   });

    //   describe("Authenticated user should ", () => {
    //     setAccessToken("test_access_token");
    //     it("see their profile picture", async () => {
    //       renderNavbar();
    //       await waitFor(() => {
    //         expect(
    //           screen.getByRole("img", { name: /profile image/i })
    //         ).toBeInTheDocument();
    //       });
    //     });
    //     it("see a menu button", async () => {
    //       renderNavbar();
    //       await waitFor(() => {
    //         expect(screen.getByRole("menu")).toBeInTheDocument();
    //       });
    //     });
    //   });
    //   describe("Unauthenticated user should ", () => {
    //     it("see login button", async () => {
    //       renderNavbar();
    //       await waitFor(() => {
    //         expect(
    //           screen.getByRole("button", { name: /login/i })
    //         ).toBeInTheDocument();
    //       });
    //     });
    //   });
  });
});
