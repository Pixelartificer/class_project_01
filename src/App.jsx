import {
  createRoutesFromElements, createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pages from "./pages/Pages";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Home />}> </Route>
    <Route path="/about" element={<About />}> </Route>
    <Route path="/pages" element={<Pages />}> </Route>
    <Route path="/services" element={<Services />}> </Route>
    <Route path="/blog" element={<Blog />}> </Route>
    <Route path="/contact" element={<Contact />}> </Route>
    </Route>
      
    
    
  )
);




const App = () => {
  return (
    <>
   <RouterProvider router={router} />
    </>
  );
};

export default App;
