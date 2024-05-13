import MoiveSimilar from '../../../../../components/movie-similar';
import { IParams } from '../page';

export default async function MovieSimilarPage({ params: { id } }: IParams) {
  return <MoiveSimilar id={id} />;
}
