import React from 'react'
import App from './App'
function First() {
    function secondhandler()
    {
        navigate("/second");
    }
  return (
    <div>
        <App></App>
        <form className='flex flex-col justify-center items-center mt-10'>
            <div className='flex flex-col md:flex-row md:items-center md:text-lg md:space-x-20 '>
                <label className='m-2 text-gray-500 flex' htmlFor="Gname">Garage Name <p className='text-red-500'>*</p> </label>
                <input className='m-2 rounded-md w-72 h-9 outline-none select-none border-2 border-gray-300 ' id="Gname" type="text" />
            </div>
            <div className='flex flex-col md:flex-row md:items-center md:text-lg md:space-x-20 '>
                <label className='m-2 text-gray-500 flex' htmlFor="address">
                Garage Address <p className='text-red-500'>*</p>
                </label>
                <div id="address">
                    <div className='flex space-x-2 m-2'>
                        <select id="state" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>State</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                        <select id="state" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>City or Town</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <input placeholder='Drop your Location ' className='m-2 rounded-md w-72 h-9 outline-none select-none border-2 border-gray-300 ' id="Gname" type="text" />
                </div>
            </div>
            <h1 className=' m-2 mt-5 text-gray-500 flex text-lg'><p className='text-red-500'>*</p>Indicates a required field</h1>
            <div className='bg-proj w-2/3 h-12 m-5 flex justify-end items-center'>
                <a href='/second' className='text-white text-xl m-10 flex justify-center items-center space-x-3'><h1>Next Step</h1> <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.7071 8.70711C31.0976 8.31659 31.0976 7.68342 30.7071 7.2929L24.3431 0.928934C23.9526 0.53841 23.3195 0.53841 22.9289 0.928934C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM-8.74228e-08 9L30 9L30 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#F7F6FF"/>
</svg>
 </a>
            </div>
        </form>
    </div>
  )
}

export default First