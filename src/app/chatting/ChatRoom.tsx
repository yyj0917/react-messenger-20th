import React from 'react';
import { useParams } from 'react-router-dom';
import TNB from '../../components/Navigation/TNB';
import ceos96 from '../../assets/Image/CEOS96.jpg';
import TextBubble from '../../components/ChatBar/TextBubble';
import useChatStore from '../../zustand/userStore';
import { User } from '../../types/types';
import KeyBoard from '../../components/ChatBar/KeyBoard';

const ChatRoom: React.FC = () => {
    const { username } = useParams(); // URL에서 유저명을 추출
    const { users, getUserMessages } = useChatStore();
    
    // 현재 유저 정보 찾기
    const currentUser = users.find(user => user.username === username);
    // 현재 유저의 메시지를 zustand로부터 가져옴
    const messages = currentUser ? getUserMessages(currentUser.user_id) : [];


    return (
        <div className="w-full h-full flex flex-col">
            {/* ChatRoom TNB 렌더링 속도차이로 인한 조건문 */}
            {currentUser && <TNB name="chatroom" user={currentUser} />}
            <div className='w-full h-[calc(812px-56px-80px)] overflow-y-auto scrollbar-hide !important'>
                {/* ChatRoom User Description */}
                <div className='flex flex-col items-center gap-3 pt-8 px-12'>
                    <div className='w-[279px] flex flex-col items-center gap-2'>
                        <img src={currentUser?.profileImage} alt="Profile" className="w-[96px] h-[96px] rounded-full cursor-pointer"/>
                        <p className='h-[21px] text-center text-title-2 text-black'>{currentUser?.username}</p>
                        <span className='w-full text-body-2-m text-gray500 text-center self-stretch'>
                            <p>{currentUser?.displayName}</p>
                            <p>{currentUser?.followers} followers · {currentUser?.posts} posts</p>
                            <p>You don’t follow each other on Instagram</p>
                        </span>
                    </div>
                    <button className='w-[112px] h-[32px] flex justify-center items-center px-4 py-[5px] rounded-lg bg-gray100 text-caption text-gray600 hover:bg-gray200 cursor-pointer'>View Profile</button>
                </div>

                {/* ChatRoom Chat */}
                <div className='w-full mt-[200px] flex flex-col gap-5 pb-5 items-center justify-end'>
                    {/* 채팅 시작 시각 */}
                    <span className='w-[108px] h-[16px] text-center text-body-3 text-gray500'>SEP 2 AT 3:26 PM</span>
                    {/* 채팅 내용 */}
                    <div className='w-full flex flex-col gap-3 px-3'>
                        {messages.map((message) => (
                            <TextBubble
                                key={message.id}
                                text={message.text}
                                isMine={message.isMine}
                                user={currentUser}
                            />
                            ))}
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default ChatRoom;
