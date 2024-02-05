export const metadata = {
  title: 'About Us',
  description: 'Nice framework!',
};

export default function AboutUs() {
  return (
    <div>
      <h1>About Us~</h1>
    </div>
  );
}

// === metadata ===
// 1. layout, page 파일에서 + 서버 컴포넌트에서만 사용 가능
// 2. export const metadata = {}
// 3. Metadata 타입을 사용하면 다양한 옵션을 사용할 수 있다.
// 4. metadata는 merge 되기 때문에 root에서 틀을 만들어 두면, 원하는 부분만 덮어쓸 수도 있다.
// 5. Ex) " | Next JS" 부분은 모든 페이지에 적용되도록 template
