import React, { useContext, useEffect, useState } from 'react'
import {BiUpArrow} from "react-icons/bi"
import {BiDownArrow} from "react-icons/bi"
import {BsBookmarkDash} from "react-icons/bs"
import {BiComment} from "react-icons/bi"
import {BsShare} from "react-icons/bs"
import { Context } from '../context/DataContext'
import { Link } from 'react-router-dom'
import moment from "moment"

const PostCard = ({post}) => {

  const {data, setData , sorting} = useContext(Context);
  const [clicked , setclicked] = useState(false);
  
  function handleBookMark(e){
    
    e.preventDefault();
    setData({...data , posts : data?.posts?.map((obj)=>obj.postId === post.postId ? {...obj , isBookmarked : !obj.isBookmarked} : obj )})
  //  console.log(data)
   
    // setData(data?.posts?.map((obj)=>obj.postId === post.postId ? {...obj , isBookmarked : !obj.isBookmarked} : obj ))
    
  }
 
  function handleUpArrow(e){
    setclicked((prev)=>!prev)
    e.preventDefault();
    setData({...data , posts : data?.posts?.map((obj)=>obj.postId === post.postId ? {...obj , upvotes : obj.upvotes+1} : obj )})
  }

  function handleDownArrow(e){
    setclicked((prev)=>!prev)
    e.preventDefault();
    setData({...data , posts : data?.posts?.map((obj)=>obj.postId === post.postId ? {...obj , upvotes : obj.upvotes-1} : obj )})
  }

  useEffect(()=>{
    if(sorting === "most"){
      setData({...data , posts : data?.posts?.sort((a,b)=>(b.upvotes - b.downvotes) - (a.upvotes - a.downvotes))})
    }
    
  },[clicked ,sorting])



  return (
    <div className='flex max-w-[80%] border border-black mx-auto m-4 p-2'>
      <div className='p-5 flex flex-col justify-start items-center'>
        {/* upvote */}
        <div onClick={(e)=>handleUpArrow(e)}><BiUpArrow  size={"40px"}/></div>
        <p>{post.upvotes - post.downvotes}</p>
        <div onClick={(e)=>handleDownArrow(e)}><BiDownArrow size={"40px"}/></div>
      </div>
      <div>
        {/* main content */}
        <div className='flex items-center gap-4'>
          <img src={post.picUrl} alt="avtar" className='h-[30px]'/>
          <p>Posted by @{post.username}</p>
          <p>{moment(Date.parse(post.createdAt)).fromNow()}</p>
          {/* <p>{post.createdAt}</p> */}
        </div>
        <div className='pb-2'>
          <h1 className='text-2xl font-bold'>
            {post.post}
          </h1>
          <div className='flex text-sm gap-2 pb-2'>
          {
            post.tags.map((tag)=>{
              return(
                <div>
                  <p>{tag}</p>
                </div>
              )
            })
          }
          </div>
          <p> 
            {post.postDescription}
          </p>
        </div>
        <div className='flex justify-between border-t-2 pt-2 px-3'>
          <Link to={`/single/${post.postId}`}>
            <BiComment size={"20px"}/>
          </Link>
         
          <BsShare size={"20px"}/>
          <span onClick={(e)=>handleBookMark(e)} className={post.isBookmarked ? "text-purple-400" : undefined }>
            <BsBookmarkDash size={"20px"}/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default PostCard