import React from 'react'
import Search from './Search'
import TableData from './TableData'

const ProductSell = () => {
  return (
      <div className=' p-5 bg-white rounded-md'>
         <div className='flex justify-between mb-5'>
            <h2 className='text-xl font-bold pr-2'>Product Sell</h2>
            <div className='flex f-dc self-start gap-2'>
               <Search color='bg-gray-100'/>
               <select className='p-2 cursor-pointer rounded-md bg-gray-100 outline-none'>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>Last 1 year</option>
                  <option>Last 2 years</option>
               </select>
            </div>
         </div>
         <TableData/>
      </div>
  )
}

export default ProductSell