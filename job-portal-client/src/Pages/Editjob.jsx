import { Link, useLoaderData, useParams } from 'react-router-dom';
import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

function Editjob() {
  const { id } = useParams();
  const {
    _id,
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    jobLocation,
    postingDate,
    salaryType,
    experienceLevel,
    companyLogo,
    employmentType,
    description,
    postedby,
    skills,
  } = useLoaderData();

      const [selectedOption, setSelectedOption] = useState(null);
      const {
        register,
        handleSubmit,reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        data.skills = selectedOption;
        //console.log(data);
        fetch(`http://localhost:3000/update-job/${id}`,{
          method:"PATCH",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(data)
        }).then((res) => res.json()).then((result) =>{
          console.log(result);
          if(result.acknowledged === true){
            alert("Job updated Successfully!")
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
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        {/* Job Title & Company Name */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-lg font-medium text-gray-700'>Job Title</label>
            <input type='text' defaultValue={jobTitle} {...register('jobTitle')} placeholder='Ex: Web Developer' 
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300' />
          </div>
          <div>
            <label className='block text-lg font-medium text-gray-700'>Company Name</label>
            <input type='text' defaultValue={companyName} {...register('companyName')} placeholder='Ex: Microsoft' 
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300' />
          </div>
        </div>
        
        {/* Company Logo */}
        <div>
          <label className='block text-lg font-medium text-gray-700'>Company Logo URL</label>
          <input type='text' defaultValue={companyLogo} {...register('companyLogo')} placeholder='Logo URL' 
            className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300' />   
        </div>
        
        {/* Salary */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-lg font-medium text-gray-700'>Minimum Salary</label>
            <input type='number' defaultValue={minPrice} {...register('minPrice')} 
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300' />
          </div>
          <div>
            <label className='block text-lg font-medium text-gray-700'>Maximum Salary</label>
            <input type='number' defaultValue={maxPrice} {...register('maxPrice')}  
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300' />
          </div>
        </div>
        
        {/* Job Details */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-lg font-medium text-gray-700'>Salary Type</label>
            <select defaultValue={salaryType} {...register('salaryType')} className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300'>
              <option value=''>Choose Salary Type</option>
              <option value='Hourly'>Hourly</option>
              <option value='Monthly'>Monthly</option>
              <option value='Yearly'>Yearly</option>
            </select>
          </div>
          <div>
            <label className='block text-lg font-medium text-gray-700'>Job Location</label>
            <input type='text' defaultValue={jobLocation} {...register('jobLocation')} placeholder='Ex: New York' 
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300' />
          </div>
        </div>
        
        {/* Posting Date */}
        <div>
          <label className='block text-lg font-medium text-gray-700'>Posting Date</label>
          <input type='date' defaultValue={postingDate} {...register('postingDate')} 
            className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300' />
        </div>
        
        {/* Experience Level & Employment Type */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-lg font-medium text-gray-700'>Experience Level</label>
            <select defaultValue={experienceLevel} {...register('experienceLevel')} className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300'>
              <option value=''>Choose Experience Level</option>
              <option value='Any experience'>Any experience</option>
              <option value='Internship'>Internship</option>
              <option value='work remotely'>Work remotely</option>
            </select>
          </div>
          <div>
            <label className='block text-lg font-medium text-gray-700'>Employment Type</label>
            <select defaultValue={employmentType} {...register('employmentType')} className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300'>
              <option value=''>Choose Employment Type</option>
              <option value='Full-time'>Full-time</option>
              <option value='Part-time'>Part-time</option>
              <option value='Temporary'>Temporary</option>
            </select>
          </div>
        </div>

        {/* Skills Selection */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Required Skills</label>
          <CreatableSelect
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
            isMulti
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300"
          />
        </div>
        
        {/* Job Description */}
        <div>
          <label className='block text-lg font-medium text-gray-700'>Job Description</label>
          <textarea rows={5} defaultValue={description} {...register('description')} placeholder='Describe the job role and responsibilities'
            className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300'></textarea>
        </div>

        {/* job posted by */}
       
          <div>
            <label className='block text-lg font-medium text-gray-700'>Job Posted by</label>
            <input type='email' defaultValue={postedby} {...register('postedby')} placeholder='your email' 
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-300' />
          </div>
        
        
        {/* Submit Button */}
        <div className='text-center'>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md'>Post Job</button>
        </div>
      </form>
    </div>
  )
}

export default Editjob