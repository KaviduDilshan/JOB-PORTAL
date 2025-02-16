import { useState } from "react";
import { useForm } from "react-hook-form"
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
  const[selectedOption,setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    data.skills = selectedOption;
    console.log(data)
  }

  const options = [
    {value: "JavaScript", label:"JavaScript"},
    {value: "C++", label:"C++"},
    {value: "HTML", label:"HTML"},
    {value: "CSS", label:"CSS"},
    {value: "React", label:"React"},
    {value: "Node", label:"Node"},
    {value: "MongoDB", label:"MongoDB"},
    {value: "Redux", label:"Redux"},
  ]

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>

        {/*form*/}
        <div className='bg-[#E1E1E1] py-10 px-4 lg:px-16'>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/*first row*/}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="lg:w-1/2 w-full">
                    <lable className="block mb-2 text-lg">Job Title</lable>
                    <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")} className="block w-full 
                    flex-1 border-1 bg-white-400 py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm
                    sm:leading-6"/>
                  </div>

                  <div className="lg:w-1/2 w-full">
                    <lable className="block mb-2 text-lg">Company Name</lable>
                    <input type="text" placeholder="ex: Microsoft" {...register("CompanyName")} className="block w-full 
                    flex-1 border-1 bg-white-400 py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm
                    sm:leading-6"/>
                  </div>
              </div>

              {/*second row*/}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="lg:w-1/2 w-full">
                    <lable className="block mb-2 text-lg">Minimum Salary</lable>
                    <input type="text" placeholder="$20k" {...register("minPrice")} className="block w-full 
                    flex-1 border-1 bg-white-400 py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm
                    sm:leading-6"/>
                  </div>

                  <div className="lg:w-1/2 w-full">
                    <lable className="block mb-2 text-lg">Maximum Salary</lable>
                    <input type="text" placeholder="$120k" {...register("maxprice")} className="block w-full 
                    flex-1 border-1 bg-white-400 py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm
                    sm:leading-6"/>
                  </div>
              </div>

              {/*third row*/}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="lg:w-1/2 w-full">
                    <lable className="block mb-2 text-lg">Salary type</lable>
                    <select {...register("salaryType")} className="create-job-input">
                    <option value="">Choose your salary</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                    </select>
                  </div>

                  <div className="lg:w-1/2 w-full">
                    <lable className="block mb-2 text-lg">Job Location</lable>
                    <input type="text" placeholder="Ex:New York" {...register("joblocation")} className="block w-full 
                    flex-1 border-1 bg-white-400 py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm
                    sm:leading-6"/>
                  </div>
              </div>

              {/*four row*/}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="lg:w-1/2 w-full">
                    <lable className="block mb-2 text-lg">Job Posting Date</lable>
                    <input type="date" placeholder="Ex:2023-10-28" {...register("postingDate")} className="block w-full 
                    flex-1 border-1 bg-white-400 py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm
                    sm:leading-6"/>
                  </div>
                    <div className="lg:w-1/2 w-full">
                    <lable className="block mb-2 text-lg">Experience Level</lable>
                    <select {...register("experienceLevel")} className="create-job-input">
                    <option value="">Choose your Experience</option>
                    <option value="NonExperience">Hourly</option>
                    <option value="Internship">Internship</option>
                    <option value="Work remotel">Work remotel</option>
                    </select>
                  </div>
              </div>

              {/*fifth row*/}
              <div>
              <lable className="block mb-2 text-lg">Required Skill Sets</lable>
              <CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="create-job-input py-4"/>
              </div>

              {/*six row*/}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Company Logo</label>
                <input
                  type="url"
                  placeholder="Paste your company logo URL: https://weshare.com/img1"
                  {...register("companyLogo")}
                  className="block w-full flex-1 border border-gray-300 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring focus:border-blue-300 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Employment Type</label>
                <select {...register("employmentType")} className="create-job-input block w-full border border-gray-300 py-1.5 px-3 text-gray-900 focus:outline-none focus:ring focus:border-blue-300 sm:text-sm sm:leading-6">
                  <option value="">Choose Employment Type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
            </div>


              {/*seven row*/}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <lable className="block mb-2 text-lg">Job Description</lable>
              <textarea className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700" 
              rows={6}
              defaultValue={"We are seeking a [Position Name] to join our team. The ideal candidate will be responsible for [brief overview of key responsibilities]. You will work closely with [team or department] to achieve [specific goals or tasks]."}
              placeholder="Job Description"
              {...register("description")}/>
              </div>
              
              <div className="w-full">
              <lable className="block mb-2 text-lg">Job Posted by</lable>
              <input type="email" placeholder="your email" {...register("postedby")} className="block w-full 
              flex-1 border-1 bg-white-400 py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm
              sm:leading-6" />
              </div>
                
                <input type="submit" className="block mt-12 bg-blue-500 text-white font-semibold px-8 py-2 rounded-sm"/>

            </form>

        </div>
    </div>
  )
}

export default CreateJob