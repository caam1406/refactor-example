import { IMovieProps } from "../interfaces/movieProps.I";
import { MovieCard } from "./MovieCard";

export function Content({movies}: {movies: IMovieProps[]}) {
  return(
  <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>);
}