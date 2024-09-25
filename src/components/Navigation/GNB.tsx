import React from 'react';
import { ReactComponent as ProfileIcon } from '../../assets/svg/profileD.svg'; // 프로필 아이콘 불러오기
import { ReactComponent as HomeIcon } from '../../assets/svg/home.svg'; // 홈 아이콘 불러오기
import { ReactComponent as LikeIcon } from '../../assets/svg/like.svg'; // 좋아요 아이콘 불러오기
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'; // 검색 아이콘 불러오기
import { ReactComponent as MessageIcon } from '../../assets/svg/messageD.svg'; // 메시지 아이콘 불러오기

export default function GNB() {
    return (
        // 수정해야함
        <nav className='flex justify-center items-start shrink-0 w-[375px] h-[80px] pb-[30px] border-t-[0.5px] border-gray-200'>
            <HomeIcon className='flex w-[75px] h-[50px] p-[8px_24px_14px_23px] justify-center items-center flex-shrink-0'/>
            <SearchIcon className='flex w-[75px] h-[50px] p-[8px_24px_14px_23px] justify-center items-center flex-shrink-0'/>
            <LikeIcon className='flex w-[75px] h-[50px] p-[8px_24px_14px_23px] justify-center items-center flex-shrink-0'/>
            <MessageIcon className='flex w-[75px] h-[50px] p-[8px_24px_14px_23px] justify-center items-center flex-shrink-0'/>
            <ProfileIcon className='flex w-[75px] h-[50px] p-[8px_24px_14px_23px] justify-center items-center flex-shrink-0'/>
        </nav>
    );
}
