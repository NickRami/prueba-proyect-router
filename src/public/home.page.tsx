import CategoryCards from "../components/category.cards"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
        <Navbar/>
        <main className="flex-grow-1"> 
            <CategoryCards/>    
         </main>
        <Footer/>
    </div>
  )
}

export default Home
