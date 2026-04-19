import { Route, Routes } from "react-router-dom"
import NavBar from "./assets/sections/NavBar"
import Home from "./assets/pages/Home"
import NotFound from "./assets/pages/NotFound"
import Cars from "./assets/pages/Cars"
import Footer from "./assets/sections/Footer"


const App = () => {
  return (
    <>
      <header className="bg-white py-2 shadow-lg z-50 fixed w-full top-0 left-0">
        <NavBar />
      </header>
      <main className="z-0 relative mt-20">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cars" element={<Cars />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App