import { Metadata } from 'next';
import Navigation from '../components/navigation';

export const metadata: Metadata = {
  title: {
    template: '%s | Next Js',
    default: 'Next Js',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {/* body 위에 넣으면 children 아래에 위치 */}
        {children}
      </body>
    </html>
  );
}

// ===== URL 접속 시 Next 가 파일 읽는 방식 =====
// 루트부터 시작하여 폴더 내 layout 파일이 있는지 확인 -> 같은 위치에 page 파일 있는지 확인
// ex. /about-us 라는 주소에 접속했을 때 그 폴더 내부에 layout이 있는지 확인 -> 있음 -> layout에 담긴 컴포넌트 읽음
// 이때 레이아웃은 중첩되기 때문에 {children} 에 포함된 컴포넌트에 또 다른 layout이 있다면 그것이 유지된 채로 나타남

// root layout : nav + (children)page.tsx
// ㄴ/about-us : nav + (children)page.tsx + (layout)copyright
//  ㄴ/company
//   ㄴ/jobs
//    ㄴ/sales : nav + (layout)$$$ + (children)page.tsx + copyright
