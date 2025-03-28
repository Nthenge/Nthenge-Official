import "./App.css"
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Experience } from "./Components/Experince";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";
import { Works } from "./Components/Works";

const App = () => {
    return (
      <>
        <Home />
        <About />
        <Experience/>
        <Works/>
        <Contact/>
        <Footer />
      </>
    );
}

export default App
