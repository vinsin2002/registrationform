import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
function Hero(props) {
    let first = 0;
    let second = 0;
    let third = 0;
    if(props.path == "")
    {
        first = 0;
        second = 0;
        third = 0;
    }
    if(props.path == "second")
    {
        first = 1;
        second = 2;
    }
    if(props.path == "third")
    {
        first = 1;
        second = 1;
        third = 2;
    }
    const navigate = useNavigate();
    function secondhandler()
    {
        navigate("/second");
    }
    function firsthandler()
    {
        navigate("/");
    }
    function thirdhandler()
    {
        navigate("/third");
    }
  return (
    <div className='w-screen'>
        <div className='m-10 flex items-center text-xl'>
        <svg width="27" height="20" className='md:w-27 md:h-20' viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M25.3125 8.57245H5.29875L11.4244 2.34444C11.7108 2.05272 11.8486 1.67664 11.8075 1.29892C11.7663 0.921206 11.5496 0.572793 11.205 0.330331C10.8604 0.0878688 10.4161 -0.0287806 9.96988 0.00604446C9.52366 0.0408695 9.11206 0.224317 8.82562 0.516029L0.388125 9.08669C0.331359 9.15486 0.280596 9.22648 0.23625 9.30096C0.23625 9.37238 0.23625 9.41523 0.118125 9.48665C0.0416368 9.65044 0.00158814 9.82478 0 10.0009C0.00158814 10.177 0.0416368 10.3513 0.118125 10.5151C0.118125 10.5866 0.118125 10.6294 0.23625 10.7008C0.280596 10.7753 0.331359 10.8469 0.388125 10.9151L8.82562 19.4858C8.98429 19.647 9.18297 19.7767 9.40755 19.8656C9.63213 19.9544 9.87709 20.0003 10.125 20C10.5193 20.0006 10.9014 19.8844 11.205 19.6715C11.3759 19.5515 11.5171 19.4043 11.6207 19.2381C11.7242 19.0719 11.788 18.89 11.8083 18.7029C11.8287 18.5158 11.8053 18.3272 11.7394 18.1478C11.6735 17.9683 11.5665 17.8017 11.4244 17.6574L5.29875 11.4293H25.3125C25.7601 11.4293 26.1893 11.2788 26.5057 11.011C26.8222 10.7431 27 10.3797 27 10.0009C27 9.62205 26.8222 9.25872 26.5057 8.99083C26.1893 8.72295 25.7601 8.57245 25.3125 8.57245Z" fill="black"/>
</svg>

           <h1 className='mx-2'>Free Registration</h1>
        </div>
        <div className='flex justify-center items-center'>
            <div className='mt-20 flex flex-col p-2 items-center justify-center pb-10 w-auto border-b-2 border-gray-300 '>
                <h1 className='flex flex-col md:flex-row justify-center text-center font-semibold text-3xl capitalize'><h1>Create your garage account today.</h1> <h1 className='mx-1 text-proj '>For Free !</h1> </h1>
                <h5 className='text-gray-500 mt-2'>In just 3 steps you will have your own  Digital Garage</h5>
            </div>
        </div>
        <div className='flex justify-center w-full h-auto space-x-5 md:text-lg px-3 '>
            <div onClick={firsthandler} className={`bg-proj text-white h-32 w-40 border-2 flex flex-col justify-center items-center space-y-5 ${first == 1 ? "bg-green-500" : "bg-proj"} `}>
                <div className={`h-10 w-10 bg-purple-700 rounded-full flex justify-center items-center ${first == 1? "bg-green-700" : "bg-purple-700"} ` }>1</div>
                <h1>Garage Details</h1>
            </div>
            <div onClick={secondhandler} className= {` h-32 w-40 border-2 flex flex-col justify-center items-center space-y-5 ${second == 2? " bg-proj text-white" : ""} ${second == 1? "bg-green-500 text-white " : ""} `}>
                <div className={`h-10 w-10 border-2 rounded-full flex justify-center items-center ${second == 2? " bg-purple-700 border-none text-white" : ""} ${second == 1? "bg-green-700 border-none text-white" : ""} `}>2</div>
                <h1>Service Details</h1>
            </div>
            <div onClick={thirdhandler} className={`h-32 w-40 border-2 flex flex-col justify-center items-center space-y-5 ${third == 2? " bg-proj border-none text-white" : ""}  `}>
                <div className={`h-10 w-10  border-2 rounded-full flex justify-center items-center ${third == 2? " bg-purple-700 border-none text-white" : ""} `}>2</div>
                <h1>Complete</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero