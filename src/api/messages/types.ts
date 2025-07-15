// export interface CreateMessageParams {
//   recipientId: string;
//   text: string;
// }

export interface MessageDto {
  id: string;
  profileImgUrl: string;
  username: string;
  content: string;
  createdAt: string;
  otherParticipantId: string;
  isFromCurrentUser: boolean;
} 

export type Message = MessageDto;

// export type GetChatListResponse = MessageDto[];

// export type GetMessagesResponse = MessageDto[];


// type OptionalGetMessagesCommand = Partial<{
//   offset: number;
//   limit: number;
// }>;

// export type RequiredOptionsGetMessagesCommand = {
//   otherParticipantId: string;
// };

// export type GetMessagesCommand = OptionalGetMessagesCommand &
//   RequiredOptionsGetMessagesCommand;

// export type CreateMessageCommand = {
//   recipientId: string;
//   text: string;
// };