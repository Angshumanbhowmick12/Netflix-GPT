import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import MovieInfo from "./MovieInfo"



const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>,
            children: [
                {
                  path: 'movie/:movieid',
                  element: <MovieInfo />,
                },
              ],
            
        },
        {
            path: '/movie/:movieid', // Add this as a global route
            element: <MovieInfo />,
        },
    ])
  return (
    <div>
        
        <RouterProvider router={appRouter} />
        
        
    </div>
  )
}

export default Body