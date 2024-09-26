import React from 'react';
import TNB from '../../components/Navigation/TNB';
import { Chat_User } from '../../types/types';
import ListChat from '../../components/List/ListChat';

const users: Chat_User[] = [
    {
        username: 'CEOS',
        profileImage: require('../../assets/Image/CEOS56.jpg'),
        lastMessage: '네 실화입니다. 정말 축하드립니다',
        updatedAt: '·1h',
        isActivated: true,
    },
    {
        username: 'confiwns_',
        profileImage: require('../../assets/Image/confiwns_.jpg'),
        lastMessage: '야 니 머허냐? 정신 안 차려? 똑띠해라잉',
        updatedAt: '·30m',
        isActivated: true,
    },
    {
        username: 'Instagram User',
        profileImage: '',
        lastMessage: 'Sent Monday',
        updatedAt: '·1h',
        isActivated: false,
    },
    {
        username: 'Instagram User',
        profileImage: '',
        lastMessage: 'Sent Monday',
        updatedAt: '·1h',
        isActivated: false,
    },{
        username: 'Instagram User',
        profileImage: '',
        lastMessage: 'Sent Monday',
        updatedAt: '·1h',
        isActivated: false,
    },{
        username: 'Instagram User',
        profileImage: '',
        lastMessage: 'Sent Monday',
        updatedAt: '·1h',
        isActivated: false,
    },{
        username: 'Instagram User',
        profileImage: '',
        lastMessage: 'Sent Monday',
        updatedAt: '·1h',
        isActivated: false,
    },
    // 다른 사용자 데이터 추가
  ];

export default function ChatList() {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center'>
        {/* ChatList TNB */}
        <TNB name='chatlist'/>
        <div className='w-full h-[40px] flex justify-between items-center px-4 py-2'>
            <p className='text-title-2'>Messages</p>
            <p className='text-body-2-b text-gray500'>Requests</p>
        </div>

        {/* ChatList User */}
        <section className='w-full h-[616px] overflow-y-auto scollbar-hide'>
            {users.map((user, index) => (
                <ListChat key={index} user={user} />
            ))}
        </section>
      </div>
    );
  }