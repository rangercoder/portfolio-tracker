import { useEffect, useState } from 'react'

import BrokerButton from './components/BrokerButton'

import zerodha from "./assets/zerodha.svg"
import iifl from "./assets/iifl.svg"
import kotak from "./assets/kotak.svg"
import sharekhan from "./assets/sharekhan.svg"
import upstox from "./assets/upstox.svg"

export default function App() {
  
  // Set the broker which user has selected
  const [activeBroker, setActiveBroker] = useState("zerodha")

  // Table Data
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    
    // Write API here

  
    return () => {}
  }, [])
  


  return (

    // Wrapper
    <div className=' px-[7.5rem] py-[4rem] flex flex-col gap-3'>

      {/* Header */}
      <div className='flex justify-between items-end'>

        {/* Name */}
        <div className=' flex flex-col text-[#777]'>
          <div>Welcome Back</div>
          <div className='text-4xl font-bold'>Pokemon Trainer</div>
        </div>

        {/* Cost */}
        <div className=' flex flex-col text-[#777]'>
          <div className=' text-xs'>Total Holdings</div>
          <div className=' text-4xl font-bold text-green-500'>₹2,00,000</div>
        </div>

      </div>

      {/* Seperator */}
      <div className='h-[0.7px] w-full bg-[#777]'/>

      {/* Brokers' selection */}
      <div className='w-full'>

        {/* Heading */}
        <div className='font-semibold text-gray-800'>
          Broker
        </div>

        {/* Options */}        
        <div className=' w-full flex flex-wrap gap-2 p-2 rounded-md'>

          <BrokerButton setActiveBroker={setActiveBroker} activeBroker={activeBroker} name={'zerodha'} img={zerodha}/>
          <BrokerButton setActiveBroker={setActiveBroker} activeBroker={activeBroker} name={'upstox'} img={upstox}/>
          <BrokerButton setActiveBroker={setActiveBroker} activeBroker={activeBroker} name={'sharekhan'} img={sharekhan}/>
          <BrokerButton setActiveBroker={setActiveBroker} activeBroker={activeBroker} name={'kotak'} img={kotak}/>
          <BrokerButton setActiveBroker={setActiveBroker} activeBroker={activeBroker} name={'IIFL'} img={iifl}/>
          
        </div>

      </div>

      {/* Table */}
      <div>

        {/* Heading */}
        <div className='font-semibold text-gray-800'>
          {activeBroker[0].toUpperCase() + activeBroker.slice(1,)} Stocks
        </div>

        {/* Main Table */}
        <div className='flex flex-col gap-2 w-full min-h-[30rem] border border-[#777] p-2 text-sm rounded-md text-gray-800 font-semibold'>
          
          {/* Header Row */}
          <div className='flex items-center gap-1 p-2 h-[3rem] border bg-[#e0e0e0] border-[#A4A4A4] shadow-sm rounded-md'>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              Company Name
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              Exchange
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              Buying Price
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              Quantity
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              Average Price
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              Current Price
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              Profit/Loss
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              Day Change
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              Day Change %
            </div>

          </div>
          
          {/* Body rows */}
          {/* Use a map to return all rows */}
          <div className='flex items-center gap-1 p-2 h-[3rem] bg-white shadow-sm rounded-md'>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              Asian Paints
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              NSE
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              2980
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              1
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              2980
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              2948
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              -32
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              4
            </div>

            <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

            <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
              0.2%
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}