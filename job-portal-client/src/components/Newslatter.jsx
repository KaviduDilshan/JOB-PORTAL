import React from 'react'
import {FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"

const Newslatter = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'><FaEnvelopeOpenText/>Email me for jobs</h3>

            <p className='text-black/75 text-base mb-4'>Looking for job opportunities? Send me an email to get information 
            about available job listings and opportunities. Stay updated with the latest positions that match your skills and 
            interests. </p>

            <div className='w-full space-y-4'>
                <input type='email' name='email' id='email' placeholder='"name@email.com' className='w-full block py-2
                pl-3  border focus:outline-none'/>
                <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3  border focus:outline-none
                bg-blue-700  rounded-sm text-white cursor-pointer fontse'/>

            </div>
        </div>

        <div className='mt20'>
            <h3 className='text-lg font-bold md-7 flex items-center gap-2'><FaRocket/>Get notice Faster</h3>
            <p className='text-black/75 text-base mb-8'>Want to stand out in the job market? Learn tips and strategies 
            to get noticed by employers faster and increase your chances of landing the right job </p>

            <div className='w-full space-y-4'>
                <input type="submit" value={"Upload your resum"} className='w-full block py-2 pl-3  border focus:outline-none
                bg-blue-700 rounded-sm text-white cursor-pointer fontse'/>

            </div>
        </div>
    </div>
  )
}

export default Newslatter