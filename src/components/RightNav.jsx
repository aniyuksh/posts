import React, { useContext } from 'react'
import { Context } from '../context/DataContext';

const RightNav = () => {

  const {sorting , setSorting} = useContext(Context);

  function handleChange(e){
    e.preventDefault();
    setSorting(e.target.value);
  }

  return (
    <div className='w-[20%] p-10'>
      <select className=' p-2' onChange={(e)=>handleChange(e)}>
        <option selected name="latest" value="latest">
            Latest Posts
        </option>
        <option value="most" name="most">
            Most Voted Posts
        </option>
      </select>
    </div>
  )
}

export default RightNav