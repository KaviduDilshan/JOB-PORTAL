import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob"
import Myjobs from "../Pages/Myjobs"


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {path:"/",element: <Home/>},
        {
          path : "/post-job",
          element:<CreateJob/> 
        },
        {
          path : "/my-job",
          element:<Myjobs/> 
        }
      ]
    },
  ]);

  export default router;