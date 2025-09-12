import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./public/home.page"
import PublicLayaout from "./layouts/public.layout"
import PrivateLayout from "./layouts/private.layout"
import Navbar from "./components/navbar"
import NotFound from "./public/not-found"
const App = () => {


  const location = useLocation()
  
 

  

  return (
    <Routes>
      <Route path="" element={<div>
          {location.state}
      </div>} />
      <Route path="about" element={
        <h2>Aboout {location.pathname}</h2>
      } />

      <Route element={<PublicLayaout/>}>
        <Route index element={<Home/>} />
      
      </Route>

      <Route element={<PrivateLayout/>}>
        <Route path="private"  element={<Navbar/>} />
      </Route>
        <Route path="*" element={<NotFound/>}/>
    </Routes>


    
  )
}

export default App
