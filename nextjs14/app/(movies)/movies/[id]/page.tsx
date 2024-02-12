import { API_URL } from '../../../(home)/page';

async function getMovies(id: string) {
  // return fetch(url).then(res=>res.json());
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const resposne = await fetch(`${API_URL}/${id}`);
  const json = await resposne.json();
  return json;
}

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const resposne = await fetch(`${API_URL}/${id}/videos`);
  return await resposne.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videos] = await Promise.all([getMovies(id), getVideos(id)]);
  return <h1>{movie.title}</h1>;
}

// === 동적 라우팅 ===
// [] 대괄호 안에 넣어주면 동적 라우팅으로 인식
// 라우팅 정보 자체가 props에 담김
// ex. /movie/333 => { params: { id: '333' }, searchParams: {} }

// === parallel data fetching ===
// await은 기본적으로 동기처리라서 비동기처리를 해줘야 함
// 방법 1 : Promise.all();
// const [num1, num2] = await Promise.all([num1(), num2()]);
// 방법 2.
