import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
    const [searchparam, setSearchparam] = useState('');
    const [ loading,setLoading] =  useState(false)
    const [recipeList,setRecipelist] = useState([])
    const [recipeData,setrecipeData] = useState(null)
    const [favouriteList,setFavouriteList] = useState([])

    const handleSubmit = async (event)=>{
        event.preventDefault()
        setLoading(true)
       try{
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchparam}`
        );
        const data = await response.json();

        if(data?.data?.recipes){
          setRecipelist(data?.data?.recipes)
          setLoading(false)
          setSearchparam('')

        }
     
       }catch(e){
        console.log(e);
        setLoading(false)
        setSearchparam('')
       }
    }
    function handleAddToFavorite(getCurrentItem){
      console.log(getCurrentItem);
      let cpyFavoritesList = [...favouriteList];
      const index = cpyFavoritesList.findIndex(item=> item.id === getCurrentItem.id)
  
      if(index === -1) {
        cpyFavoritesList.push(getCurrentItem)
      } else {
        cpyFavoritesList.splice(index)
      }
  
      setFavouriteList(cpyFavoritesList)
    }
    console.log(favouriteList);

    return <GlobalContext.Provider value={{ searchparam,loading,recipeList,recipeData, setSearchparam,handleSubmit,setrecipeData, handleAddToFavorite,
      favouriteList }}>{children}</GlobalContext.Provider>;
}

export default GlobalState