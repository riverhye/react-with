const Login = () => {
  const REDIRECT_URI = 'http://localhost:3000/auth';

  // Solved : redirect랑 restapi 거꾸로 입력
  // P1 : env 안 먹힘
  // p2 : Redirect 설정했는데 Null이라고 함
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&
  redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKaKao = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <section className="">
        <div className="w-40">
          간편 로그인
          <button className="" onClick={handleKaKao}>
            카카오 로그인
          </button>
        </div>
      </section>
    </>
  );
};

export default Login;
