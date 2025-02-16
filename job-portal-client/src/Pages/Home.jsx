import Banner from "../components/Banner";
import { useEffect, useState } from 'react'
import Jobs from "../Pages/Jobs";
import Card from "../components/Card";
import Sidebar from "../sidebar/Sidebar";
import Newslatter from "../components/Newslatter";



const Home = () => {
  const [selectedCategory,SetselectedCategory] = useState(null);
  const [jobs,setJobs] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [currentPge,setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() =>  {
    setIsLoading(true);
    fetch("jobs.json").then(res => res.json()).then(data => {
      //console.log(data)
      setJobs(data);
      setIsLoading(false);
    })
  },[])

  console.log(jobs)

  const[query,setQuery] = useState("");
    const handleInputChange= (event) => {
        setQuery(event.target.value)
    }

    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);
    
    const handleChange = (event) => {
      SetselectedCategory(event.target.value)
    }

    const handleClick = (event) => {
      SetselectedCategory(event.target.value)
    }

    const calculatePageRange = () => {
      const startIndex = (currentPge -1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage ;
      return {startIndex,endIndex};
    }
    //function for the next page
    const nextPage = () => {
      if(currentPge < Math.ceil(filteredItems.length / itemsPerPage)){
        setCurrentPage(currentPge + 1);
      }
    }

    //funtion for prvius page
    const prevPge = () => {
      if(currentPge > 1){
        setCurrentPage(currentPge - 1)
      }
    }
    const filteredData = (jobs,selected,query) => {
      let filteredJobs = jobs;

      //filtering input items
      if(query){
        filteredJobs = filteredItems;
      }

      //category filtering
      if(selected){
        filteredJobs = filteredJobs.filter(
          ({
            jobLocation,
            maxPrice,
            experienceLevel,
            salaryType,
            employmentType,
            postingDate
          }) => 
          jobLocation.toLocaleLowerCase() === selected.toLocaleLowerCase() ||
          parseInt(maxPrice)  <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLocaleLowerCase() === selected.toLocaleLowerCase() ||
          experienceLevel.toLocaleLowerCase() === selected.toLocaleLowerCase() ||
          employmentType.toLocaleLowerCase() === selected.toLocaleLowerCase() 
        );
        console.log(filteredJobs);
      }

      //slice the data based on current page
      const {startIndex,endIndex} =calculatePageRange();
      filteredJobs = filteredJobs.slice(startIndex,endIndex);

      return filteredJobs.map((data,i) => <Card key ={i} data={data}/>)
    }

    const result = filteredData(jobs,selectedCategory,query);


  return (
    <div>
      <Banner query={query}handleInputChange={handleInputChange}/>

      {/* main contain */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
         
        {/* left */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
        </div>
        
       {/* job cards */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {
            isLoading ? (<p className="font-medium">Loading...</p>) : result.length > 0 ? (<Jobs result={result}/>) : <>
            <h3 className="text-lg font-bold mb-2">{result.length}Jobs</h3>
            <p>No data found</p>
            </>

          }

          {/* pageination */}

          {
              result.length > 0 ?(
                <div className="flex justify-center mt-4 space-x-8">
                  <button onClick={prevPge} disabled= {currentPge === 1}className="hover:underline">Previous</button>
                  <span>Page {currentPge} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                  <button onClick={nextPage} disabled={currentPge === Math.ceil
                    (filteredItems.length/itemsPerPage)} className="hover:underline">Next</button>                   
                </div>
              ) : ""
          }

        </div>
        
        {/* right */}
        <div className="bg-white p-4 rounded"><Newslatter/></div>

      </div>
    </div>
  )
}

export default Home;