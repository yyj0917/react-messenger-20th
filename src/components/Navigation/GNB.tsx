import React from 'react';
import Icon from './Icon';

export default function GNB() {

    return (
        // 수정해야함
        <nav className='flex justify-center items-start shrink-0 w-[375px] h-[80px] pb-[30px] border-t-[0.5px] border-gray200'>
            <Icon name='home' route='/home' />
            <Icon name='search' route='/search' />
            <Icon name='like' route='/likes' />
            <Icon name='message' route='/chatting/chatList' />
            <Icon name='profile' route='/profile' />
        </nav>
    );
}
