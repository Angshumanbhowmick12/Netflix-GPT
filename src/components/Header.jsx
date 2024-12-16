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
import { useState } from "react";

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
const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      {user ? (
        <div className="absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
          {/* Small Device Layout */}
          <div className="flex justify-between items-center w-full md:hidden">
            {/* Logo on Left */}
            <img
              className="w-28"
              src={LOGO_URL}
              alt="logo"
            />

            {/* Centered Buttons for Small Devices */}
            <div className="flex space-x-2">
              <button
                className="text-white px-3 py-2 bg-red-700 rounded-md hover:bg-red-800 text-sm"
                onClick={handleSearch}
              >
                {showGptSearch ? "Home Page" : "GPT Search"}
              </button>
              <button
                className="text-white font-bold hover:text-gray-400 text-sm"
                onClick={handleSignOut}
              >
                SignOut
              </button>
            </div>

            
            <button
              className="text-white text-2xl focus:outline-none"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              ☰
            </button>
          </div>

          {/* Medium and Larger Devices */}
          <div className="hidden md:flex w-full justify-between items-center">
            {/* Logo on Left */}
            <img
              className="w-44"
              src={LOGO_URL}
              alt="logo"
            />

            {/* Navigation Links */}
            <div className="text-white space-x-8 font-mono">
              <Link className="hover:text-gray-400 cursor-pointer">Home</Link>
              <Link className="hover:text-gray-400 cursor-pointer">TV Shows</Link>
              <Link className="hover:text-gray-400 cursor-pointer">Movies</Link>
              <Link className="hover:text-gray-400 cursor-pointer">
                New & Popular
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {showGptSearch && (
                <select
                  className="text-gray-700 px-2 py-1 rounded-md text-sm"
                  onChange={handleChangeLanguage}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}

              <button
                className="text-white px-3 py-2 bg-red-700 rounded-md hover:bg-red-800 text-sm"
                onClick={handleSearch}
              >
                {showGptSearch ? "Home Page" : "GPT Search"}
              </button>

              <img
                className="w-10 h-10 rounded-md object-cover border-2 border-white"
                src={user?.photoURL}
                alt="user"
              />
              <button
                className="text-white font-bold hover:text-gray-400 text-sm"
                onClick={handleSignOut}
              >
                SignOut
              </button>
            </div>
          </div>

          {/* Accordion Navigation Links for Small Devices */}
          {isNavOpen && (
            <div className="flex flex-col md:hidden text-white space-y-2 mt-4">
              <Link className="hover:text-gray-400 cursor-pointer">Home</Link>
              <Link className="hover:text-gray-400 cursor-pointer">TV Shows</Link>
              <Link className="hover:text-gray-400 cursor-pointer">Movies</Link>
              <Link className="hover:text-gray-400 cursor-pointer">
                New & Popular
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="absolute w-screen h-screen bg-black bg-opacity-50 z-10 flex justify-center items-center">
          <img className="w-28 md:w-48" src={BG_URL} alt="logo" />
        </div>
      )}
    </>
  );
};


export default Header;
