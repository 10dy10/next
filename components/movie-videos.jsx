import { API_URL } from '../app/(home)/page';
import classes from '../styles/movie-video.module.css';

const getVideo = async (id) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json()
}

export default async function MovieVideos({id}) {
    const videos = await getVideo(id)
    return <div className={classes.container}>
        {videos.map(video =>
            <iframe
                key={video.id}
                src={`https://youtube.com/embed/${video.key}`}
                frameborder="0"
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        )}
    </div>
}