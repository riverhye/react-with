import { API_URL } from '../app/(home)/page';

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const resposne = await fetch(`${API_URL}/${id}/videos`);
  return await resposne.json();
}

export default async function MovieVideo({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
