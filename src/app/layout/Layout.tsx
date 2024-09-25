import React from 'react';
import { Outlet } from 'react-router-dom';
import GNB from '../../components/Navigation/GNB';
// import NavBar from './NavBar'; // 하단의 네비게이션 바

const Layout = () => {
  return (
    <div className="flex flex-col w-[375px] h-[812px] shadow-lg bg-white m-auto">
        <main className="w-full h-[732px]">
            <Outlet /> {/* 자식 Route 컴포넌트가 여기에서 렌더링됩니다 */}
        </main>
        {/* <NavBar /> */}
        <GNB/>
    </div>
  );
};

export default Layout;
