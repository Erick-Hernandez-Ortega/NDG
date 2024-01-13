import React from 'react';
import { Link } from "react-router-dom";
// @ts-ignore
import facebook from "../../icons/facebook.ico"
// @ts-ignore
import instagram from "../../icons/instagram.ico"
// @ts-ignore
import whatsapp from "../../icons/whatsapp.ico"
// @ts-ignore
import telefono from "../../icons/telefono.ico"

const NavBar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
            <div className="d-flex flex-wrap justify-content-between align-items-center w-100">
                <Link to={"/"} className='navbar-brand link_navbar'>
                    <p className='display-6 fw-bold'>NDG</p>
                </Link>

                <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
                    <li className='ms-3'>
                        <a href="https://www.facebook.com/Reparacion.NDG13?mibextid=ZbWKwL" target='_blank'>
                            <img src={facebook} width={35} alt="" />
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a href="https://www.instagram.com/ndg20_21/?igsh=NGk3czZkOWFsZXJx" target='_blank'>
                            <img src={instagram} width={35} alt="" />
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a href="#" target='_blank'>
                            <img src={whatsapp} width={35} alt="" />
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a href="tel:3325390596" target='_blank'>
                            <img src={telefono} width={35} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;