import classes from '../styles/movie-info.module.css';

export default function movieSimilar ({title, poster_path, vote_average, overview}) {
    return (
        <div className={classes.container}>
            <img className={classes.poster} src={poster_path} alt={title}/>
            <div className={classes.info}>
                <h1 className={classes.title}>{title}</h1>
                <h3>⭐{vote_average}</h3>
                <p>{overview}</p>
            </div>
        </div>
    )
}