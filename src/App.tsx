import { Route, Routes } from "react-router-dom"
import NavBar from "./assets/sections/NavBar"
import { lazy, Suspense } from "react"
const Home = lazy(() => import("./assets/pages/Home"))
const NotFound = lazy(() => import("./assets/pages/NotFound"))
const Cars = lazy(() => import("./assets/pages/Cars"))
const Booking = lazy(() => import("./assets/pages/Booking"))
const Login = lazy(() => import("./assets/pages/Login"))
const Car = lazy(() => import("./assets/pages/Car"))
import Footer from "./assets/sections/Footer"
import Spinner from "./assets/component/ui/Spinner"
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init({
    duration:1000
  });

  return (
    <>
      <header className="bg-white py-2 shadow-lg z-50 fixed w-full top-0 left-0">
        <NavBar />
      </header>
      <main className="z-0 relative mt-20">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/login" element={<Login />} />
            <Route path="car/:id" element={<Car />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App