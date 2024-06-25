import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Playstation from './components/pages/Playstation';
import Steam from './components/pages/Steam';
import Xbox from './components/pages/Xbox';
import SignUp from './components/pages/SignUp';
import Howitworks from './components/pages/HowitWorks';
import Authors from './components/pages/Authors';
import Code from './components/pages/Code';
import Images from './components/pages/Images';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/playstation' component={Playstation} />
          <Route path='/steam' component={Steam} />
          <Route path='/xbox' component={Xbox} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/howitworks' component={Howitworks} />
          <Route path='/authors' component={Authors} />
          <Route path='/code' component={Code} />
          <Route path='/images' component={Images} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
