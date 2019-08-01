import React from 'react';
import Home from './components/Home/Home';
import ClinicList from './components/Clinic/ClinicList';
import ReferenceList from './components/Reference/ReferenceList';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Admin from './components/Admin/Admin';
import Footer from './components/Footer/Footer';
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
