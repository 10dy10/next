
import Link from "next/link";
import MovieSimilar from '../../../../../components/movie-similar'
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getSimilar = async (id) => {
    const response = await fetch(`${API_URL}/${id}/similar`)
    return response.json();
}

export default async function similar ({params: {id}}) {
    const similar = await getSimilar(id)
    return <div>
        {similar.map(movie => <MovieSimilar key={movie.id} title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average} overview={movie.overview} />)}
    </div>
}