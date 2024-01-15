import React from 'react';
// @ts-ignore
import facebook from "../../icons/facebook b.ico"
// @ts-ignore
import instagram from "../../icons/instagram b.ico"
// @ts-ignore
import whatsapp from "../../icons/whats b.ico"
// @ts-ignore
import telefono from "../../icons/telefono b.ico"
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark d-flex flex-wrap justify-content-between align-items-center p-5 border-top ">
            <div className="col-md-4 d-flex align-items-center">
                <Link to={"/"} className='mb-3 me-2 mb-md-0 text-decoration-none lh-1'>
                    <p className='display-6 fw-bold text-light'>NDG</p>
                </Link>
                <span className="mb-3 mb-md-0 text-secondary">© Nestor Ruiz 2024 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
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
                    <a href="https://wa.me/3317163400" target='_blank'>
                        <img src={whatsapp} width={35} alt="" />
                    </a>
                </li>
                <li className='ms-3'>
                    <a href="tel:3325390596" target='_blank'>
                        <img src={telefono} width={35} alt="" />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;