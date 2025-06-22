// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff', padding: '30px' }}>
      {/* 왼쪽 사이드바 */}
      <div style={{ width: '250px', marginRight: '10px' }}>
        <LeftSidebar />
      </div>
      <div style={{ width: '1px', backgroundColor: '#ddd',marginRight:'30px' }} />


      {/* 중앙 컬럼 (스토리 + 피드) */}
      <div style={{ flexShrink: 0, width: '470px' }}>
        <StoryBar />
        <Feed />
      </div>

      {/* 오른쪽 추천 */}
      <div>
        <RightSidebar />
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
      <SidebarItem img="/4.png" label="탐색 탭" onClick={() => navigate('/Explore')} />
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


function StoryBar() {
    return (
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' ,paddingLeft:'45px'}}>
        {[...Array(8)].map((_, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(to top right, #f58529, #dd2a7b, #8134af)',
              padding: '2px'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '50%',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#ccc'
                }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  

function Feed() {
    return (
      <div style={{ flex: 1, maxWidth: '470px',paddingLeft:'100px' }}>

        <div style={{ padding: '10px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{
              width: '35px',
              height: '35px',
              borderRadius: '50%',
              backgroundColor: '#ccc',
              marginRight: '10px'
            }} />
            <strong>kbo.official</strong>
          </div>
          <img src="/kbo.png" alt="post" style={{ width: '500px', borderRadius: '5px' }} />
        </div>
      </div>
    );
  }
  

function RightSidebar() {
  return (
    <div style={{ width: '320px', paddingLeft: '270px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '10px' }} />
        <div>
          <div style={{ fontWeight: 'bold' }}>sunghyeone</div>
          <div style={{ color: 'gray', fontSize: '14px' }}>박성현</div>
        </div>
        <button style={{ fontSize:'13px',marginLeft: 'auto', background: 'none', border: 'none', color: '#0095f6', fontWeight: 'bold', cursor: 'pointer' }}>전환</button>
      </div>

      <div style={{ fontSize: '14px', color: 'gray', marginBottom: '10px' ,fontWeight:'bold'}}>
        회원님을 위한 추천 <span style={{ color:'black',float: 'right', fontWeight: 'bold' }}>모두 보기</span>
      </div>

      {[...Array(5)].map((_, idx) => (
        <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '10px' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 'bold', fontSize: '14px' }}>user_{idx}</div>
            <div style={{ fontSize: '12px', color: 'gray' }}>팔로우 추천</div>
          </div>
          <button style={{ fontSize:'13px',background: 'none', border: 'none', color: '#0095f6', fontWeight: 'bold', cursor: 'pointer' }}>팔로우</button>
        </div>
      ))}

      <div style={{ fontSize: '12px', color: '#CCCCCC', marginTop: '30px' }}>
        소개 · 도움말 · 홍보 센터 · API · 채용 정보 
        <div style={{paddingTop:'3px'}} >
            개인정보처리방침 · 약관 · 위치 · 언어 · Meta Verified
        </div>
        <div style={{ marginTop: '15px' }}>© 2025 INSTAGRAM FROM META</div>
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


export default Home;
