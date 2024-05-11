import { API_URL } from '../app/(home)/page';
import styles from '../styles/movie-video.module.css';

async function getVideos(id: string) {
  const resposne = await fetch(`${API_URL}/${id}/videos`);
  return resposne.json();
}

interface IVideo {
  id: number;
  key: string;
  name: string;
}

export default async function MovieVideo({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video: IVideo) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
