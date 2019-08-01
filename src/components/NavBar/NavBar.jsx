import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './NavBar.css';

function NavBar(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link to="/" className="navbar-brand" >
                    <h3 className="my-heading ">Plan<span className="bg-main">Buddy</span></h3>
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa fa-bars mfa-white"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">

                <ul className="navbar-nav ml-auto">
                    <li className="nav-link">
                    <Link to="/clinics" className="btn btn-primary btn-block btn-register" >Clinics</Link>
                    </li>
                    <li className="nav-link">
                    <Link to="/references" className="btn btn-primary btn-block btn-register">References</Link>
                    </li>
                    <li className="nav-link">
                    <Link to="/about" id="btn1" className="btn btn-primary btn-block btn-register">About</Link>
                    </li>
                </ul>
                </div>

            </nav>
        </div>
    );
}

export default NavBar;