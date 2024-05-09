import { Suspense } from 'react';
import MovieInfo, { getMovies } from '../../../../components/movie-info';
import MovieVideo from '../../../../components/movie-videos';
import MovieInfoDetail from '../../../../components/movie-detail';

export interface IParams {
  params: { id: string };
}

// Dynamic Metadata
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovies(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  // 한번에 처리할 때 :
  // const [movie, videos] = await Promise.all([getMovies(id), getVideos(id)]);
  // 데이터 fetch하는 데까지 걸리는 시간 동안 같은 위치의 loading.tsx 파일이 대신 보여졌음
  // BUT 아래 return 절에서 어느 데이터도 fetching 하지 않기 때문에 Suspense의 fallback이 대신 등장.
  return (
    <>
      <Suspense fallback={<h3>Loading Movie Info</h3>}>
        <MovieInfoDetail id={id} />
      </Suspense>
      <Suspense fallback={<h3>Loading Movie Videos</h3>}>
        <MovieVideo id={id} />
      </Suspense>
    </>
  );
}

// === 동적 라우팅 ===
// [] 대괄호 안에 넣어주면 동적 라우팅으로 인식
// 라우팅 정보 자체가 props에 담김
// ex. /movie/333 => { params: { id: '333' }, searchParams: {} }

// === parallel data fetching ===
// await은 기본적으로 동기처리라서 비동기처리를 해줘야 함
// 방법 1 : Promise.all();
// Ex. const [num1, num2] = await Promise.all([num1(), num2()]);
// 방법 2. <Suspense>
// 각 데이터를 컴포넌트로 분리 -> React에 있는 Suspense를 이용
// 이때 fallback 속성으로 컴포넌트가 loading 중인 때에 보여줄 화면을 구현

// === 에러 발생 시 ===
// error.tsx 생성 + "use client"
