import { useEffect, useState } from "react"

import { API_OPTIONS } from "../utils/constant"

const useMovieDetails = (movieid) => {
    const[movieDetails,setMovieDetails]=useState(null)

    useEffect(() => {
        getMovieDetails()
      }, [movieid])

    const getMovieDetails= async()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/'+movieid,API_OPTIONS)
  
      const Json=await data.json()  
      console.log(Json)
      setMovieDetails(Json)

    
    }

    return movieDetails


   
    
}

export default useMovieDetails


