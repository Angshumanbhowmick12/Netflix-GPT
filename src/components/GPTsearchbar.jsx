import {  useSelector } from "react-redux"
import lang from "../utils/languageConstants"


const GPTsearchbar = () => {

const langKey=useSelector((store)=> store.config.lang)

  return (
    <div className="pt-[35%] md:pt-[20%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg" 
      onSubmit={(e)=> e.preventDefault()}>
        <input 
        type="text" 
        className="p-4 m-2 col-span-9 rounded-lg"
        placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="text-white bg-red-700 col-span-3 m-4 py-2 px-4 rounded-lg"
        >{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GPTsearchbar