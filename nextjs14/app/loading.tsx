export default function Loading() {
  return <h2>Loading...</h2>;
}

// === loading.tsx ===
// 서버 컴포넌트가 데이터를 불러오는 중에는 아무 UI도 보여줄 수 없다. 브라우저에 데이터가 도착하지 않았기 때문에.
// 서버 컴포넌트로 사용자에게 로딩 화면을 보여주려면?
// => http streaming을 이용해 useState으로 구현한 로딩 화면 대체
// BUT 페이지가 로드된 상태인 건 아님! (network 탭 '미리보기' 혹은 '응답')

// cf. 회색으로 칠해진 Card 프레임들이 먼저 보이고 -> 서버에서 데이터 받아오는 중 -> 이후 데이터 바인딩
