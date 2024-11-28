


import { useSelector } from "react-redux"
import uselatestMovies from "../hooks/uselatestMovies"
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies"
import useTrendingTvShows from "../hooks/useTrendingTvShows"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import GPTsearch from "./GPTsearch"



const Browse = () => {

   const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

 useNowPlayingMovies()
 uselatestMovies()
 useTrendingTvShows()

  return (
    <div>
      <Header/>

      {showGptSearch ?(
        <GPTsearch/>
      ):(
        <>
        <MainContainer/>
       <SecondaryContainer/>
       </>
      )}
      
    </div>
  )
}

export default Browse