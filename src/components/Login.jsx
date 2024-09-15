import Header from "./Header"
import { useState } from "react"


const Login = () => {

    const [isSigninFrom, setIsSigninFrom] = useState(true)
    
    const handlebuttonClick=()=>{

    }

    const toggleSignInFrom=()=>{
        setIsSigninFrom(!isSigninFrom)
    }



  return (
    <div>
        <Header/>
        <div className=" absolute">
            
            <img className="h-screen w-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg" alt="" />
        </div>

        <form 
        onSubmit={(e)=> e.preventDefault()}
        className=" w-9/12 lg:w-3/12 md:w-6/12 absolute px-14 pt-10 pb-44 bg-black mx-auto right-0 left-0 text-white my-24 bg-opacity-75 z-10 rounded-lg">
            <h1 className="font-bold m-auto text-3xl py-4 ">{isSigninFrom ? "Sign In" : "Sign Up"}</h1>
            {
                !isSigninFrom && <input 
                className="m-2 p-2 w-full my-3 bg-slate-900 bg-opacity-60 border rounded-sm" 
                type="text" 
                placeholder="name" />
            }
            <input 
            className="m-2 p-2 w-full my-3 bg-slate-900 bg-opacity-60 border rounded-sm" 
            type="text" 
            placeholder="Email or mobile number" />
            <input 
            className="m-2 w-full p-2 my-3 bg-slate-900 bg-opacity-60 border rounded-sm" 
            type="text" 
            placeholder="Password" />
            <button 
            className="m-2 w-full p-2 bg-red-700 rounded-sm font-bold"
            onClick={handlebuttonClick}>
            {isSigninFrom ? "Sign In" : "Sign Up"}
            </button>
            {isSigninFrom && <div className="m-2 p-1"> <input type="checkbox" className=" cursor-pointer"/> Remember me</div>}
            <p className="m-2 cursor-pointer" onClick={toggleSignInFrom}
            >
                {isSigninFrom ? "New to Netflix? Sign Up Now":"Already registered? Sign In Now."}
            </p>
        </form>
    </div>
  )
}

export default Login