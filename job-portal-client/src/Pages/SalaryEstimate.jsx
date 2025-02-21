import React, { useState,useEffect } from "react";


const SalaryEstimate = () => {

    const [searchText, setSearchText] = useState("")
    const [salary,setSalary] = useState([])

    useEffect ( () => {
        fetch("salary.json").then(res => res.json()).then(data => setSalary(data))
    }, [searchText])

    const handleSearch = () =>{
            const filter = salary.filter((job) =>
              job.title.toLowerCase().includes(searchText.toLowerCase())
            )
            console.log(filter)
            setSalary(filter)
    }

    console.log(searchText)

  return (
    <div className="max-w-10xl w-full mx-auto xl:px-24 px-4">
        <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-center text-2xl font-semibold text-blue-500">Estimate Salary</h1>
            <p className='text-sm text-center'>Estimate salary ranges for job listings based on industry standards and market trends.</p>

            {/* Search Box */}
        <div className="search-box p-5 text-center mb-2">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:w-6/12 mb-3 w-full"
            onChange={e => setSearchText(e.target.value)}/>
          <button
            className="bg-blue-500 text-white font-semibold px-8 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            onClick={(handleSearch)}>
            Search
          </button>
        </div>

        {/* show data*/}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center">
            {
                salary.map((data) => (
                    <div key={data.id} className="shadow px-4 py-8 ">
                        <h4 className="font-semibold text-xl">{data.title}</h4>
                        <p className="font-semibold text-medium text-blue-800">{data.salary}</p> 
                        <div className="flex flex-wrap gap-4">
                            <a href="/" className="underline">{data.status}</a>
                            <a href="/" className="underline">{data.skills}</a>
                        </div>   
                    </div>
                ))
            }
        </div>
    </div>
        
        
    </div>
  )
}

export default SalaryEstimate