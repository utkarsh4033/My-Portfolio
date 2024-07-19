import About from "./components/About";
import Contact from "./components/Contact";
import Experince from "./components/Experince";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Experince/>
        <Contact/>
        <SocialLinks/>
    </>
  );
}

export default App;
