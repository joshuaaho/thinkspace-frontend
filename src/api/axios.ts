import { setAccessToken, useAuthStore } from "@store/auth";
// import { refreshAccessToken} from '@api/auth/request';
import { Api } from "@api/apiClient";
// npx swagger-typescript-api generate -p ./backendDocs/swagger.json  --name="apiClient" -o "./src/api" --http-client=axios
export const axiosPublic = new Api({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:6666",
  withCredentials: true,
});

export const axiosPrivate = new Api({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:6666",
  withCredentials: true,
});

axiosPrivate.instance.interceptors.request.use(
  (config) => {
    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${
        useAuthStore.getState().accessToken
      }`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosPrivate.instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    if (error?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true;
      const response = await axiosPublic.auth.refresh();
      setAccessToken(response.data.accessToken);
      prevRequest.headers[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`;

      return axiosPrivate.instance.request(prevRequest);
    }
    return Promise.reject(error);
  }
);

//Prior to TSOA support

// export const axiosPublic = axios.create({
//     baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:6666",
//     withCredentials: true
// });

// export const axiosPrivate = axios.create({
//     baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:6666",
//     withCredentials: true,

// });
