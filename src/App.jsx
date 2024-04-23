import Home from "./compnents/Home"
import Details from "./compnents/Details"
import Favourites from "./compnents/Favourites"
import Navbar from "./compnents/Navbar"
import { Routes,Route } from "react-router-dom"
function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favourites" element={<Favourites/>} ></Route>
        <Route path="/recipe-item/:id" element={<Details/>}></Route>
      </Routes>
    </>
  )
}

export default App
