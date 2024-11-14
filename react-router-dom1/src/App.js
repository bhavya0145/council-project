import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import About from './components/About.js'
import User from './components/User.js'
import style from "./style.css"
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
function App() {
  const router = createBrowserRouter ([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:"/user/:username",
      element:<><Navbar/><User/></>
    }
  ])
  return (
    <>
    <div>helollo</div>
       <RouterProvider router={router}/>     
    </>
  );
}

export default App;
