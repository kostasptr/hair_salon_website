import React from 'react';
import './App.css';
import { BrowserRouter as Routing, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Products from './components/Products';
import Hair from './components/Hair';
import Cafe from './components/Cafe';
import Book from './components/Book';
import Home from './components/Home';
import History from './components/History';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (

    <Routing>
      <div className="App"> 
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/hair" component={Hair}/>
          <Route path="/cafe" component={Cafe}/>
          <Route path="/products" component={Products}/>
          <Route path="/book" component={Book}/>
          <Route path="/history" component={History}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer/>
      </div>
    </Routing>
    
  );
}

export default App;
