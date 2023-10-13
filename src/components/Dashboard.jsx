import React from 'react'
import {Card, CustomerChart, OverviewGraph, ProductSell} from './index'
import '../App.css'

const Dashboard = () => {
      const dollarIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
   </svg>
   
   return (
   <>
      <section className='my-8'>
         <div className='flex items-center flex-wrap justify-start gap-5'>
            <Card bgColor='bg-green-200' color='text-green-500' icons={dollarIcon} topic='Earning' amount='$195k' increase={52}/>
            <Card bgColor='bg-red-500' color='text-blue-500' icons={dollarIcon} topic='Earning' amount='$195k' decrease={52}/>
            <Card bgColor='bg-purple-300' color='text-purple-500' icons={dollarIcon} topic='Earning' amount='$195k' increase={52}/>
            <Card bgColor='bg-orange-500' color='text-yellow-500' icons={dollarIcon} topic='Earning' amount='$195k' decrease={52}/>
         </div>
      </section>
      <section>
         <div className='flex gap-5 flex-col lg:flex-row'>
            <div className='bg-white md:flex-1 p-5 rounded-md'><OverviewGraph/></div>
            <div className='bg-white rounded-md w-72 p-5'><CustomerChart/></div>
         </div>
      </section>
      <section className='my-8'>
         <ProductSell/>
      </section>
   </>
  )
}

export default Dashboard