import { useEffect, useState } from 'react'

import BrokerButton from './components/BrokerButton'

import zerodha from "./assets/zerodha.svg"
import iifl from "./assets/iifl.svg"
import kotak from "./assets/kotak.svg"
import sharekhan from "./assets/sharekhan.svg"
import upstox from "./assets/upstox.svg"
import axios from 'axios'

export default function App() {
  
  // Set the broker which user has selected
  const [activeBroker, setActiveBroker] = useState("zerodha")

  // Table Data - Initial dummy values
  const [tableData, setTableData] = useState([
    {
      "id": 1,
      "companyName": "Test Company",
      "exchange": "NSE",
      "buyingPrice": 100.0,
      "quantity": 10,
      "averagePrice": 100.0,
      "currentPrice": 105.0,
      "profitLoss": 50.0,
      "dayChange": 5.0,
      "dayChangePercent": 5.0
    },
  ])

  // Runs on window load and broker change
  useEffect(() => {

    console.log(activeBroker);
    
    // API call to get table data
    // ASSUMING THE API RESPONSE FORMAT TO BE ->
    // response = [
    //   {
    //     "id": "1",
    //     "companyName": "Test Company",
    //     "exchange": "NSE",
    //     "buyingPrice": 100.0,
    //     "quantity": 10,
    //     "averagePrice": 100.0,
    //     "currentPrice": 105.0,
    //     "profitLoss": 50.0,
    //     "dayChange": 5.0,
    //     "dayChangePercent": 5.0
    //   },

    //   {
    //     "id": "2",
    //     "companyName": "Test Company 2",
    //     "exchange": "BSE",
    //     "buyingPrice": 100.0,
    //     "quantity": 10,
    //     "averagePrice": 100.0,
    //     "currentPrice": 105.0,
    //     "profitLoss": 50.0,
    //     "dayChange": 5.0,
    //     "dayChangePercent": 5.0
    //   }

    //   etc.....
    // ]
    
    axios.get(`http://localhost:8080/api/${activeBroker}/portfolios`)
    .then((res)=>{

      console.log(res.data);
      setTableData(res.data)

    })
    .catch((err)=>{

      console.log(err)

    })

  
    return () => {}
  }, [activeBroker])
  


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
          <BrokerButton setActiveBroker={setActiveBroker} activeBroker={activeBroker} name={'iifl'} img={iifl}/>
          
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
          {
            tableData.map((item)=>{
              return(
                <div key={item.id} className='flex items-center gap-1 p-2 h-[3rem] bg-white shadow-sm rounded-md'>

                  <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
                    {item.companyName}
                  </div>

                  <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

                  <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
                    {item.exchange}
                  </div>

                  <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

                  <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
                    {item.buyingPrice}
                  </div>

                  <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

                  <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
                    {item.quantity}
                  </div>

                  <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

                  <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
                    {item.averagePrice}
                  </div>

                  <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

                  <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
                    {item.currentPrice}
                  </div>

                  <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

                  <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
                    {item.profitLoss}
                  </div>

                  <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

                  <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
                    {item.dayChange}
                  </div>

                  <div className='h-full w-[0.7px] bg-[#b8b8b8]'/>

                  <div className='text-[0.85rem] text-ellipsis text-nowrap overflow-hidden text-center w-[11.11%]'>
                    {item.dayChangePercent}%
                  </div>

                </div>
              )
            })
          }
        </div>

      </div>

    </div>
  )
}