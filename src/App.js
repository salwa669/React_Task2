
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './pages/header/header';
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Products from "./pages/products/products";
import ProductDetails from "./pages/products/productdetails";
function App() {
  return (
    <>
    <div className="container">

    <Router>
    <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/products" exact component={Products} />
        <Route path="/details/:id" component={ProductDetails}/>
      </Switch>
    </Router>


    </div>
 
  </>
  );
}

export default App;
