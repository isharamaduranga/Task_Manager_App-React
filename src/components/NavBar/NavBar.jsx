import React from 'react';
import png from"./logo.png"
import {Link} from "react-router-dom";
function NavBar(props) {
    return (
        <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
            <div className="container-fluid">

                <a className="navbar-brand" href="#">
                    <img src={png} alt="Logo" width="40" height="40"
                         className="d-inline-block align-text-top" /> Task Manager
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                            <Link className="nav-link active " aria-current="page" to="/" style={{color:'deeppink'}}>Tasks</Link>
                        </li>
                        <li className="nav-item fs-5">
                            <Link className="nav-link" to="/addtask" style={{color:'lime'}}>New Tasks</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;