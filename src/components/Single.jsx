import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../context/DataContext';
import { useContext } from 'react';


const Single = () => {
    const {id} = useParams();
    const {data} = useContext(Context);
    const post = data?.posts?.find((a)=>a.postId === (id))
    console.log(id)
    console.log(post)

    return (
        <div className='flex max-w-[80%] border border-black mx-auto m-4 p-2'>
          
          <div>
            {/* main content */}
            <div className='flex items-center gap-4'>
              <img src={post?.picUrl} alt="avtar" className='h-[30px]'/>
              <p>Posted by @{post?.username}</p>
              {/* <p>{post.createdAt}</p> */}
            </div>
            <div className='pb-2'>
              <h1 className='text-2xl font-bold'>
                {post?.post}
              </h1>
              <div className='flex text-sm gap-2 pb-2'>
              {
                post?.tags.map((tag)=>{
                  return(
                    <div>
                      <p>{tag}</p>
                    </div>
                  )
                })
              }
              </div>
              <p> 
                {post?.postDescription}
              </p>
            </div>
            
            <div>
                <h1>Comments</h1>
            {post.comments.map((a)=>{
                return(
                    <>
                        <p>Username : @{a.username}</p>
                        <p>Comment: {a.comment}</p>
                    </>
                )
            })}
            <Link to="/"><button>Back to home</button></Link>
          </div>
            
          </div>
          
        </div>
      )
}

export default Single