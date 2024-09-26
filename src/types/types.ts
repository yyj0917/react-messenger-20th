// // types.ts
// export interface User {
//     user_id: number;
//     username: string;
//     displayName: string;
//     profileImage: string;
//     messages: Message[];
//     posts: number;
//     followers: number;
//     following: number;
// }
  
// export interface Chat {
//     id: number;
//     participants: number[];
//     lastMessage: string;
//     updatedAt: string;
//   }
  
// export interface Message {
//     id: number;
//     text: string;
//     isMine: boolean;
// }
  
// export interface Friend_User {
//     username: string;
//     displayName: string;
//     profileImage?: string;
//     instagramLink?: string;
//   }
//   export interface Chat_User {
//     username: string;
//     profileImage?: string;
//     lastMessage?: string;
//     updatedAt: string;
//     isActivated: boolean;
//   }
export interface Message {
  id: number;
  text: string;
  isMine: boolean;
}

export interface User {
  user_id: number;
  username: string;
  displayName?: string;
  profileImage?: string;
  messages?: Message[];
  posts?: number;
  followers?: number;
  following?: number;
  
  // 새롭게 추가되는 필드들
  lastMessage?: string;
  updatedAt?: string;
  isActivated?: boolean;
}
