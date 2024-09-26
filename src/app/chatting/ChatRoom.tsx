import React from 'react';
import { useParams } from 'react-router-dom';
import TNB from '../../components/Navigation/TNB';
import ceos96 from '../../assets/Image/CEOS96.jpg';
import ChatBar from '../../components/ChatBar/ChatBar';

const ChatRoom: React.FC = () => {
    const { username } = useParams(); // URL에서 유저명 추출

    // 임시 데이터 (API와 연동해서 가져올 수 있음)
    const userData = {
        username: 'CEOS',
        profileImage: require('../../assets/Image/CEOS56.jpg'),
        displayName: 'CEOS',
    };

    return (
        <div className="w-full h-full flex flex-col">
            {/* ChatRoom TNB */}
            <TNB name="chatroom"/>

            <div className='w-full h-[calc(100%-56px-80px)] overflow-y-auto scrollbar-hide'>
                {/* ChatRoom User Description */}
                <div className='flex flex-col items-center gap-3 pt-8 px-12'>
                    <div className='w-[279px] flex flex-col items-center gap-2'>
                        <img src={ceos96} alt="Profile" className="w-[96px] h-[96px] rounded-full cursor-pointer"/>
                        <p className='h-[21px] text-center text-title-2 text-black'>CEOS</p>
                        <span className='w-full text-body-2-m text-gray500 text-center self-stretch'>
                            <p>ceos.sinchon</p>
                            <p>736 followers · 174 posts</p>
                            <p>You don’t follow each other on Instagram</p>
                        </span>
                    </div>
                    <button className='w-[112px] h-[32px] flex justify-center items-center px-4 py-[5px] rounded-lg bg-gray100 text-caption text-gray600 hover:bg-gray200 cursor-pointer'>View Profile</button>
                </div>

                {/* ChatRoom Chat */}
                <div className='w-full mt-[180px] flex flex-col items-center'>
                    {/* 채팅 시작 시각 */}
                    <span className='w-[108px] h-[16px] text-center text-body-3 text-gray500'>SEP 2 AT 3:26 PM</span>
                </div>

                {/* ChatBar */}
            </div>
        
        </div>
    );
};

export default ChatRoom;
