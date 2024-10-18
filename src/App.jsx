import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Playlist from './pages/Playlist'
import Layki from './pages/Layki'
import MainLayout from './layout/MainLayout'
import Data from './pages/Data'
import Eror from './pages/Eror'
function App() {
  let CLIENT_ID = "bccf8c1a5c48453287736a546c4c48d5";
let CLIENT_SECRET = "4b3db2d586414d4287e00691aeaf7ce1";
 const getToken = async () => {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(CLIENT_ID + ":" + CLIENT_SECRET)}`,
      },
      body: "grant_type=client_credentials",
    });

    const auth = await response.json();
    localStorage.setItem("access_token",`${auth.token_type} ${auth.access_token}`
    );
    console.log(auth);
  } catch (err) {
    console.log("salom",err);
  }
};

getToken();

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