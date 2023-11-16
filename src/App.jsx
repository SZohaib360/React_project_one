import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import {Routes, Route} from "react-router-dom"
import { Home } from "./Pages/Home"
import { Services } from "./Pages/Services"
import { About } from "./Pages/About"
import { Blog } from "./Pages/Blog"
import { Contact } from "./Pages/Contact"


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
