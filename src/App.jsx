import { Outlet } from "react-router-dom"
import Footer from "./component/app/Footer"
import Navbar from "./component/app/Navbar"



function App() {
  

  return (
    <>
    <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
