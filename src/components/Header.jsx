import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BG_URL, LOGO_URL } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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

  return (
    <>
      {user ? (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
          <img
            className="w-44 mx-auto md:mx-0"
            src={LOGO_URL}
            alt="logo"
          />
          <div className="flex">
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
