


import uselatestMovies from "../hooks/uselatestMovies"
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies"
import useTrendingTvShows from "../hooks/useTrendingTvShows"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"



const Browse = () => {

 useNowPlayingMovies()
 uselatestMovies()
 useTrendingTvShows()

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse