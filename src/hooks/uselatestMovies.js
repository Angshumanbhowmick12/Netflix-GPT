
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addLatestMovies } from "../utils/moviesSlice"


const uselatestMovies=()=>{

    const dispatch= useDispatch()

    const latestMovies=useSelector((store)=>store.movies?.latestMovies)

   const getlatestMovies= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US',API_OPTIONS)

        const Json=await data.json()

        console.log(Json.results);

        dispatch(addLatestMovies(Json.results))
        
    }


    useEffect(()=>{
        !latestMovies && getlatestMovies()
    },[])
}

export default uselatestMovies;