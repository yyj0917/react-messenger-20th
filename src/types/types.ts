// types.ts
export interface User {
    id: number;
    username: string;
    fullName: string;
    displayName: string;
    profileImage?: string;
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
  
export interface Friend_User {
    username: string;
    displayName: string;
    profileImage?: string;
    instagramLink?: string;
  }
  export interface Chat_User {
    username: string;
    profileImage?: string;
    lastMessage?: string;
    updatedAt: string;
    isActivated: boolean;
  }
  