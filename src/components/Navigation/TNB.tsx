import React, { useEffect, useState } from 'react';
import { ReactComponent as LockIcon } from '../../assets/svg/lock.svg';
import { ReactComponent as DownIcon } from '../../assets/svg/down.svg';
import { ReactComponent as ThreadsIcon } from '../../assets/svg/thread.svg';
import { ReactComponent as PlusIcon } from '../../assets/svg/plus.svg';
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg';
import data from './data/data.json'; 
import { Chat, User } from '../../types/types';

interface TNBProps {
    name: string;
    user?: User; // 필요한 경우에만 user 정보를 받음
    chat?: Chat; // 필요한 경우에만 chat 정보를 받음
  }
  
// TNB 컴포넌트 구현
const TNB: React.FC<TNBProps> = ({ name, user, chat }) => {

    const renderTNBContent = () => {
        switch (name) {
        case 'profile':
            return (
            <div className='w-full h-full flex justify-between items-center px-5'>
                <div className='flex justify-center items-center hover:bg-gray100 hover:rounded-lg cursor-pointer'>
                    <span><LockIcon/></span>
                    <span className=' text-title-1'>s.ol_lala</span>
                    <span><DownIcon/></span>
                </div>
                <div className='w-[118px] flex justify-between items-center'>
                    <span className='rounded-full cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'><ThreadsIcon/></span>
                    <span className='rounded-full cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'><PlusIcon/></span>
                    <span className='rounded-full cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'><MenuIcon/></span>
                </div>
            </div>
            );
        case 'edit':
            return (
            <div className="flex justify-between items-center">
                <button className="text-lg">{`<`}</button>
                <span>s.ol_lala</span>
                <span>✏️</span>
            </div>
            );
        case 'back':
            return (
            <div className="flex items-center">
                <button className="text-lg">{`<`}</button>
                <span className="ml-2">s.ol_lala</span>
            </div>
            );
        case 'locked':
            return (
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                <button className="text-lg">{`<`}</button>
                <div className="ml-2">
                    <span className="font-bold">CEOS</span>
                    <p className="text-sm text-gray-500">ceos.sinchon</p>
                </div>
                </div>
                <div className="flex space-x-4">
                <span>📞</span>
                <span>🎥</span>
                </div>
            </div>
            );
        default:
            return null;
        }
    };

  return (
    <div className="w-full h-[56px] flex flex-shrink-0">
      {renderTNBContent()}
    </div>
  );
};

export default TNB;
