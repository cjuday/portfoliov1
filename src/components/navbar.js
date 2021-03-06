import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="index"><h1>Uday</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={ faBars } style={{color: "#ffffff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="index">Greetings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="link">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="link">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="link">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="link">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="link">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
