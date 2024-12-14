import {  useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react"
import genAI from "../utils/GeminiAi"
import { API_OPTIONS } from "../utils/constant"
import { addMovieResults } from "../utils/gptSlice"



const GPTsearchbar = () => {

  const dispatch=useDispatch();

const langKey=useSelector((store)=> store.config.lang)

const searchText=useRef(null)

const searchMoviesTMBD=async(movie)=>{
  const data= await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)

  const json=await data.json();

  return json.results
}

const handleSearchClick= async()=>{
  console.log(searchText.current.value)

  

  const model= genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
  const gptQuery =
  "Act as a Movie Recommendation system and suggest some movies for the query : " +
  searchText.current.value +
  ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
 
  const gptResult=await model.generateContent(gptQuery)


  const gptMovies= gptResult.response.text().split(",")
  
  //console.log(gptMovies);

  // for each movie i will search from TMDB API 
  
  const promiseArray=gptMovies.map(movie=> searchMoviesTMBD(movie))
  //[Promise, Promise, Promise, Promise, Promise]

  const tmdbResults= await Promise.all(promiseArray)
  // its resolve the all array of promise

  //console.log(tmdbResults);

  dispatch(
    addMovieResults({ movieNames:gptMovies,movieResults:tmdbResults})
  )
  
  
}

  return (
    <div className="pt-[35%] md:pt-[20%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg" 
      onSubmit={(e)=> e.preventDefault()}>
        <input 
        ref={searchText}
        type="text" 
        className="p-4 m-2 col-span-9 rounded-lg"
        placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="text-white bg-red-700 col-span-3 m-4 py-2 px-4 rounded-lg"
        onClick={handleSearchClick}
        >{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GPTsearchbar