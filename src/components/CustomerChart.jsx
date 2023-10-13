import React from 'react'
import pieChart from '../Images/3dpiechart.jpg'


const CustomerChart = () => {
  return (
    <div>
      <div className='flex flex-col'>
         <div className='mb-5'>
            <h2 className='text-xl font-bold'>Customers</h2>
            <p className='text-gray-400 text-sm'>Customers that buy products</p>
         </div>
         <img src={pieChart} alt='bar graph' className='rounded-md'/>
      </div>
    </div>
  )
}

export default CustomerChart