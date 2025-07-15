import { MessageDto, Message } from "@api/messages/types";
import { formatDate } from "@api/utils";



export function messageDtoToMessage(messageDto: MessageDto): Message {
  return {
    ...messageDto,
    createdAt: formatDate(messageDto.createdAt)
  };
} 