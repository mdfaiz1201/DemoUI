import React from 'react'
import TableData from './TableData'

const ProductSell = () => {
  return (
      <div className='md:w-1/2 p-5 bg-white rounded-md'>
         <div className='flex justify-between mb-5'>
            <h2 className='text-xl font-bold pr-2'>Account watchlist</h2>
         </div>
         <TableData/>
      </div>
  )
}

export default ProductSell