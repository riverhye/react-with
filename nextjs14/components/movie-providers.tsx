import styles from '../styles/movie-providers.module.css';
import { API_URL } from '../app/(home)/page';

async function getProviders(id: string) {
  try {
    const res = await fetch(`${API_URL}/${id}/providers`);
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function MovieProviders({ id }: { id: string }) {
  const providers = await getProviders(id);
  console.log(providers);

  return (
    <div>
      {/* null이 아닐 때 + 객체를 배열로 변환 후 데이터 바인딩 */}
      {/* {providers !== null &&
        providers.map((provider) => (
          <div>
            <img src={provider.logo_path} />
          </div>
        ))} */}
    </div>
  );
}
