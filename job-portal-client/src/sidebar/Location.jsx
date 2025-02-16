import React from 'react'
import InputField from '../components/InputField'; 

const Location = ({handleChange}) => {
  return (
    <div>
        <h1 className='text-lg font-medium mb-2'>Location</h1>

        <div>
            <label className='sidebar-label-container'>
            <input 
            type='radio' 
            name='test' 
            id='test' 
            value="" 
            onChange={handleChange} />
            <span className='checkmark'></span>All
            </label>

            <InputField 
            handleChange={handleChange} 
            value="London" 
            title="London" 
            name="test"/>

            <InputField 
            handleChange={handleChange} 
            value="seattle" 
            title="Seattle" 
            name="test"/>
            
            <InputField 
            handleChange={handleChange} 
            value="madrid" 
            title="Madrid" 
            name="test"/>

            <InputField 
            handleChange={handleChange} 
            value="boston" 
            title="Boston" 
            name="test"/>
            

        </div>
    </div>
  )
}

export default Location