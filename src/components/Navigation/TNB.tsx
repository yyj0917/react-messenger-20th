import React from 'react';
import { ReactComponent as LockIcon } from '../../assets/svg/lock.svg';
import { ReactComponent as DownIcon } from '../../assets/svg/down.svg';
import { ReactComponent as ThreadsIcon } from '../../assets/svg/thread.svg';
import { ReactComponent as PlusIcon } from '../../assets/svg/plus.svg';
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg';
import { ReactComponent as LeftIcon } from '../../assets/svg/left.svg';
import { ReactComponent as NewMessage } from '../../assets/svg/newMessage.svg';
import { ReactComponent as RightIcon } from '../../assets/svg/right.svg';
import { ReactComponent as CallIcon } from '../../assets/svg/call.svg';
import { ReactComponent as VideoIcon } from '../../assets/svg/video.svg';
import profileImage from '../../assets/Image/CEOS56.jpg';



import { Chat, User } from '../../types/types';
import { useNavigate } from 'react-router-dom';

interface TNBProps {
    name: string;
    user?: User; // 필요한 경우에만 user 정보를 받음
    chat?: Chat; // 필요한 경우에만 chat 정보를 받음
  }
  
// TNB 컴포넌트 구현
const TNB: React.FC<TNBProps> = ({ name, user, chat }) => {
    const navigate = useNavigate();
    const renderTNBContent = () => {
        switch (name) {
        case 'profile':
            return (
            <div className='w-full h-full flex justify-between items-center px-5'>
                <div className='flex justify-center items-center hover:bg-gray100 hover:rounded-lg cursor-pointer'>
                    <span><LockIcon/></span>
                    <span className='text-title-1'>s.ol_lala</span>
                    <span><DownIcon/></span>
                </div>
                <div className='w-[118px] flex justify-between items-center'>
                    <span className='cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'><ThreadsIcon/></span>
                    <span className='cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'><PlusIcon/></span>
                    <span className='cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'><MenuIcon/></span>
                </div>
            </div>
            );
        case 'friend':
            return (
                <div className="w-full h-full flex items-center gap-[113px] px-5">
                    <LeftIcon onClick={()=>navigate("/profile")} className='cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'/>
                    <span className='text-title-2'>s.ol_lala</span>
                </div>
            );
        case 'chatlist':
            return (
            <div className="w-full h-full flex justify-between items-center border-b-[0.5px] border-gray200 px-5">
                <div className='flex justify-center items-center'>
                    <LeftIcon className='w-8 h-8 p-1 cursor-pointer'/>
                    <div className='flex justify-center items-center hover:bg-gray100 hover:rounded-lg cursor-pointer'>
                        <span className='text-title-1'>s.ol_lala</span>
                        <DownIcon/>
                    </div>
                </div>
                <div className=''>
                    <NewMessage className='cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'/>
                </div>
            </div>
            );
        case 'chatroom':
            return (
            <div className="w-full h-full flex justify-between items-center px-5 py-3 border-b-[0.5px] border-gray200">
                <div className="flex items-center gap-4">
                    <LeftIcon onClick={()=>navigate("/chatting/chatList")} className='cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'/>
                    <div className='flex items-center gap-[10px]'>
                        <img src={profileImage} alt={user?.username} className='w-8 h-8 rounded-full object-cover' />
                        <div className='flex flex-col rounded-lg hover:bg-gray100 cursor-pointer'>
                            <span className='flex'>
                                <p className='text-body-2-b text-black'>CEOS</p>
                                <RightIcon/>
                            </span>
                            <span className='text-caption text-gray500'>
                                ceos.sinchon
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className='w-8 h-8 p-1'><CallIcon className='cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'/></span>
                    <span className='w-8 h-8 p-1'><VideoIcon className='cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'/></span>
                </div>
            </div>
            );
        default:
            return null;
        }
    };

  return (
    <div className="w-full h-[56px] flex flex-shrink-0 ">
      {renderTNBContent()}
    </div>
  );
};

export default TNB;
