import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './app/profile/Profile';
import FollowList from './app/profile/follower/FollowList';
import ChatList from './app/chatting/ChatList';
import ChatRoom from './app/chatting/ChatRoom';

function App() {
  return (
    <Router>
      <Routes>
          {/* 기본 경로에서 /profile로 리다이렉트 */}
          <Route path="/" element={<Navigate to="/profile" />} />
          <Route path="/profile" element={<Profile />} />  {/* 홈 경로 */}
          <Route path="/profile/followList" element={<FollowList />} /> {/* 소개 페이지 */}
          <Route path="/chatting/chatList" element={<ChatList />} />
          <Route path="/chatting/chatRoom" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
