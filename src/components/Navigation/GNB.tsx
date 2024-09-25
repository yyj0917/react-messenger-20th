import React from 'react';
import { ReactComponent as ProfileIcon } from '../../assets/svg/profileD.svg'; // 프로필 아이콘 불러오기
import { ReactComponent as HomeIcon } from '../../assets/svg/home.svg'; // 홈 아이콘 불러오기
import { ReactComponent as LikeIcon } from '../../assets/svg/like.svg'; // 좋아요 아이콘 불러오기
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'; // 검색 아이콘 불러오기
import { ReactComponent as MessageIcon } from '../../assets/svg/messageD.svg'; // 메시지 아이콘 불러오기
import Icon from '../Icon';
import { useNavigate } from 'react-router-dom';

export default function GNB() {

    return (
        // 수정해야함
        <nav className='flex justify-center items-start shrink-0 w-[375px] h-[80px] pb-[30px] border-t-[0.5px] border-gray200'>
            <Icon name='home' route='/home' />
            <Icon name='search' route='/search' />
            <Icon name='like' route='/likes' />
            <Icon name='message' route='/messages' />
            <Icon name='profile' route='/profile' />
        </nav>
    );
}
