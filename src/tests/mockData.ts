  import { Comment, FlatComment } from '@api/comments/types';

export const mockFlatComments: FlatComment[] = [
  {
    id: '1',
    content: 'Parent 1',
    authorUsername: 'user1',
    authorProfileImgUrl: 'profile1.jpg',
    postId: 'post1',
    parentCommentId: undefined,
    commentCount: 2,
    likeCount: 1,
    createdAt: '2024-01-01',
    likedByCurrentUser: false,
    createdByCurrentUser: false,
    authorId: '1'
  },
  {
    id: '2',
    content: 'Child of Parent 1',
    authorUsername: 'user2',
    authorProfileImgUrl: 'profile2.jpg',
    postId: 'post1',
    parentCommentId: '1',
    commentCount: 1,
    likeCount: 0,
    createdAt: '2024-01-01',
    likedByCurrentUser: false,
    createdByCurrentUser: false,
    authorId: '2'
  },
  {
    id: '3',
    content: 'Grandchild',
    authorUsername: 'user3',
    authorProfileImgUrl: 'profile3.jpg',
    postId: 'post1',
    parentCommentId: '2',
    commentCount: 0,
    likeCount: 0,
    createdAt: '2024-01-01',
    likedByCurrentUser: false,
    createdByCurrentUser: false,
    authorId: '3'
  },
  {
    id: '4',
    content: 'Parent 2',
    authorUsername: 'user4',
    authorProfileImgUrl: 'profile4.jpg',
    postId: 'post1',
    parentCommentId: undefined,
    commentCount: 0,
    likeCount: 0,
    createdAt: '2024-01-01',
    likedByCurrentUser: false,
    createdByCurrentUser: false,
    authorId: '4'
  }
];

export const expectedCommentTree: Comment[] = [
  {
    id: '1',
    content: 'Parent 1',
    authorUsername: 'user1',
    authorProfileImgUrl: 'profile1.jpg',
    postId: 'post1',
    parentCommentId: undefined,
    commentCount: 2,
    likeCount: 1,
    createdAt: '2024-01-01',
    likedByCurrentUser: false,
    createdByCurrentUser: false,
    authorId: '1',
    replies: [
      {
        id: '2',
        content: 'Child of Parent 1',
        authorUsername: 'user2',
        authorProfileImgUrl: 'profile2.jpg',
        postId: 'post1',
        parentCommentId: '1',
        commentCount: 1,
        likeCount: 0,
        createdAt: '2024-01-01',
        likedByCurrentUser: false,
        createdByCurrentUser: false,
        authorId: '2',
        replies: [
          {
            id: '3',
            content: 'Grandchild',
            authorUsername: 'user3',
            authorProfileImgUrl: 'profile3.jpg',
            postId: 'post1',
            parentCommentId: '2',
            commentCount: 0,
            likeCount: 0,
            createdAt: '2024-01-01',
            likedByCurrentUser: false,
            createdByCurrentUser: false,
            replies: [],
            authorId: '3'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    content: 'Parent 2',
    authorUsername: 'user4',
    authorProfileImgUrl: 'profile4.jpg',
    postId: 'post1',
    parentCommentId: undefined,
    commentCount: 0,
    likeCount: 0,
    createdAt: '2024-01-01',
    likedByCurrentUser: false,
    createdByCurrentUser: false,
    replies: [],
    authorId: '4'
  }
];
