import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import GNB from '../../components/Navigation/GNB';
import ChatBar from '../../components/ChatBar/ChatBar';
// import NavBar from './NavBar'; // 하단의 네비게이션 바

const Layout = () => {
    const location = useLocation(); // 현재 경로 정보를 가져옴

    return (
        <div className="flex flex-col w-[375px] h-[812px] shadow-lg bg-white m-auto">
            <main className="w-full h-[732px]">
                <Outlet /> {/* 자식 Route 컴포넌트가 여기에서 렌더링됩니다 */}
            </main>
            {/* <NavBar /> */}
            {!location.pathname.startsWith("/chatting/chatRoom") ? (
                <GNB />
            ) : (
                <ChatBar />
            )}
        </div>
    );
};

export default Layout;
