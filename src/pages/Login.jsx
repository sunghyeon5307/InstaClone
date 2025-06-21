// src/pages/Login.jsx

function Login() {
    return (
      <>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            paddingLeft: '80px',
          }}
        >
          {/* 왼쪽: 이미지 */}
          <div style={{ marginRight: '50px' }}>
            <img
              src="/login_logo.png"
              alt="preview"
              style={{ height: '500px', padding: '90px' }}
            />
          </div>
  
          {/* 오른쪽: 로그인 폼 */}
          <div style={{ width: '270px' }}>
            <img
              src="/insta_logo.png"
              alt="Instagram logo"
              style={{ height: '50px', margin: '0 auto 20px', display: 'block' }}
            />
  
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              style={inputStyle}
            />
            <input type="password" placeholder="비밀번호" style={inputStyle} />
            <button style={buttonStyle}>로그인</button>
  
            <div style={dividerWrapper}>
              <hr style={lineStyle} />
              <span style={textStyle}>또는</span>
              <hr style={lineStyle} />
            </div>
  
            <a
              href="https://www.facebook.com/login.php..."
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '20px',
                }}
              >
                <img src="/facebook_logo.png" alt="facebook" style={{ height: '25px' }} />
                <div style={{ fontSize: '15px', color: '#1877F2', fontWeight: 'bold' }}>
                  Facebook으로 로그인
                </div>
              </div>
            </a>
  
            <div
              style={{
                textAlign: 'center',
                marginTop: '10px',
                fontSize: '15px',
                fontWeight: 'bold',
              }}
            >
              비밀번호를 잊으셨나요?
            </div>
  
            <a
              href="https://www.instagram.com/accounts/emailsignup/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  textAlign: 'center',
                  fontSize: '14px',
                  marginTop: '40px',
                  color: 'black',
                }}
              >
                계정이 없으신가요?{' '}
                <span
                  style={{
                    fontWeight: 'bold',
                    color: '#5f75eb',
                    cursor: 'pointer',
                  }}
                >
                  가입하기
                </span>
              </div>
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

function Footer() {
    return(
      <>
        <div style={footerWrapper}>
          <a href="https://www.meta.com/ko-kr/about/?utm_source=about.meta.com&utm_medium=redirect" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none',color:'gray' }}>
              <span>Meta</span>
          </a>
          <a href="https://about.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color:'gray' }}>
              <span>소개</span>
          </a>
          <a href="https://about.instagram.com/blog" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none',color:'gray'  }}>
              <span>블로그</span>
          </a>
          <a href="https://about.instagram.com/about-us/careers" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color:'gray' }}>
              <span>채용 정보</span>
          </a>
          <a href="https://help.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color:'gray' }}>
              <span>도움말</span>
          </a>
          <a href="https://developers.facebook.com/docs/instagram-platform" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color:'gray' }}>
              <span>API</span>
          </a>
          <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color:'gray' }}>
              <span>개인정보처리방침</span>
          </a>
          <a href="https://help.instagram.com/581066165581870/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color:'gray' }}>
              <span>약관</span>
          </a>
          <a href="https://www.instagram.com/explore/locations/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color:'gray' }}>
              <span>위치</span>
          </a>
          <a href="https://www.instagram.com/web/lite/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color:'gray' }}>
              <span>Instagram Lite</span>
          </a>
          <a href="https://www.threads.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color:'gray' }}>
              <span>Threads</span>
          </a>
          <a href="https://www.facebook.com/help/instagram/261704639352628" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color:'gray' }}>
              <span>연락처 업로드 & 비사용자</span>
          </a>
          <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fmeta_verified%2F%3Fentrypoint%3Dweb_footer%26__coig_login%3D1#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color:'gray'}}>
              <span>Meta Verified</span>
          </a>
        </div>
        
        <div style={footerBottom}>
          <span style={{ color: 'gray' }}>한국어</span>
          <span style={{ color: 'gray' }}>© 2025 Instagram from Meta</span>
        </div>
      </>
    );
}
  
  const inputStyle = {
    width: '250px',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  }
  
  const buttonStyle = {
    width: '270px',
    padding: '8px',
    marginTop: '10px',
    backgroundColor: '#8195f9',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
  }
  const dividerWrapper = {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
  }
  
  const lineStyle = {
    flex: 1,
    height: '1px',
    backgroundColor: '#dbdbdb',
    border: 'none',
  }
  
  const textStyle = {
    margin: '0 15px',
    color: 'gray',
    fontSize: '13px',
    fontWeight:'bold',
  }
  const footerWrapper = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '20px', 
    color: 'gray',
    fontSize: '12px',
    paddingLeft:'200px'
    
  };
  
  const footerBottom = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    fontSize: '12px',
    color: 'gray',
    paddingLeft: '200px',
    marginBottom:'50px'
  };
  
  
  export default Login
  