export default function BrokerButton({img, setActiveBroker, activeBroker, name}){



    return(
        <div onClick={()=>{setActiveBroker(name)}} style={{backgroundColor:activeBroker===name?"#02c1711c": "white"}} className={`w-[100%] sm:w-[49%] md:w-[24%] min-w-[10rem] h-[6rem] bg-[#FFFFFF] border ${activeBroker===name?" border-[#02C173] ": " border-[#FFFFFF] "} hover:border-[#02C173] rounded-md flex justify-center items-center broker-button cursor-pointer select-none shadow ease-in-out duration-200`}>
            <img className="img-class select-none" width={'80%'} src={img}/>
        </div>
    )
}