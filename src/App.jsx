import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Playlist from './pages/Playlist'
import Layki from './pages/Layki'
import MainLayout from './layout/MainLayout'
import Data from './pages/Data'
import Eror from './pages/Eror'
function App() {
  let router=createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/playlist",
          element:<Playlist/>
        },
        {
          path:"/layki",
          element:<Layki/>
        },
        {
          path:"/data",
          element:<Data/>
        },
        {
          path:"*",
          element:<Eror/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App