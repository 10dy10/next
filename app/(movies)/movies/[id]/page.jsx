import { Suspense } from 'react';
import Link from "next/link";
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';
import {getMovie} from '../../../../components/movie-info';

export async function generateMetadata ({params: {id}}) {
    const movie = await getMovie(id)
    return {
        title: movie.title
    }
}

export default async function MovieDetail ({params: {id}}) {

    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>            
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={id}/>
        </Suspense>
    </div>
}
