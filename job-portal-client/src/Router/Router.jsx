import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob"
import Myjobs from "../Pages/Myjobs"
import SalaryEstimate from "../Pages/SalaryEstimate"
import Editjob from "../Pages/Editjob"


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
        },
        {
          path : "/salary",
          element:<SalaryEstimate/> 
        },
        {
          path: "/edit-jobs/:id",
          element: <Editjob />,
          loader: ({ params }) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
        }
        
      ]
    },
  ]);

  export default router;