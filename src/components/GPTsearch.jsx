import { BG_URL} from "../utils/constant"
import GPTmovieSuggestions from "./GPTmovieSuggestions"
import GPTsearchbar from "./GPTsearchbar"


const GPTsearch = () => {
  return (
    <div>
        <div className="fixed -z-10 ">
          <img className="h-screen w-screen object-cover" src={BG_URL} alt="BG" />
        </div>
        <div>
          <GPTsearchbar/>
          <GPTmovieSuggestions/>
        </div>
    </div>
  )
}

export default GPTsearch