export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>Movie No. {id}!</h1>;
}

// === 동적 라우팅 ===
// [] 대괄호 안에 넣어주면 동적 라우팅으로 인식
// 라우팅 정보 자체가 props에 담김
// ex. /movie/333 => { params: { id: '333' }, searchParams: {} }
