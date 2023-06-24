import React, { useContext } from 'react'
import { Context } from '../context/DataContext'
import PostCard from "../components/PostCard"
const Feed = () => {
  const {sorting , data} = useContext(Context);

 


  return (
    <div className='w-[60%]'>
      <div className='font-semibold p-2 ml-[5rem] text-2xl'>
        <h1>{sorting === "latest" ? "Latest Posts" : "Most Voted Posts"}</h1>
      </div>
      <div>
          {
            data?.posts?.map((post)=>{
              return(
                <>
                  <PostCard post={post}/>
                </>
              )
            })
          }
      </div>

    </div>
  )
}

export default Feed