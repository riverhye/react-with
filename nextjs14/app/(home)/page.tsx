// === routes group ===
// 소괄호 안에 작성하면 프레임워크가 url로 인식하지 않는다. 그래서 메인 페이지에 필요한 파일들 정리 가능!

import Movie from '../../components/movie';
import styles from '../../styles/home.module.css';

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

export const metadata = {
  title: 'Home',
};

async function getMovies() {
  const resposne = await fetch(API_URL);
  return resposne.json();
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <>
      <div className={styles.container}>
        {movies.map((movie) => (
          <Movie
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </>
  );
}

// === 서버 컴포넌트 ===
// (기존) 브라우저가 API 요청 -> network 탭에서 요청 url 확인 가능 -> 보안 문제로 API 키 등 작성 불가
// BUT 서버에서만 렌더링한다면 상관 무! + metadata도 사용

// 'use client'; // metadata 사용 불가

// import { useEffect, useState } from 'react';

// export default function Movies() {
//   const [movies, setMovies] = useState([]); // 로딩 여부
//   const [isLoading, setIsLoading] = useState(true);

//   const getMovies = async () => {
//     const response = await fetch(
//       'http://nomad-movies.nomadcoders.workers.dev/movies'
//     );
//     const json = await response.json();
//     setMovies(json);
//     setIsLoading(false); // 데이터 세팅
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return <>{isLoading ? 'Loading...' : JSON.stringify(movies)}</>; // 로딩 여부에 따른 값
// }
