import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './component/basic/Headerfile/Header';
import Footer from './component/basic/Footer/Footer';
import Home from './component/basic/Home';
import Contact from './component/basic/Contact/Contact';
import Service from './component/basic/Service';
import About from './component/basic/About/About';
import Restaurant from "./component/basic/Restaurant"
import Search from"./component/basic/Search"
import Signup from './component/basic/Login/Signup/Signup';
import OrderNow from"./component/basic/OrderNow/OrderNow";
import Login from './component/basic/Login/Signup/Login';

const App = () => {
  return (
  
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/Search" exact>
          <Search />
        </Route>
        <Route path="/service" exact>
          <Service />
        </Route>
        <Route path="/Signup" exact>
          <Signup />
        </Route>
        <Route path="/OrderNow" exact>
          <OrderNow />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
      </Switch>




      {/* <Restaurant /> */}
      <Footer />
    </Router>

  );
};

export default App;
