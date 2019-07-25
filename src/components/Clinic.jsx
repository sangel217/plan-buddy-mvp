import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

function Clinic(props){
    return(
        <div>
            <div className="container">
            <div className="row">
                <div className="col-md-7">
                <Link to="">
                    <img width="700" height="300"className="img-fluid rounded mb-3 mb-md-0" src={props.image} alt=""></img>         
                </Link>
                </div>
                <div className="col-md-5">
                <strong><h4>{props.name}</h4></strong>
                <li><i className="fa fa-home"></i> {props.address}</li>
                <li>  <i className="fa fa-phone"></i> {props.phone}</li>
                <li>  <i className="fa fa-star"></i> {props.rate}</li>
                <li><i className="fa fa-globe"></i><a href={props.website}> website</a></li>
                <br/>
                <button className="favorite" >Bookmark</button>
                <button className="favorite">Edit</button>
                </div>
            </div>
            <hr/>
            </div>
        </div>
    );
}

Clinic.propTypes={
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
}

export default Clinic;