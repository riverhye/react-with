import { API_URL } from '../app/(home)/page';
import styles from '../styles/movie-info.module.css';

async function getMovies(id: string) {
  // return fetch(url).then(res=>res.json());
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const resposne = await fetch(`${API_URL}/${id}`);
  const json = await resposne.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovies(id);
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3 className={styles.info}>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p className={styles.info}>{movie.overview}</p>
        <a className={styles.info} href={movie.homepage} target={'_blank'}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
