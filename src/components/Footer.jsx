import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer bgcolor="white" className="footer bg-dark">
    <div className="container">
      <div className="row">

        <div className="col-lg-6 text-center text-lg-left my-auto  wow zoomIn">
          <ul className="list-inline mb-2">
            <li className="list-inline-item">
              <Link to='/admin'>Admin</Link>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <Link to="/about">Contact</Link>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <Link to="/">Terms of Use</Link>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
          <p className="text-muted small mb-4 mb-lg-0">© Plan Buddy 2018. All Rights Reserved.</p>
        </div>
        <div className="col-lg-6 text-center text-lg-right my-auto  wow zoomIn">
          <ul className="list-inline mb-0">
            <li className="list-inline-item mr-3">
              <Link to="">
                <i className="fa fa-facebook fa-2x fa-fw"></i>
              </Link>
            </li>
            <li className="list-inline-item mr-3">
              <Link to="">
                <i className="fa fa-twitter fa-2x fa-fw"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="">
                <i className="fa fa-instagram fa-2x fa-fw"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    )
}

export default Footer;
