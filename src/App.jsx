import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./04_mini_project.html/pages/pages/Signup";
import Login from "./04_mini_project.html/pages/pages/Login";
import Footer from "./04_mini_project.html/pages/components/Footer";
import Headerrr from "./04_mini_project.html/pages/components/Headerrr";
import Home from "./04_mini_project.html/pages/pages/Home";
import Mens from "./04_mini_project.html/pages/pages/Mens";
import Womens from "./04_mini_project.html/pages/pages/Womens";
import Kids from "./04_mini_project.html/pages/pages/Kids";
import Contact from "./04_mini_project.html/pages/pages/Contact";
import About from "./04_mini_project.html/pages/pages/About";
import Blog from "./04_mini_project.html/pages/pages/Blog";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./04_mini_project.html/pages/pages/Profile";

function App() {

  return (
    <>

      {/* Project */}
      <BrowserRouter>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<><Headerrr /> <Home /> <Footer />  </>}></Route>
          <Route path="/login" element={<> <Headerrr /><Login /> <Footer />  </>}></Route>
          <Route path="/signup" element={<> <Headerrr /> <Signup /> <Footer />  </>}></Route>

          <Route path="/home" element={<><Headerrr /> <Home /> <Footer />  </>}></Route>
          <Route path="/men" element={<><Headerrr /> <Mens /> <Footer />  </>}></Route>
          <Route path="/women" element={<> <Headerrr /><Womens /> <Footer />  </>}></Route>
          <Route path="/kid" element={<><Headerrr /> <Kids /> <Footer />  </>}></Route>
          <Route path="/contact" element={<> <Headerrr /> <Contact /> <Footer />  </>}></Route>
          <Route path="/about" element={<> <Headerrr /><About /> <Footer />  </>}></Route>
          <Route path="/blog" element={<><Headerrr /> <Blog /> <Footer />  </>}></Route>
          <Route path="/profile" element={<> <Headerrr /><Profile /> <Footer />  </>}></Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
