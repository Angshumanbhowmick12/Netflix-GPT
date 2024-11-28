import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BG_URL, LOGO_URL,SUPPORTED_LANGUAGES } from "../utils/constant";
import { Link } from "react-router-dom";
import { toggleSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

 const handleSignOut=()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
      navigate('/error')
  });
 }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName,photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL:photoURL
          })
        );
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

const handleSearch=()=>{
  dispatch(toggleSearch())
}

const handleChangeLanguage=(e)=>{
  dispatch(changeLanguage(e.target.value))
}

  return (
    <>
      {user ? (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
          <div className="flex">
          <img
            className="w-44 mx-auto md:mx-0"
            src={LOGO_URL}
            alt="logo"
          />

          <div className="text-white m-4 p-2 font-mono">
         <Link className="p-3">Home</Link>
         <Link className="p-3">TV Shows</Link>
         <Link className="p-3">Movies</Link>
         <Link className="p-3">New&Populer</Link>
         
        </div>
        </div>
          <div className="flex">

            
            
            <button className="text-white p-2 bg-red-700 m-4 rounded-md sm:my-6"
            onClick={handleSearch}
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>

           {showGptSearch&& <select className="m-4 p-2 sm:my-6"
            onChange={handleChangeLanguage}
           >
              {SUPPORTED_LANGUAGES.map((lang)=>(
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
           }
            <img 
              className="w-12 h-12 mt-3"
              src={user?.photoURL}
              alt="user"
            />

            <button 
            className="p-2 m-1 font-bold text-white"
            onClick={handleSignOut}
            >SignOut</button>
          </div>
        </div>
      ) : (
        <div className="absolute w-screen h-screen bg-black bg-opacity-50 z-10">
          <img
            className="w-36 lg:w-48 my-2 lg:mx-72 md:w-28 md:mx-4"
            src={BG_URL}
            alt="logo"
          />
        </div>
      )}
    </>
  );
};

export default Header;
