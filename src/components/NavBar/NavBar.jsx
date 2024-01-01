import React from 'react';
// Importamos el Link para la navegación
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to={"/"} className='navbar-brand link_navbar'>NDG</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active">Plantilla 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/P2"} className="nav-link active">Plantilla 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/P3"} className="nav-link active">Plantilla 3</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Contacto</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Servicios
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Reparaciones</a></li>
                                <li><a className="dropdown-item" href="#">Ventas</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;