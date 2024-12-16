
import { useState } from 'react'
import VideoBackground from './VideoBackground'
import { useParams } from 'react-router-dom'
import { useEffect} from "react"


import { API_OPTIONS, IMG_CDN_URL } from "../utils/constant"

const MovieInfo = () => {

  const {movieid}=useParams()

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


  
 return (
    <div className='bg-black text-white lg:w-screen' >
      <div className='m-4'>
        <VideoBackground movieId={movieid} />
      </div>
      <div className=' bg-black w-screen'>
      {movieDetails && (
        <div className="p-4 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{movieDetails.title}</h1>
          <p className="text-white mb-4">{movieDetails.overview}</p>
          <p className="text-white">
            Release Date: {movieDetails.release_date}
          </p>
          <p className="text-white">Rating: {movieDetails.vote_average}/10⭐</p>
          <img
            src={IMG_CDN_URL +`${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="mt-6 rounded-md shadow-lg w-screen"
          />
        </div>
      )}
      </div>
      
    </div>
  )
}

export default MovieInfo