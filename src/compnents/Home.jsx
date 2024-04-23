import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import Recipes from './Recipes'

const Home = () => {
    const {recipeList, loading} = useContext(GlobalContext)
    if(loading) {
        return <div>Loading...</div>
    }
   
  return (
    <div className=' container py-8 mx-auto flex flex-wrap justify-center gap-10'>
        {
            
           
            recipeList && recipeList.length >0 ?
            
               (recipeList.map((item)=><Recipes item={item}/>
            ))
            
            
            :
            <div>
                <p className=' lg:text-4xl text-xl text-center text-black font-semibold'>Nothing to search. Please search something...</p>
            </div>
        }

    </div>
  )
}

export default Home