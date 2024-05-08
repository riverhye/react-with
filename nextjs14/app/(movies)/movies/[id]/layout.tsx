import { getMovies } from '../../../../components/movie-info';
import { IParams } from './page';

export async function generatedMetadata({ params: { id } }: IParams) {
  const movie = await getMovies(id);
  return {
    title: movie.title,
  };
}

export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
