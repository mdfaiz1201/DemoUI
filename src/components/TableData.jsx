import React from 'react'
import logo from '../Images/earth.jpg'

const TableData = () => {
  return (
   <div className="mt-2">
   <table style={{ width: '100%', }}>
         <tr className='mb-8'>
            <th className='text-gray-400 text-sm font-normal p-3' style={{ width: '70%', textAlign: 'left' }}>Product Name</th>
            <th className='text-gray-400 text-sm font-normal p-3' style={{ width: '10%' }}>Stock</th>
            <th className='text-gray-400 text-sm font-normal p-3' style={{ width: '10%' }}>Price</th>
            <th className='text-gray-400 text-sm font-normal p-3' style={{ width: '10%' }}>Total Sales</th>
         </tr>
         <tr>
            <td>
               <hr className='mt-2'/>
            </td>
            <td>
               <hr className='mt-2'/>
            </td>
            <td>
               <hr className='mt-2'/>
            </td>
            <td>
               <hr className='mt-2'/>
            </td>
         </tr>
         <tr>
            <td  className='pb-2'>
               <div className='flex items-center justify-start f-dc mobile-fix gap-3'>
                  <img src ={logo} className='w-20 h-12 rounded-md my-2'/>
                  <div className='flex flex-col justify-center'>
                     <p className='font-bold'>Abstarct 3d</p>
                     <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur</p>
                  </div>
               </div>
            </td>
            <td>
               <p className='text-center text-gray-600 text-sm'>32 in stock</p>
            </td>
            <td>
               <p className='text-center font-bold text-sm'>$45.99</p>
            </td>
            <td>
               <p className='text-center text-gray-600 text-sm'>20</p>
            </td>
         </tr>
         <tr>
            <td>
               <div className='flex items-center justify-start f-dc mobile-fix gap-3'>
                  <img src ={logo} className='w-20 h-12 rounded-md my-2'/>
                  <div className='flex flex-col justify-center'>
                     <p className='font-bold'>Abstarct 3d</p>
                     <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur</p>
                  </div>
               </div>
            </td>
            <td>
               <p className='text-center text-gray-600 text-sm'>32 in stock</p>
            </td>
            <td>
               <p className='text-center font-bold text-sm'>$45.99</p>
            </td>
            <td>
               <p className='text-center text-gray-600 text-sm'>20</p>
            </td>
         </tr>
   </table>
   </div>


  );
};

export default TableData;