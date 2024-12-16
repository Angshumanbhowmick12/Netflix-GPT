


import { useSelector } from "react-redux"
import uselatestMovies from "../hooks/uselatestMovies"
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies"
import useTrendingTvShows from "../hooks/useTrendingTvShows"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import GPTsearch from "./GPTsearch"
import Footer from "./Footer"



const Browse = () => {

   const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

 useNowPlayingMovies()
 uselatestMovies()
 useTrendingTvShows()

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex-grow">
      {showGptSearch ?(
        <GPTsearch/>
      ):(
        <>
        <MainContainer/>
       <SecondaryContainer/>
       </>
      )}
    </div>
     <Footer/>
    
      
    </div>
  )
}

export default Browse