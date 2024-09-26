import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Message, User } from '../types/types';

interface ChatState {
  users: User[]; // 각 유저의 메시지 및 정보 관리
  addMessage: (user_id: number, text: string, isMine: boolean) => void;
  getUserMessages: (user_id: number) => Message[]; // 특정 유저의 메시지 가져오기
}

const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      users: [
        {
            user_id: 1,
            username: 'CEOS',
            displayName: 'ceos.sinchon',
            profileImage: require('../assets/Image/CEOS56.jpg'),
            posts: 174,
            followers: 740,
            following: 5,
            messages: [
                { id: 1, text: "안녕하세요! 세오스 합격하셨습니다", isMine: false },
                { id: 2, text: "네??? 정말 합격인가요?", isMine: true },
                { id: 3, text: "네 실화입니다 정말 축하합니다", isMine: false }
            ],
            lastMessage: "네 실화입니다 정말 축하합니다",
            updatedAt: "·1h",
            isActivated: true,
        },
        {
            user_id: 2,
            username: 'confiwns_',
            displayName: '윤영준',
            profileImage: require('../assets/Image/confiwns_.jpg'),
            posts: 0,
            followers: 302,
            following: 335,
            messages: [
                { id: 1, text: "야 니 머허냐? 정신 안 차려?", isMine: false },
                { id: 2, text: "쏘리. 그럴 수도 있지...", isMine: true },
                { id: 3, text: "머함?", isMine: true },
                { id: 4, text: "누워있어. 요즘 흑백요리사 하는데 너무 재밌다. 흥미진진한데 큰일났네 곧 시험기간인데", isMine: false },
                { id: 5, text: "괜찮아. 다 똑같아 ^ㅡ^", isMine: true },
            ],
            lastMessage: "괜찮아. 다 똑같아 ^ㅡ^",
            updatedAt: "·30m",
            isActivated: false,
        },
        {
            user_id: 3,
            username: 'hamzzi_cute',
            displayName: '햄찌',
            profileImage: require('../assets/Image/hamzzi.jpg'),
            posts: 5,
            followers: 227,
            following: 5,
            messages: [
                { id: 1, text: "전 햄찌에요. 옆에 귀여운 친구도 있어요. 반가워요.", isMine: false }
            ],
            lastMessage: "전 햄찌에요. 옆에 귀여운 친구도 있어요. 반가워요.",
            updatedAt: "·30m",
            isActivated: true,
        },
        {
            user_id: 4,
            username: 'totoro_totoro',
            displayName: '토토로',
            profileImage: require('../assets/Image/totoro.jpg'),
            posts: 2,
            followers: 12,
            following: 12,
            messages: [
                { id: 1, text: "나는 토토로. 탐정이야.", isMine: false }
            ],
            lastMessage: "나는 토토로. 탐정이야.",
            updatedAt: "·4h",
            isActivated: true,
        }
      ],

      // 특정 user_id에 맞는 메시지 배열에 메시지 추가
      addMessage: (user_id, text, isMine) =>
        set((state) => ({
          users: state.users.map((user) =>
            user.user_id === user_id
              ? {
                  ...user,
                  messages: [
                    ...(user.messages || []), // messages가 존재하지 않으면 빈 배열로 초기화
                    { id: (user.messages?.length || 0) + 1, text, isMine }
                  ],
                }
              : user
          ),
        })),

      // 특정 user_id의 메시지 배열을 반환
      getUserMessages: (user_id) =>
        get().users.find((user) => user.user_id === user_id)?.messages || [],
    }),
    {
      name: 'chat-storage', // 로컬 스토리지에 저장될 이름
      storage: createJSONStorage(() => localStorage), // `createJSONStorage` 사용
    }
  )
);

export default useChatStore;
