import logo from './logo.svg';
import './App.css';

/* my imports */
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./variables.css";
import Header from "./components/header.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import ServicesItemOne from "./pages/services/servicesItemOne.jsx";
import ServicesItemTwo from "./pages/services/servicesItemTwo.jsx";
import ServicesItemThree from "./pages/services/servicesItemThree.jsx";
import ServicesItemFoor from "./pages/services/servicesItemFoor.jsx";
import Contact from "./pages/contact.jsx";
import Devis from "./pages/devis.jsx";


function App() {
  let page = ""
  switch(window.location.pathname){
    case "/altalys/":
      page = <Home/>;
      break;
    case "/altalys/home":
      page = <Home/>;
      break;
    case "/altalys/about":
      page=<About/>
      break;
    case "/servicesItemOne":
      page=<ServicesItemOne/>
      break;
    case "/servicesItemTwo":
      page=<ServicesItemTwo/>
      break;
    case "/servicesItemThree":
      page=<ServicesItemThree/>
      break;
    case "/servicesItemFoor":
      page=<ServicesItemFoor/>
      break;
    case "/contact":
      page=<Contact/>
      break;
    case "/devis":
      page=<Devis/>
      break;
      
  }
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      {page}
      <Footer/>


    </div>
  );
}

export default App;
