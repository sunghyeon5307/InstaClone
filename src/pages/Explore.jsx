import React from 'react';
import { useNavigate } from 'react-router-dom';

function Explore() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff', padding: '30px' }}>
      {/* 왼쪽 사이드바 */}
      <div style={{ width: '250px', marginRight: '10px' }}>
        <LeftSidebar />
      </div>
      <div style={{ width: '1px', backgroundColor: '#ddd',marginRight:'120px' }} />

      {/* 탐색 그리드 피드 */}
      <div style={{ flexShrink: 0, width: '800px' }}>
        <ExploreFeed />
      </div>
    </div>
  );
}

function LeftSidebar() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '250px', paddingRight: '40px' }}>
      <img src="/insta_logo.png" alt="Instagram" style={{ height: '40px', marginBottom: '30px' }} />
      <SidebarItem img="/2.png" label="홈" onClick={() => navigate('/home')} />
      <SidebarItem img="/3.png" label="검색" />
      <SidebarItem img="/4.png" label="탐색 탭" onClick={() => navigate('/explore')} />
      <SidebarItem img="/5.png" label="릴스" />
      <SidebarItem img="/6.png" label="메시지" />
      <SidebarItem img="/7.png" label="알림" />
      <SidebarItem img="/1.png" label="만들기" />
      <SidebarItem img="/9.png" label="프로필" />
      <div style={{ paddingTop: '130px' }}>
        <SidebarItem img="/8.png" label="더 보기" />
        <SidebarItem img="/10.png" label="Meta의 다른 앱" />
      </div>
    </div>
  );
}

function SidebarItem({ img, label, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '20px',
        cursor: 'pointer',
      }}
    >
      <img src={img} alt={label} style={{ height: '37px' }} />
      <span style={{ fontSize: '17px', fontWeight: 'bold' }}>{label}</span>
    </div>
  );
}



function ExploreFeed() {
  const images = [...Array(9)].map((_, idx) => `/Explore${(idx % 6) + 1}.png`);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        paddingTop: '20px',
      }}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`explore-${index}`}
          style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '5px' }}
        />
      ))}
    </div>
  );
}

export default Explore;
