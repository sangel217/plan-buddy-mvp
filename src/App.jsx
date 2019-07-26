import React from 'react';
import Home from './components/Home';
import ClinicList from './components/ClinicList';
import ReferenceList from './components/ReferenceList';
import NavBar from './components/NavBar';
import About from './components/About';
import Admin from './components/Admin';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <header className='masthead'>
        <Route exact path='/' component={Home} />
        <Route path='/clinics' component={ClinicList} />
        <Route path='/references' component={ReferenceList} />
        <Route path='/about' component={About} />
        <Route path='/admin' component={Admin} />
        </header>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
