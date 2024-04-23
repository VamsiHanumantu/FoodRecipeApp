import React, { useContext } from 'react'
import { GlobalContext } from '../context';
import Recipes from './Recipes';
const Favourites = () => {
  const {favouriteList} = useContext(GlobalContext)
  return  (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouriteList && favouriteList.length > 0 ? (
        favouriteList.map((item) => <Recipes item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
}

export default Favourites