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
  MostLiked = "mostLiked",
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
  error: string;
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

/** Make all properties in T optional */
export interface PartialWorkStringBioStringEducationStringInterestStringLocationStringProfileImgUrlDescriptionS3UrloftheprofileimageGenerateapresignedurlusing47Files47UploadUrlandusetheurltosavetheimagetos340Automaticallyhandledbythefrontend41AftersavingTheurlcanbeusedinthisrequesttoindicateyournewprofileimageStringThemePreferenceThemePreference {
  work?: string;
  bio?: string;
  education?: string;
  interest?: string;
  location?: string;
  /** S3 url of the profile image. Generate a presigned url using /files/upload-url and use the url to save the image to s3 (Automatically handled by the frontend). After saving, the url can be used in this request to indicate your new profile image */
  profileImgUrl?: string;
  themePreference?: ThemePreference;
}

export type EditUserCommand =
  PartialWorkStringBioStringEducationStringInterestStringLocationStringProfileImgUrlDescriptionS3UrloftheprofileimageGenerateapresignedurlusing47Files47UploadUrlandusetheurltosavetheimagetos340Automaticallyhandledbythefrontend41AftersavingTheurlcanbeusedinthisrequesttoindicateyournewprofileimageStringThemePreferenceThemePreference;

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
  sortBy?: SortBy;
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
  otherParticipantId: string;
  createdAt: string;
  /** Content of the message */
  content: string;
  /** Profile image url of the other participant in the chat */
  profileImgUrl: string;
  /** Username of the other participant in the chat */
  otherParticipantUsername: string;
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

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "/",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
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
        sortBy?: SortBy;
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
