import { Routes ,Route } from "react-router-dom"
import Home from './Sections/Home'
import Cart from './Sections/Cart'
import Collection from './Sections/Collection'
import Contact from './Sections/Contact'
import About from './Sections/About'
import Login from './Sections/Login'

import Placeorder from './Sections/Placeorder'
import Products from './Sections/Products'
import Navbar from "./Components/Navbar"
import { SearchProvider } from "./Context/Contextprovide"
import Searchbar from "./Components/Searchbar"
function App() {
  

  return (
    <div className=" sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
      

<SearchProvider>
<Navbar/>


  <Routes>


    
<Route path="/" element = {<Home/>} />
<Route path="/cart" element = {<Cart/>} />
<Route path="/collection" element = {<Collection/>} />
<Route path="/contact" element = {<Contact/>} />
<Route path="/about" element = {<About/>} />
<Route path="/login" element = {<Login/>} />
<Route path="/placeorder" element = {<Placeorder/>} />
<Route path='/products/:productsId' element = {<Products/>} />
  </Routes>
  </SearchProvider>
  </div>
  )
}

export default App
