import React from 'react'
import App from './App'
function Third() {
  return (
    <div>
        <App path="third"></App>
        <form action="" className='flex flex-col justify-center items-center mt-10'>
            <div className='flex flex-col justify-center items-center md:text-lg '>
                <div className=''>
                    <h1 className='mb-2 flex'>Pickup & drop <p className='text-red-500 '>*</p> </h1>
                    <h1 className='text-center w-64 border-proj border mb-2 text-proj p-1'>Select</h1>
                    <div className='border p-2 rounded-lg w-64'>
                    <div className="form-control">
                        <label className=" label cursor-pointer  flex justify-between items-center">
                            <span className="label-text">Available</span> 
                            <input type="radio" name="radio-10" className="radio checked:bg-proj" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer  flex justify-between items-center">
                            <span className="label-text">Unavailable</span> 
                            <input type="radio" name="radio-10" className="radio checked:bg-proj" checked />
                        </label>
                    </div>
                    </div>
                    <h1 className='mt-2 mb-2 flex'>Lubricant Available <p className='text-red-500 '>*</p> </h1>
                    <h1 className='text-center w-64 border-proj border mb-2 text-proj p-1'>Select</h1>
                    <div className='border p-2 rounded-lg w-64'>
                    <div className="form-control">
                        <label className="label cursor-pointer  flex justify-between items-center">
                            <span className="label-text">Castrol</span> 
                            <input type="checkbox" name="radio-10" className="radio rounded checked:bg-proj" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer  flex justify-between items-center">
                            <span className="label-text">HP</span> 
                            <input type="checkbox" name="radio-10" className="radio rounded checked:bg-proj" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer  flex justify-between items-center">
                            <span className="label-text">Valvoline</span> 
                            <input type="checkbox" name="radio-10" className="radio rounded checked:bg-proj" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer  flex justify-between items-center">
                            <span className="label-text">Veedol</span> 
                            <input type="checkbox" name="radio-10" className=" rounded checked:bg-proj" checked />
                        </label>
                    </div>
                    </div>
                </div>
                <h1 className=' m-2 mt-5 text-gray-500 flex text-lg'><p className='text-red-500'>*</p>Indicates a required field</h1>
            </div>
            <div className='bg-proj w-2/3 h-12 m-5 flex  justify-evenly items-center'>
            <a href='/' className='text-white text-xl  flex justify-center items-center space-x-1'><svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.292891 8.70711C-0.0976333 8.31659 -0.0976334 7.68342 0.29289 7.2929L6.65685 0.928934C7.04738 0.53841 7.68054 0.53841 8.07107 0.928934C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292891 8.70711ZM31 9L0.999998 9L0.999998 7L31 7L31 9Z" fill="#F7F6FF"/>
</svg>
<h1>Previous Step</h1>
 </a>
                <a href='/' className='text-white text-xl  flex justify-center items-center space-x-1'><h1>Next Step</h1> <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.7071 8.70711C31.0976 8.31659 31.0976 7.68342 30.7071 7.2929L24.3431 0.928934C23.9526 0.53841 23.3195 0.53841 22.9289 0.928934C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM-8.74228e-08 9L30 9L30 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#F7F6FF"/>
</svg>
 </a>
            </div>
        </form>
    </div>
  )
}

export default Third