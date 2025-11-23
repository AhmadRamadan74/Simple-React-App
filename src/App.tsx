import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from "./Components/Contact/Contact"

function App() {
  
  // Build Routing
  const myRouuter = createBrowserRouter([
      {path: "" ,  element : <Layout/>, children : [
      {index : true , element : <Home/>} , 
      {path : "about" , element : <About/>},
      {path : "portofolio",  element : <Portfolio/>},
      {path : "contact" , element : <Contact/>}
    ]}
  ])
  
  


  return (
    <>
      <RouterProvider router = {myRouuter}/>
    </>
  )
}

export default App