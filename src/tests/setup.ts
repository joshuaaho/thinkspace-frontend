import "@testing-library/jest-dom/vitest";

// import "@testing-library/jest-dom/extend-expect";
import "regenerator-runtime/runtime";
import { afterEach, vi } from "vitest";
import { beforeAll } from "vitest";
import { server } from "@src/tests/server";
import { cleanup } from "@testing-library/react";

import queryClient from "@src/queryClient";

vi.mock("zustand");
// Start server before all tests
beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});

// Reset handlers and cleanup after each test
afterEach(() => {
  cleanup();
  queryClient.clear();
});

// Clean up after all tests
// afterAll(() => server.close());

//Fix for "matchMedia not present, legacy browsers require a polyfill jest" error
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
