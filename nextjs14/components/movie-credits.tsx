import { API_URL } from '../app/(home)/page';
import styles from '../styles/movie-credits.module.css';
import MovieInfo, { getMovies } from './movie-info';

export async function getCredits(id: string) {
  const res = await fetch(`${API_URL}/${id}/credits`);
  return res.json();
}

export default async function MovieCredit({ id }: { id: string }) {
  const credits = await getCredits(id);
  const movie = await getMovies(id);

  return (
    <>
      <MovieInfo id={id} children />
      <div className={styles.container}>
        {credits.map((credit) => (
          <div className={styles.item}>
            <img src={credit.profile_path} />
            <div>
              <h3>{credit.original_name}</h3>
              <p> {credit.character && `as ${credit.character}`}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
