import { Route, Routes} from "react-router-dom"
import Navbar from "./components/navbar"


import PublicLayaout from "./layouts/public.layout"
import PrivateLayout from "./layouts/private.layout"


import Home from "./pages/public/home.page"
import NotFound from "./pages/public/not-found"
import Login from "./pages/auth/login-page"
import Register from "./pages/auth/register-page"


const App = () => {


  
 

  

  return (
    <Routes>
      <Route path="auth" >

        <Route path = 'login' element={<Login/>} />
          <Route path = 'register' element={<Register/>} />
      </Route>
   

      <Route  element={<PublicLayaout/>}>
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
