import { checkValidData } from "../utils/validate"
import Header from "./Header"
import { useRef, useState } from "react"
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"


const Login = () => {

    const [isSigninFrom, setIsSigninFrom] = useState(true)
    const [errorMassege,setErrorMassege]=useState(null)

    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)

    const dispatch=useDispatch()
    
    const handlebuttonClick=()=>{
        const massege = isSigninFrom ? checkValidData(email.current.value,password.current.value): checkValidData(email.current.value,password.current.value,name.current.value)
        setErrorMassege(massege)
        if(massege) return;

        if(!isSigninFrom){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                // Signed up 
             const user = userCredential.user;
            
             updateProfile(user, {
                displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/v2/D5603AQGidLl-I4WhMw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723396917225?e=1732147200&v=beta&t=tdz1QP60ldHr0YkAwY7Zpn9eUSje_LL92P6k-OyGRUI"
              }).then(() => {
                const {uid,email,displayName,photoURL}=auth.currentUser;

                dispatch(addUser({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL
                }))

              }).catch((error) => {
                // An error occurred
                    setErrorMassege(error.message)
              });
             
             
            
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            setErrorMassege( errorCode+ "-" + errorMessage)
    
            });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                console.log(user);
                
    
                })
                 .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    setErrorMassege( errorCode+"-"+errorMessage)
         });

            
        }


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
                !isSigninFrom && <input ref={name}
                className="m-2 p-2 w-full my-3 bg-slate-900 bg-opacity-60 border rounded-sm" 
                type="text" 
                placeholder="name" />
            }
            <input 
            ref={email}
            className="m-2 p-2 w-full my-3 bg-slate-900 bg-opacity-60 border rounded-sm" 
            type="text" 
            placeholder="Email or mobile number" />
            <input 
            ref={password}
            className="m-2 w-full p-2 my-3 bg-slate-900 bg-opacity-60 border rounded-sm" 
            type="password" 
            placeholder="Password" />

            <p className="text-red-500 font-bold text-lg py-2 mx-2">{errorMassege}</p>
        
            
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