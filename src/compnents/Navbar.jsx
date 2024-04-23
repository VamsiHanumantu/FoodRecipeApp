import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../context'

const Navbar = () => {
    const { searchparam, setSearchparam,handleSubmit } = useContext(GlobalContext)
    
    return (
        <nav className=' flex justify-between p-5 items-center mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
            <h2 className=' text-2xl font-semibold text-green-900'>
                <NavLink to={'/'}>FoodRecipe</NavLink>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder='Enter items...' value={searchparam} onChange={(e) => setSearchparam(e.target.value)}
                    className=' bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200' />
            </form>
            <ul className=' flex gap-7'>
                <li>
                    <NavLink to={'/'} className='text-black hover:text-gray-700 duration-300' >Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/favourites'} className='text-black hover:text-gray-700 duration-300' >Favourites</NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar