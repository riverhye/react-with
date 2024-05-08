import { API_URL } from '../app/(home)/page';
import styles from '../styles/movie-credits.module.css';
import { getMovies } from './movie-info';

export async function getCredits(id: string) {
  const res = await fetch(`${API_URL}/${id}/credits`);
  return res.json();
}

export default async function MovieCredit({ id }: { id: string }) {
  const credits = await getCredits(id);
  const movie = await getMovies(id);

  return (
    <>
      <div className={styles.movieContainer}>
        <img className={styles.poster} src={movie.poster_path} />
        <div>
          <h3 className={styles.title}>Credits of</h3>
          <h2 className={styles.title}>{movie.title}</h2>
        </div>
      </div>
      <div className={styles.container}>
        {credits.map((credit) => (
          <div>
            <img src={credit.profile_path} />
            <h3>{credit.original_name}</h3>
            <p> as {credit.character}</p>
          </div>
        ))}
      </div>
    </>
  );
}
