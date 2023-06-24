import React from 'react'
import Header from './Header'
import LeftNav from './LeftNav'
import RightNav from './RightNav'
import Feed from './Feed'

const Home = () => {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw]">
        <Header />
      <div className="flex">
        <LeftNav />
        <Feed />
        <RightNav />
      </div>
    </div>
  )
}

export default Home