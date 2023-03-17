import React from 'react'
import {BiTimeFive} from "react-icons/bi";

//for all jobs we use higth order array method colled map..
// In this ca we shall use list all the jobs in array colled data
const Data=[
  {
    id: '1',
    image:'logo1',
    title:'web Developer',
    time:'Now',
    location:'canada',
    desc:' Lorem ipsum,color  set amet consecter adipisicing elit. corapti laborusam',
    campany:'Navac linus co.',
  }
]
//this is a single campany let us see how to map it...


const jobs = () => {
  return (
    <div className='flex justify-center'>
        
      
       
       
       <div className="jobcontainer flex gap-10 justify-center flex-wrap items-center py-10
      "></div>
      <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded[10px]
       hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg ">
        <span className='flex justify-between items-center gap-4'>
        <h1 className='etxt-[16px] semibold text-textcolor group-hover:text-white '>We developer</h1>
        <span className='flex items-center text-[#ccc] gap-1 '>
        <BiTimeFive/>Now
        </span>
        </span>
        <h6 className='text-[#ccc] '> Canada</h6>
        <p className='text- [13px]  [#959595] pt-[20px] border-t-[2px] mt-[20px]'>
          Lorem ipsum,color  set amet consecter adipisicing elit. corapti laborusam
        </p>
        <div className='campany flex items-center gap-2'>
      <img src='' alt='' className='w-[10%] '/>
      <spam className="text" ></spam>
        </div>
        <button className='border-[2px] rounded-[10px] block p-[10px] w-full 
        text-[14px] font-semibold text-textcolor
         hover:bg-white group-hover/item:textcolor group-hover:text-black  '>
            Apply Now
        </button>
       </div> 
       

    </div>
    
  )
}

export default jobs