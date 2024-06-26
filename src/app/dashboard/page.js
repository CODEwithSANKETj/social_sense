'use client'
import React from 'react'
import { CardWithForm } from '../component/Card'
import Chart from '../component/Chart'
import LoopChart from '../component/LoopChart'
import PieChart from '../component/PieChart'


function dashboard() {
  return (
    <div className='lg:grid-cols-2 m-3 ml-12  grid  w-11/12 gap-14'>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full'>
        <CardWithForm />
        <CardWithForm />
        <CardWithForm />
        <CardWithForm />
      </div>

      <div className='border w-full'>
        <Chart/>
      </div>
      <div>
        <LoopChart/>
      </div>
      <div>
        <PieChart/>
      </div>
    </div>
  )
}

export default dashboard