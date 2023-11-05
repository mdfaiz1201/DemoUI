import React from 'react'
import {ProductSell} from './index'
import '../App.css'
import TimePeriodGraph from './TimePeriodGraph'
import MonthlyInOutGraph from './MonthlyInOutGraph'
import GraphComponent from './GraphComponent'

const Dashboard = () => {
   return (
      <section className='m-6 relative'>
         <div className='flex flex-col md:flex-row gap-6 mb-4'>
            <GraphComponent />
            <TimePeriodGraph/>
         </div>
         <div className='flex flex-col md:flex-row gap-6 mb-4'>
            <MonthlyInOutGraph/>
            <ProductSell/>
         </div>
      </section>
  )
}

export default Dashboard