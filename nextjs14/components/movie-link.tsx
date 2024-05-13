import { IParams } from '../app/(movies)/movies/[id]/page';
import styles from '../styles/movie-info.module.css';
import { getMovies } from './movie-info';

export default async function MovieLink({ id }: { id: string }) {
  const movie = await getMovies(id);
  return (
    <>
      <div>
        <a className={styles.info} href={movie.homepage} target={'_blank'}>
          Homepage &rarr;
        </a>
        <a className={styles.info} href={`/movies/${id}/credits`}>
          Credits &rarr;
        </a>
        <a className={styles.info} href={`/movies/${id}/providers`}>
          Providers &rarr;
        </a>
      </div>
      <a className={styles.info} href={`/movies/${id}/similar`}>
        Similars &rarr;
      </a>
    </>
  );
}
