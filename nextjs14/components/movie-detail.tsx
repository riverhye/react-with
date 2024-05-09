import MovieInfo from './movie-info';
import MovieLink from './movie-link';

export default async function MovieInfoDetail({ id }: { id: string }) {
  return (
    <MovieInfo id={id}>
      <MovieLink id={id} />
    </MovieInfo>
  );
}
