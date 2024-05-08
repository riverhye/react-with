import MovieCredit from '../../../../../components/movie-credits';
import { IParams } from '../page';

export default async function Credits({ params: { id } }: IParams) {
  return (
    <div>
      <MovieCredit id={id} />
    </div>
  );
}
