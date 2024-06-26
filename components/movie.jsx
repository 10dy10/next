'use client';

import classes from '../styles/movie.module.css';
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Movie ({ title, id, poster_path }) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`)
    }
    return <div className={classes.movie}>
        <img src={poster_path} alt={title} onClick={onClick}/>
        <Link href={`/movies/${id}`}>{title}</Link>
    </div>
}