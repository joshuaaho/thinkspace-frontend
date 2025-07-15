/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum SortBy {
  Newest = "newest",
  Oldest = "oldest",
  MostLiked = "most-liked",
}

export enum ThemePreference {
  Light = "light",
  Dark = "dark",
  System = "system",
}

export interface GetUserByIdResponse {
  followedBy: string[];
  themePreference: ThemePreference;
  profileImgUrl: string;
  location?: string;
  interest?: string;
  education?: string;
  bio?: string;
  work?: string;
  email: string;
  username: string;
  id: string;
}

export interface HTTPError {
  message: string;
}

export interface GetMeResponse {
  followedBy: string[];
  themePreference: ThemePreference;
  profileImgUrl: string;
  location?: string;
  interest?: string;
  education?: string;
  bio?: string;
  work?: string;
  email: string;
  username: string;
  id: string;
}

export interface EditUserCommand {
  work?: string;
  bio?: string;
  education?: string;
  interest?: string;
  location?: string;
  /** S3 url of the profile image. Generate a presigned url using /files/upload-url and use the url to save the image to s3 (Automatically handled by the frontend). After saving, the url can be used in this request to indicate your new profile image */
  profileImgUrl?: string;
  themePreference?: ThemePreference;
}

/** Information about the users */
export type QueryUsersResponse = {
  followedBy: string[];
  themePreference: ThemePreference;
  profileImgUrl: string;
  location?: string;
  interest?: string;
  education?: string;
  bio?: string;
  work?: string;
  email: string;
  username: string;
  id: string;
}[];

export interface QueryUsersCommand {
  /** @format double */
  offset?: number;
  /** @format double */
  limit?: number;
  /** The username of the user to query */
  username?: string;
}

export type QueryNotificationsResponse = {
  createdAt: string;
  /** Metadata on what type of resource should be redirected to after clicking the notification */
  redirectToResourceType: string;
  /** The id of a specific "ResrouceType" */
  resourceId: string;
  isRead: boolean;
  message: string;
  /** The profile image url of the user who sent the notification */
  fromProfileImgUrl: string;
  id: string;
}[];

export interface QueryNotificationsCommand {
  /** @format double */
  offset?: number;
  /** @format double */
  limit?: number;
}

export interface GetUnreadCountResponse {
  /** @format double */
  unreadCount: number;
}

/** Filter to mark notifications as read */
export interface MarkAsReadCommand {
  redirectToResourceType?: string;
  resourceId?: string;
}

export interface CreatePostResponse {
  postId: string;
}

export interface CreatePostCommand {
  tags?: string[];
  content: string;
  imgUrls?: string[];
  title: string;
}

export interface EditPostUpdates {
  title?: string;
  content?: string;
  tags?: string[];
  imgUrls?: string[];
}

export interface GetPostByIdResponse {
  commentedBy: string[];
  likedBy: string[];
  /** @format date-time */
  createdAt: string;
  imgUrls: string[];
  tags: string[];
  authorProfileImgUrl: string;
  username: string;
  authorId: string;
  content: string;
  title: string;
  id: string;
}

export type QueryPostsResponse = {
  commentedBy: string[];
  imgUrls: string[];
  likedBy: string[];
  tags: string[];
  createdAt: string;
  content: string;
  title: string;
  id: string;
  authorProfileImgUrl: string;
  username: string;
  authorId: string;
}[];

export interface QueryPostsCommand {
  /** @format double */
  offset?: number;
  /** @format double */
  limit?: number;
  tags?: string[];
  sortBy?: SortBy;
  title?: string;
  authorId?: string;
}

export interface CreateCommentCommand {
  postId: string;
  parentCommentId?: string;
  content: string;
}

export interface EditCommentBody {
  content: string;
}

export type QueryCommentsResponse = {
  parentCommentId?: string;
  likedBy: string[];
  createdAt: string;
  authorProfileImgUrl: string;
  authorUsername: string;
  authorId: string;
  postId: string;
  content: string;
  id: string;
}[];

export interface QueryCommentsCommand {
  postId?: string;
  /** @format double */
  offset?: number;
  /** @format double */
  limit?: number;
  authorId?: string;
}

export type QueryMessagesResponse = {
  isFromCurrentUser: boolean;
  otherParticipantId: string;
  createdAt: string;
  content: string;
  username: string;
  profileImgUrl: string;
  id: string;
}[];

export interface QueryMessagesCommand {
  otherParticipantId: string;
  /** @format double */
  offset?: number;
  /** @format double */
  limit?: number;
}

/** The latest message from each of the users chat */
export type GetChatListResponse = {
  /** Whether the message is sent by the requestor */
  isFromCurrentUser: boolean;
  /** Id of the receiver */
  otherParticipantId: string;
  createdAt: string;
  /** Content of the message */
  content: string;
  /** Profile image url of the sender */
  profileImgUrl: string;
  /** Username of the sender */
  username: string;
  /** Id of the message */
  id: string;
}[];

export interface CreateMessageCommand {
  recipientId: string;
  text: string;
}

export interface CreateFileUploadUrlResponse {
  uploadUrl: string;
}

export interface LoginCommand {
  username: string;
  password: string;
}

export interface RegisterCommand {
  username: string;
  password: string;
  email: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "/";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title ca
 * @version 1.0.0
 * @license ISC
 * @baseUrl /
 * @contact
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name HandleGetById
     * @request GET:/users/{userId}
     */
    handleGetById: (userId: string, params: RequestParams = {}) =>
      this.request<GetUserByIdResponse, HTTPError>({
        path: `/users/${userId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name HandleEdit
     * @request PATCH:/users/me
     * @secure
     */
    handleEdit: (data: EditUserCommand, params: RequestParams = {}) =>
      this.request<void, HTTPError>({
        path: `/users/me`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name Follow
     * @request POST:/users/{userId}/follow
     * @secure
     */
    follow: (userId: string, params: RequestParams = {}) =>
      this.request<void, HTTPError>({
        path: `/users/${userId}/follow`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name QueryUsers
     * @request GET:/users
     */
    queryUsers: (
      query?: {
        /** @format double */
        offset?: number;
        /** @format double */
        limit?: number;
        /** The username of the user to query */
        username?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<QueryUsersResponse, HTTPError>({
        path: `/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name Unfollow
     * @request POST:/users/{userId}/unfollow
     * @secure
     */
    unfollow: (userId: string, params: RequestParams = {}) =>
      this.request<void, HTTPError>({
        path: `/users/${userId}/unfollow`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  me = {
    /**
     * No description
     *
     * @tags Users
     * @name HandleGetMe
     * @request GET:/me
     * @secure
     */
    handleGetMe: (params: RequestParams = {}) =>
      this.request<GetMeResponse, HTTPError>({
        path: `/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  notifications = {
    /**
     * No description
     *
     * @tags Notifications
     * @name HandleQuery
     * @request GET:/notifications/me
     * @secure
     */
    handleQuery: (
      query?: {
        /** @format double */
        offset?: number;
        /** @format double */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<QueryNotificationsResponse, HTTPError>({
        path: `/notifications/me`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notifications
     * @name HandleGetUnreadCount
     * @request GET:/notifications/unread-count
     * @secure
     */
    handleGetUnreadCount: (params: RequestParams = {}) =>
      this.request<GetUnreadCountResponse, HTTPError>({
        path: `/notifications/unread-count`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notifications
     * @name HandleMarkAsRead
     * @request POST:/notifications/read
     * @secure
     */
    handleMarkAsRead: (data: MarkAsReadCommand, params: RequestParams = {}) =>
      this.request<void, HTTPError>({
        path: `/notifications/read`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  posts = {
    /**
     * No description
     *
     * @tags Posts
     * @name CreatePost
     * @request POST:/posts
     * @secure
     */
    createPost: (data: CreatePostCommand, params: RequestParams = {}) =>
      this.request<CreatePostResponse, HTTPError>({
        path: `/posts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Posts
     * @name QueryPosts
     * @request GET:/posts
     */
    queryPosts: (
      query?: {
        /** @format double */
        offset?: number;
        /** @format double */
        limit?: number;
        tags?: string[];
        sortBy?: SortBy;
        title?: string;
        authorId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<QueryPostsResponse, HTTPError>({
        path: `/posts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Posts
     * @name DeletePost
     * @request DELETE:/posts/{postId}
     * @secure
     */
    deletePost: (postId: string, params: RequestParams = {}) =>
      this.request<void, HTTPError>({
        path: `/posts/${postId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Posts
     * @name EditPost
     * @request PATCH:/posts/{postId}
     * @secure
     */
    editPost: (
      postId: string,
      data: EditPostUpdates,
      params: RequestParams = {},
    ) =>
      this.request<void, HTTPError>({
        path: `/posts/${postId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Posts
     * @name GetPostById
     * @request GET:/posts/{postId}
     */
    getPostById: (postId: string, params: RequestParams = {}) =>
      this.request<GetPostByIdResponse, HTTPError>({
        path: `/posts/${postId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Posts
     * @name LikePost
     * @request POST:/posts/{postId}/like
     * @secure
     */
    likePost: (postId: string, params: RequestParams = {}) =>
      this.request<void, HTTPError>({
        path: `/posts/${postId}/like`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Posts
     * @name UnlikePost
     * @request POST:/posts/{postId}/unlike
     * @secure
     */
    unlikePost: (postId: string, params: RequestParams = {}) =>
      this.request<void, HTTPError>({
        path: `/posts/${postId}/unlike`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  comments = {
    /**
     * No description
     *
     * @tags Comments
     * @name Create
     * @request POST:/comments
     * @secure
     */
    create: (data: CreateCommentCommand, params: RequestParams = {}) =>
      this.request<
        {
          message: string;
        },
        HTTPError
      >({
        path: `/comments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name Query
     * @request GET:/comments
     */
    query: (
      query?: {
        postId?: string;
        /** @format double */
        offset?: number;
        /** @format double */
        limit?: number;
        authorId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<QueryCommentsResponse, HTTPError>({
        path: `/comments`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name Delete
     * @request DELETE:/comments/{commentId}
     * @secure
     */
    delete: (commentId: string, params: RequestParams = {}) =>
      this.request<void, HTTPError>({
        path: `/comments/${commentId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name Edit
     * @request PATCH:/comments/{commentId}
     * @secure
     */
    edit: (
      commentId: string,
      data: EditCommentBody,
      params: RequestParams = {},
    ) =>
      this.request<void, HTTPError>({
        path: `/comments/${commentId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name Like
     * @request POST:/comments/{commentId}/like
     * @secure
     */
    like: (commentId: string, params: RequestParams = {}) =>
      this.request<void, HTTPError>({
        path: `/comments/${commentId}/like`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name Unlike
     * @request POST:/comments/{commentId}/unlike
     * @secure
     */
    unlike: (commentId: string, params: RequestParams = {}) =>
      this.request<void, HTTPError>({
        path: `/comments/${commentId}/unlike`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  messages = {
    /**
     * No description
     *
     * @tags Messages
     * @name QueryMessages
     * @request GET:/messages
     * @secure
     */
    queryMessages: (
      query: {
        otherParticipantId: string;
        /** @format double */
        offset?: number;
        /** @format double */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<QueryMessagesResponse, HTTPError>({
        path: `/messages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Messages
     * @name CreateMessage
     * @request POST:/messages
     * @secure
     */
    createMessage: (data: CreateMessageCommand, params: RequestParams = {}) =>
      this.request<void, HTTPError>({
        path: `/messages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  chats = {
    /**
     * No description
     *
     * @tags Messages
     * @name GetChatList
     * @request GET:/chats
     * @secure
     */
    getChatList: (params: RequestParams = {}) =>
      this.request<GetChatListResponse, HTTPError>({
        path: `/chats`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  files = {
    /**
     * No description
     *
     * @tags Files
     * @name HandleCreateFileUploadUrl
     * @request POST:/files/upload-url
     * @secure
     */
    handleCreateFileUploadUrl: (params: RequestParams = {}) =>
      this.request<CreateFileUploadUrlResponse, HTTPError>({
        path: `/files/upload-url`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Authentication
     * @name Login
     * @request POST:/auth/login
     */
    login: (data: LoginCommand, params: RequestParams = {}) =>
      this.request<
        {
          accessToken: string;
        },
        HTTPError
      >({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name Register
     * @request POST:/auth/register
     */
    register: (data: RegisterCommand, params: RequestParams = {}) =>
      this.request<void, HTTPError>({
        path: `/auth/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name Logout
     * @request POST:/auth/logout
     */
    logout: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/logout`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name Refresh
     * @request POST:/auth/refresh
     */
    refresh: (params: RequestParams = {}) =>
      this.request<
        {
          accessToken: string;
        },
        HTTPError
      >({
        path: `/auth/refresh`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
}
