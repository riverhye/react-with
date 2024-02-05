export const metadata = {
  title: 'Home',
  description: 'This is home!',
};

// === routes group ===
// 소괄호 안에 작성하면 프레임워크가 url로 인식하지 않는다. 그래서 메인 페이지에 필요한 파일들 정리 가능!

export default function page() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
