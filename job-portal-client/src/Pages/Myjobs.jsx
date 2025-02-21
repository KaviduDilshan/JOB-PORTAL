import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/my-jobs/dilshank404@gmail.com")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data); // Maintain original list
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const handleSearch = () => {
    const filtered = jobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handleEdit = (id) => {
    console.log("Edit job:", id);
    // Implement edit functionality here
  };

  const handleDelete = (id) => {
    console.log("Deleting job:", id);
  
    fetch(`http://localhost:3000/job/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json()) 
      .then((data) => {
        if (data.acknowledged) {
          alert("Job Deleted Successfully!");
          
        } else {
          alert("Failed to delete job.");
        }
      })
      .catch((error) => {
        console.error("Error deleting job:", error);
        alert("An error occurred while deleting the job.");
      });
  };
  

  return (
    <div className="max-w-10xl w-full mx-auto xl:px-24 px-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-center text-2xl font-semibold text-gray-800">
          My Jobs
        </h1>

        {/* Search Box */}
        <div className="search-box p-5 text-center mb-2">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search jobs..."
            className="py-2 px-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:w-6/12 mb-3 w-full"
          />
          <button
            className="bg-blue-500 text-white font-semibold px-8 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Loading Indicator */}
        {isLoading ? (
          <p className="text-center text-gray-600">Loading jobs...</p>
        ) : (
          <section className="py-1">
            <div className="w-full xl:w-full mb-12 xl:mb-0 px-4 mx-auto mt-5">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t px-4 py-3 border-0">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    Job Listings
                  </h3>
                </div>
                <div className="block w-full overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                          No
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                          Job Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                          Company
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                          Location
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                          Salary
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                          Edit
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => (
                          <tr key={index} className="hover:bg-gray-100">
                            <td className="px-6 py-4">{index + 1}</td>
                            <td className="px-6 py-4">{job.jobTitle}</td>
                            <td className="px-6 py-4">{job.companyName}</td>
                            <td className="px-6 py-4">{job.jobLocation}</td>
                            <td className="px-6 py-4">${job.minPrice}-${job.maxPrice}</td>
                            <td className="px-6 py-4">
                              <button
                                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                                onClick={() => handleEdit(job.id)}> <Link to={`/edit-jobs/${job.id}`}/>
                                Edit
                              </button>
                            </td>
                            <td className="px-6 py-4">
                              <button
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                onClick={() => handleDelete(job.id)}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7" className="text-center py-4 text-gray-600">
                            No jobs found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MyJobs;
