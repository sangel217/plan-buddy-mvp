import React from 'react';
import Home from './components/Home';
import ClinicList from './components/ClinicList';
import ReferenceList from './components/ReferenceList';
import About from './components/About';
import Admin from './components/Admin';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { directive } from '@babel/types';

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/clinics' component={ClinicList} />
        <Route path='/references' compnent={ReferenceList} />
        <Route path='/about' component={About} />
        <Route path='/admin' component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
