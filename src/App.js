import "./index.css";
import Header from "./Header/header";
import About from "./About/about";
import Experience from "./Experience/experience";
import Services from "./Services/services";
import Porfolio from "./Porfolio/Porfolio";
import Testimonials from "./testimonials/testimonials";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";
import Navigator from "./Navigator/navigator";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Services />
      <Porfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <Navigator />
    </div>
  );
}

export default App;
