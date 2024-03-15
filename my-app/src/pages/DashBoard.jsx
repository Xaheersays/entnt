import React from 'react'
import {SummaryCard,BarGraph,TopCustomers,LineGraph,PaymentModeChart,PieGraph,Visitors} from '../components/index'
import {MoneyIcon,OrdersIcon,CustomersIcon,ViewIcon,ProductsIcon,DigitalpayIcon} from '../assets/Icons/icons'


const DashBoard = () => {
  return (
    <div className='p-2 overflow-hidden'>

     <div className='flex flex-wrap  justify-between gap-4'>
      <SummaryCard Icon={MoneyIcon} title={'REVENUE'} content={'RP.200 jt'}  progress={{type:'up',text:'10%'}}
      captionValue={80} captionText={'+ juta than last month'}/>
      <SummaryCard Icon={OrdersIcon} title={'ORDER'} content={'1150 pcs'}  progress={{type:'up',text:'12%'}}
      captionValue={500} captionText={'more than last month'}/>
      <SummaryCard Icon={CustomersIcon} title={'Customers'} content={'102.2 incs'}  progress={{type:'up',text:'10%'}}
      captionValue={'1.5k'} captionText={'more than last month'}/>
      <SummaryCard Icon={ViewIcon} title={'Visitors'} content={'32.000 decs'}  progress={{type:'down',text:'8%'}}
      captionValue={'1.9k less'} captionText={'less than last month'}/>
      <SummaryCard Icon={ProductsIcon} title={'Products'} content={'44.02 decs'}  progress={{type:'down',text:'4%'}}
      captionValue={44} captionText={'added less than last month'}/>
      <SummaryCard Icon={DigitalpayIcon} title={'payment'} content={'33.2 incs'}  progress={{type:'up',text:'12%'}}
      captionValue={23} captionText={'increase from last month'}/>
     </div>


      <div className='flex  gap-2 flex-col md:flex-row'>
        <div className='  md:w-3/4 flex flex-col gap-2   overflow-x-auto'>
        <div className='bg-gray-200 p-2 rounded-md flex flex-col justify-center items-center md:overflow-hidden' style={{ width: '110%', minWidth: '600px' }}>
          <span className='font-mono text-xl text-blue-700 font-semibold'>Comparison of sales between Product A and B</span>
          <div > 
            <BarGraph/>
          </div>
        </div>
          <div className='bg-gray-200  p-2 rounded-md  flex flex-col justify-center items-center md:overflow-hidden' style={{ width: '110%', minWidth: '600px' }}>
            <Visitors/>
          </div>
          <div className='bg-gray-200  p-2 rounded-md  flex flex-col justify-center items-center md:overflow-hidden' style={{ width: '110%', minWidth: '600px' }}>
            <span className='text-xl text-blue-700 font-semibold font-mono '>Comparison between payment modes</span>
            <PaymentModeChart/>
          </div>
          <div className='bg-gray-200  p-2 rounded-md    md:overflow-hidden' style={{ width: '110%', minWidth: '600px' }}>
          
            <PieGraph/>
          </div>
          <div className='bg-gray-200  p-2 rounded-md  flex flex-col justify-center items-center md:overflow-hidden' style={{ width: '110%', minWidth: '600px' }}>
            <span className='text-xl text-blue-700 font-semibold font-mono '>Comparison of sales between Product A and B</span>
            <BarGraph/>
          </div>
        </div>

        <div className=' md:w-1/4 bg-gray-200 p-2 rounded-md'>
         <TopCustomers/>
        </div>
        
      </div>
    </div>
  )
}

export default DashBoard