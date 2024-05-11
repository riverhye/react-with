import MovieProviders from '../../../../../components/movie-providers';
import { IParams } from '../page';

export default function MovieProvidersPage({ params: { id } }: IParams) {
  return <MovieProviders id={id} />;
}
