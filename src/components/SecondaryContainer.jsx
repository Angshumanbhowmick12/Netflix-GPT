import { useSelector } from "react-redux"
import MovieList from "./MovieList"



const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)

  

  
  

  return (

    movies.nowPlayingMovies &&(
    <div className="bg-black w-screen">
      <div className="mt-0 md:-mt-36 pl-4 md:pl-10 relative z-20 lg:-mt-60 "> 
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending Movies"} movies={movies.latestMovies}/>
        <MovieList title={"Trending TV Shows"} movies={movies.trendingTvShows}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer