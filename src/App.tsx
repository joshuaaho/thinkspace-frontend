import { Routes, Route } from "react-router-dom";
import Login from "@pages/Login";
import Register from "@pages/Register";
import NotFound from "@pages/BadRoute";
import Error from "@pages/Error";
import { QueryClientProvider } from "@tanstack/react-query";
import ThemeSetter from "@middleware/ThemeSetter";
import "./index.css";
import EditPost from "@pages/EditPost";
import NavLayout from "@common/Layouts/Nav";
import PersistLogin from "@middleware/PersistLogin";
import CreatePost from "@pages/CreatePost";
import { ErrorBoundary } from "react-error-boundary";

import { SkeletonTheme } from "react-loading-skeleton";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import Home from "@pages/Home";

import PostDetail from "@pages/PostDetails";
import queryClient from "@src/queryClient";
import LogoutConfirmationPage from "@pages/LogoutConfirmation";
import Search from "@pages/Search";
import RequireAuth from "@middleware/RequireAuth";
import Profile from "@pages/Profile";

import Chats from "@pages/Chats";
import Settings from "@pages/Settings";
import NotificationsPage from "@pages/Notifications";
import UsersPost from "@pages/UsersPosts";
import ToastProvider from "@middleware/ToastProvider";
import PersistSocket from "./middleware/PersistSocket";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <QueryErrorResetBoundary>
        {(_) => (
          <ErrorBoundary
            FallbackComponent={Error}
            onReset={() => {
              // QueryErrorResetBoundary reset function does not reset query for some reason (bug?)
              // So manually clear it
              queryClient.clear();
            }}
          >
            <SkeletonTheme baseColor="#374151" highlightColor="#4b5563">
              <Routes>
                <Route element={<ToastProvider />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />

                  {/* Protected Routes */}
                  <Route element={<NavLayout />}>
                    <Route element={<PersistLogin />}>
                      <Route element={<PersistSocket />}>
                        <Route element={<ThemeSetter />}>
                          <Route element={<RequireAuth />}>
                            <Route path="/create" element={<CreatePost />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/messages" element={<Chats />} />
                            <Route
                              path="/notifications"
                              element={<NotificationsPage />}
                            />
                            <Route path="/me/posts" element={<UsersPost />} />
                            <Route path="/posts/edit" element={<EditPost />} />
                          </Route>

                          <Route path="/" element={<Home />} />
                          <Route
                            path="/posts/:postId"
                            element={<PostDetail />}
                          />
                          <Route path="/search" element={<Search />} />
                          <Route path="/users/:id" element={<Profile />} />
                          <Route
                            path="/logout_confirmation"
                            element={<LogoutConfirmationPage />}
                          />
                        </Route>
                      </Route>
                    </Route>

                    {/* Catch all undefined routes */}
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Route>
              </Routes>
            </SkeletonTheme>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  );
}

export default App;
