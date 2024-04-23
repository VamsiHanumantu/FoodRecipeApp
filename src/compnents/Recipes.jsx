import React from 'react'
import { Link } from 'react-router-dom'

const Recipes = ({item}) => {
  return (
    <div className='flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 border-white rounded-2xl'>
      <div className='h-40 flex justify-center items-center rounded-xl overflow-hidden'>
             <img src={item?.image_url} alt="item image" className=' block w-full'/>
      </div>
      <div>
        <span className=' text-sm text-cyan-700 font-medium'>{item?.publisher}</span>
        <h3 className=' font-bold text-2xl truncate text-black mb-2'>{item?.title}</h3>
        <Link to={`/recipe-item/${item?.id}`}
        className=' text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white'
        >Recipe Details</Link>
      </div>
    </div>
  )
}

export default Recipes