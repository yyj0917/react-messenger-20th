// types.ts
export interface User {
    id: number;
    username: string;
    fullName: string;
    profileImage: string;
    posts?: number;
    followers: number;
    following: number;
    bio?: string;
    website?: string;
    editProfile?: boolean;
  }
  
  export interface Chat {
    id: number;
    participants: number[];
    lastMessage: string;
    updatedAt: string;
  }
  
  export interface Message {
    messageId: number;
    chatId: number;
    senderId: number;
    content: string;
    sentAt: string;
  }
  