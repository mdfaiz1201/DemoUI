import React from 'react'

const Card = ({bgColor,color, icons, topic, amount,increase,decrease}) => {

  return (
    <div className='w-60 py-6 px-2 flex items-center justify-center gap-2 rounded-md bg-white'>
      <span className={`rounded-full p-5 ${bgColor} ${color}`}>
         {icons}
      </span>
      <div>
         <p className='text-gray-400 text-sm'>{topic}</p>
         <p className='font-bold text-xl'>{amount}</p>
         {increase && <p><span className='font-bold text-green-400'>&uarr;{increase}%</span> this month</p>}
         {decrease && <p><span className='font-bold text-red-500'>&darr;{decrease}%</span> this month</p>}
      </div>
    </div>
  )
}

export default Card