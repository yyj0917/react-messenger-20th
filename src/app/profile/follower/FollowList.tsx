import React, { useState } from 'react';
import TNB from '../../../components/Navigation/TNB';
import ListFriend from '../../../components/List/ListFriend';
import { User } from '../../../types/types';

const users: User[] = [
  {
    user_id: 1,
    username: 'ceos.sinchon',
    displayName: 'CEOS',
    profileImage: require('../../../assets/Image/CEOS56.jpg'), // 실제 이미지 경로로 변경하세요
  },
  {
    user_id: 2,
    username: 'confiwns_',
    displayName: '윤영준',
    profileImage: require('../../../assets/Image/confiwns_.jpg'),
  },
  {
    user_id: 3,
    username: 'Jippgago_sipdda',
    displayName: 'Instagram User',
  },
  {
    user_id: 4,
    username: 'Jippgago_sipdda',
    displayName: 'Instagram User',
  },
  {
    user_id: 5,
    username: 'Jippgago_sipdda',
    displayName: 'Instagram User',
  },
  {
    user_id: 6,
    username: 'Jippgago_sipdda',
    displayName: 'Instagram User',
  },
  
];

export default function FollowList() {
  const [activeTab, setActiveTab] = useState<number>(1);

  // 탭 변경 함수
  const handleTabClick = (tabIndex: number) => {
      setActiveTab(tabIndex);
  };
  const handleRemove = (username: string) => {
    console.log(`${username} removed`);
  };
  return (
    <div className='w-full h-full flex flex-col justify-center items-center '>
      {/* Follow TNB */}
      <TNB name='friend'/>
      
      {/* Tab */}
      <div className='w-full h-[38px] inline-flex items-center'>
        <p 
          onClick={() => handleTabClick(1)}
          className={`w-[125px] text-center text-body-2-b cursor-pointer
          ${activeTab === 1 ? 'text-black border-b-2 border-black' : 'text-gray500'}`}>1000 Followers</p>
        <p 
          onClick={() => handleTabClick(2)}
          className={`w-[125px] text-center text-body-2-b cursor-pointer
          ${activeTab === 2 ? 'text-black border-b-2 border-black' : 'text-gray500'}`}>1000 Follwing</p>
        <p 
          onClick={() => handleTabClick(3)}
          className={`w-[125px] text-center text-body-2-b cursor-pointer
          ${activeTab === 3 ? 'text-black border-b-2 border-black' : 'text-gray500'}`}>Subscriptions</p>
      </div>

      {/* Tab Content */}
      <div className='w-full h-full'>
        {activeTab === 1 ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className='w-full h-[40px] items-center px-4 py-2 self-stretch text-title-2'>All followers</span>
            {/* Followers List */}
            <section className='w-full h-[602px] overflow-y-auto scrollbar-hide'>
              {users.map((user, index) => (
                <ListFriend key={index} user={user} onRemove={handleRemove} />
              ))}
            </section>
          </div>
        ) : activeTab === 2 ? (
          // Following 탭이 활성화된 경우 콘텐츠
          <div className="w-full h-full flex flex-col items-center justify-center">
            <p className='text-body-2-m text-gray500'>Following</p>
            <p className='text-body-2-m text-gray500'>1000명</p>
          </div>
        ) : (
          // Subscriptions 탭이 활성화된 경우 콘텐츠
          <div className="w-full h-full flex flex-col items-center justify-center">
            <p className='text-body-2-m text-gray500'>Subscriptions</p>
            <p className='text-body-2-m text-gray500'>1000명</p>
          </div>
        )}
      </div>
    </div>
  );
}