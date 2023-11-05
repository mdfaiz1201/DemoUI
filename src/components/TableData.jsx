import React from 'react'

const TableData = () => {
  return (
   <div className="mt-2">
   <table style={{ width: '100%', }}>
         <tr>
            <td>
               <hr/>
            </td>
            <td>
               <hr/>
            </td>
            <td>
               <hr/>
            </td>
         </tr>
         <tr>
            <th className='text-gray-400 text-sm font-normal' style={{ width: '70%', textAlign: 'left' }}>Account</th>
            <th className='text-gray-400 text-sm font-normal' style={{ width: '10%' }}>ThisMonth</th>
            <th className='text-gray-400 text-sm font-normal' style={{ width: '10%' }}>YTD</th>
         </tr>
         <tr>
            <td>Sales</td>
            <td>20000</td>
            <td>50000</td>
         </tr>
         <tr>
            <td>Advertising</td>
            <td>20000</td>
            <td>50000</td>
         </tr>
         <tr>
            <td>Inventory</td>
            <td>20000</td>
            <td>50000</td>
         </tr>
         <tr>
            <td>Entertainment</td>
            <td>20000</td>
            <td>50000</td>
         </tr>
         <tr>
            <td>Product</td>
            <td>20000</td>
            <td>50000</td>
         </tr>
   </table>
   </div>


  );
};

export default TableData;