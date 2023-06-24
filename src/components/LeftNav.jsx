import React, { useContext } from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {BsRocket} from "react-icons/bs"
import {BsBookmarkDash} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"
import { Context } from '../context/DataContext'

const LeftNav = () => {
  const {data} = useContext(Context);
  return (
    <div className='flex flex-col h-[90vh] w-[20%] justify-between'>
      <div className=' pl-32 m-2'>
        <div className='flex gap-2'>
          <div className='mt-1'><AiOutlineHome /></div>
           <h1 className='font-semibold mb-2'>Home</h1>
        </div> 
        <div className='flex gap-2'>
          <div className='mt-1'><BsRocket /></div>
          <h1 className='font-semibold mb-2'>Explore</h1>
        </div>
        <div className='flex gap-2'>
          <div className='mt-1'><BsBookmarkDash /></div>
          <h1 className='font-semibold mb-2'>BookMarks</h1>
        </div>
        
        <div className='flex gap-2'>
        <div className='mt-1'><CgProfile /></div>
          <h1 className='font-semibold mb-2'>Profile</h1>
        </div>
      </div>
      <div className='pl-32 m-2 flex'>
          <div>
            <img src={data.picUrl} alt="pic"/>
          </div>
          <div>
            <h1 className='font-semibold'>{data.name}</h1>
            <h1 className='text-base'>@{data.username}</h1>
          </div>
      </div>
    </div>
  )
}

export default LeftNav