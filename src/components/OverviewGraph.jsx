import React from 'react'
import barGraph from '../Images/barGraph.jpg'

const OverviewGraph = () => {
  return (
    <div>
      <div className='flex justify-between mb-5'>
         <div>
            <h2 className='text-xl font-bold'>Overview</h2>
            <p className='text-gray-400 text-sm self-start'>Monthly Earning</p>
         </div>
         <select className='px-3 cursor-pointer rounded-md bg-gray-100 outline-none'>
            <option>Quaterly</option>
            <option>Monthly</option>
            <option>Yearly</option>
            <option>Daily</option>
         </select>
      </div>
      <div className='flex justify-center'>
         <img src={barGraph} alt='bar graph' className=' h-52 w-96 rounded-md'/>
      </div>
    </div>
  )
}

export default OverviewGraph