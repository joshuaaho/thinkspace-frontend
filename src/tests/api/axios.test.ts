import { describe, it, expect } from "vitest";

import { useAuthStore } from "@store/auth";
import { axiosPrivate } from "@api/axios";
import { server } from "@tests/server";
import { http, HttpResponse } from "msw";

describe("Axios Client", () => {
  it("should send access token in request header", async () => {
    useAuthStore.setState({ accessToken: "valid_token" });

    server.use(
      http.post(
        "/receive_token",
        ({ request }) => {
          expect(request.headers.get("Authorization")).toBe(
            "Bearer valid_token"
          );
          return new HttpResponse(null, { status: 200 });
        },
        { once: true }
      )
    );


    await axiosPrivate.instance.post("/receive_token");
  });

  it("should refresh token and retry when initial access token is invalid", async () => {
    server.use(
      http.post(
        "/need_auth",
        () => {
          return new HttpResponse(null, { status: 200 });
        },
        { once: true }
      )
    );

    server.use(
      http.post(
        "/need_auth",
        () => {
          return new HttpResponse(null, { status: 401 });
        },
        { once: true }
      )
    );



    const res = await axiosPrivate.instance.post("/need_auth");

    expect(res.status).toBe(200);
  });
});
