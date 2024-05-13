import styles from '../styles/movie-similar.module.css';
import { API_URL } from '../app/(home)/page';
import Link from 'next/link';

async function getSimilar(id: string) {
  const res = await fetch(`${API_URL}/${id}/similar`);
  return res.json();
}

export default async function MoiveSimilar({ id }: { id: string }) {
  const similars = await getSimilar(id);
  return (
    <div className={styles.container}>
      {similars.map((movie) => (
        <Link href={`/movies/${movie.id}`}>
          <div className={styles.item}>
            <img src={movie.poster_path} alt={movie.title} />
            <h3>{movie.title}</h3>
            <span>⭐️ {movie.vote_average.toFixed(1)}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
