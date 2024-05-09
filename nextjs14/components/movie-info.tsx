import { ReactNode } from 'react';
import { API_URL } from '../app/(home)/page';
import styles from '../styles/movie-info.module.css';

export async function getMovies(id: string) {
  const resposne = await fetch(`${API_URL}/${id}`);
  const json = resposne.json();
  return json;
}

export default async function MovieInfo({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  const movie = await getMovies(id);
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3 className={styles.info}>⭐️ {movie.vote_average.toFixed()}</h3>
        <p className={styles.info}>{movie.overview}</p>
        {children}
      </div>
    </div>
  );
}
