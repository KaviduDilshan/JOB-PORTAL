import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    //console.log(data);
    fetch("http://localhost:3000/post-job",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    }).then((res) => res.json()).then((result) =>{
      console.log(result);
      if(result.acknowledge = true){
        alert("Job Posted Successfully!")
      }
      reset()
    })
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg'>
      <h2 className='text-3xl font-semibold text-center text-gray-800 mb-6'>Create Job Listing</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Job Title & Company Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Job Title</label>
            <input type="text" defaultValue="Web Developer" {...register("jobTitle")} 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300" />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Company Name</label>
            <input type="text" placeholder="Ex: Microsoft" {...register("CompanyName")} 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300" />
          </div>
        </div>

        {/* Salary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Minimum Salary</label>
            <input type="text" placeholder="$20k" {...register("minPrice")} 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300" />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Maximum Salary</label>
            <input type="text" placeholder="$120k" {...register("maxPrice")} 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300" />
          </div>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Salary Type</label>
            <select {...register("salaryType")} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300">
              <option value="">Choose Salary Type</option>
              <option value="Hourly">Hourly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Job Location</label>
            <input type="text" placeholder="Ex: New York" {...register("jobLocation")} 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300" />
          </div>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Required Skills</label>
          <CreatableSelect
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            isMulti
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Job Description</label>
          <textarea rows={5} {...register("description")} 
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300"
            placeholder="Describe the job role and responsibilities">
          </textarea>
        </div>

        {/* Contact Email */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Job Posted By (Email)</label>
          <input type="email" placeholder="your email" {...register("postedBy")} 
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300" />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md">Post Job</button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
