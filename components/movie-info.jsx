import { API_URL } from '../app/(home)/page';
import classes from '../styles/movie-info.module.css';
import Link from "next/link";

export async function getMovie (id) {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch(`${API_URL}/${id}`);
    return response.json()
}

export default async function MovieInfo({id}) {
    const movie = await getMovie(id)
    return <div className={classes.container}>
        <img className={classes.poster} src={movie.poster_path} alt={movie.title}/>
        <div className={classes.info}>
            <h1 className={classes.title}>{movie.title}</h1>
            <h3>⭐{movie.vote_average.toFixed(1)}</h3>
            <p>{movie.overview}</p>
            <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
            <Link href={`/movies/${id}/similar`}>similar movie</Link>
        </div>
    </div>
}