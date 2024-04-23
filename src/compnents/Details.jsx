import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context'


const Details = () => {
  const {id} = useParams()
  const {recipeData,setrecipeData,favouriteList,
    handleAddToFavorite} = useContext(GlobalContext)
  useEffect(()=>{
     const getRecipeData = async ()=>{
       const res = await await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
       const data = await res.json()
       if(data?.data?.recipe){
        setrecipeData(data?.data?.recipe)
       }
       console.log(data)
     }
     getRecipeData()
  },[])

  return (
    <div className=' container mx-auto p-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className=' row-start-auto lg:row-start-auto'>
        <div className='h-96 roundex-xl overflow-hidden group'>
            <img src={recipeData?.image_url} alt=""
            className=' w-full h-full object-cover block'
            />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium lg:text-xl">
          {recipeData?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeData?.title}
        </h3>
        <div>
          <button
           onClick={() => handleAddToFavorite(recipeData)}
           className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favouriteList && favouriteList.length > 0 && favouriteList.findIndex(
              (item) => item.id === recipeData?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-bold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3 p-3">
          {recipeData?.ingredients.map((ingredient,index) => (
              <li className=' text-justify'>
                <span className="text-2xl mr-3 font-semibold text-black">
                  {index+1}.
                </span>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.quantity}{ingredient.unit}
                </span>
                <span className=" ml-2 text-2xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}

          </ul>
         

        </div>
        </div>

    </div>
  )
}

export default Details