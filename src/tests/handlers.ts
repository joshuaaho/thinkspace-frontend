import { http, HttpResponse } from "msw";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

function Api(path: string) {
  return `${baseUrl}${path}`;
}
export const handlers = [
  http.post(Api("/auth/login"), () =>
    HttpResponse.json({
      accessToken: "fake_access_token",
    })
  ),

  http.post(Api("/auth/register"), () => HttpResponse.json(null)),

  http.get(Api("/users/me"), () =>
    HttpResponse.json({
      id: "fake_user_id",
      username: "fake_username",
      profileImgUrl: "https://via.placeholder.com/150",
    })
  ),
  http.post(Api("/auth/refresh"), () => {
    return HttpResponse.json({
      accessToken: "new_access_token",
    });
  }),

  http.post(Api("/posts/123/like"), () =>
    HttpResponse.json({
      _id: "123",
      title: "Test Post",
      content: "Test Content",
      authorId: {
        _id: "user123",
        username: "testuser",
        profileImgUrl: "test.jpg",
      },
      tags: ["test"],
      likedBy: ["user123"],
      commentedBy: [],
      uploadedImgs: [],
      postedAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    })
  ),
];
