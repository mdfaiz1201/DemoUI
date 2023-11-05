import React from 'react';

const Upload = ({settoggle}) => {
   const handleClick = () => {
      settoggle(false)
   }
   return (
      <div className='text-center m-4 md:mt-10'>
         <div className='bg-gray-100 p-5'>
            <div className='flex justify-center gap-1'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
               </svg>
               <span>Upload</span>
            </div>
            <br/>
            <button onClick={handleClick} className='mx-2 text-sm px-3 py-2 rounded-md text-green-500 bg-blue-100 font-bold'>Cancel</button>
            <button className='text-sm px-3 py-2 rounded-md text-green-500 bg-blue-100 font-bold'>Upload</button>

         </div>
      </div>
   )
}

export default Upload;