
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addTvShows } from "../utils/moviesSlice"




const useTrendingTvShows=()=>{

    const dispatch= useDispatch()

    const trendingTvShows=useSelector((store)=>store.movies?.trendingTvShows)

   const getTVShows= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US',API_OPTIONS)

        const Json=await data.json()

        console.log(Json.results);

        dispatch(addTvShows(Json.results))
        
        
    }


    useEffect(()=>{
      !trendingTvShows&&getTVShows()
    },[])
}

export default useTrendingTvShows;