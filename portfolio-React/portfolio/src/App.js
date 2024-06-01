
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Nav from "./Components/Navigation/Nav";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";


function App() {
  return (
    <div className="App">
     <Nav/>
     <Intro/>
     <Skills/>
     <Works/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
