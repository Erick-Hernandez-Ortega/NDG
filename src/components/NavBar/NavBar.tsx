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
    /* Modo oscuro */
    const [prefersDarkMode, setPrefersDarkMode] = React.useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    const handleDarkModeChange = (e) => {
        console.log('Dark mode change:', e.matches);
        setPrefersDarkMode(e.matches);
    };

    React.useEffect(() => {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        handleDarkModeChange(darkModeQuery);

        // Limpiar el listener cuando el componente se desmonta
        return () => {
            darkModeQuery.removeEventListener('change', handleDarkModeChange);
        }
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg px-5 sticky-top ${prefersDarkMode ? 'bg-dark' : 'bg-body-tertiary'}`}>
            <div className="d-flex flex-wrap justify-content-between align-items-center w-100">
                <Link to={"/"} className='navbar-brand link_navbar'>
                    <p className={`display-6 fw-bold ${prefersDarkMode ? 'text-light' : ''} `}>NDG</p>
                </Link>

                <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
                    <li className='ms-3'>
                        <a href="https://www.facebook.com/Reparacion.NDG13?mibextid=ZbWKwL" target='_blank'>
                            <img src={facebook} width={35} alt="" style={{ filter: prefersDarkMode ? 'invert(1)' : 'invert(0)' }} />
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a href="https://www.instagram.com/ndg20_21/?igsh=NGk3czZkOWFsZXJx" target='_blank'>
                            <img src={instagram} width={35} alt="" style={{ filter: prefersDarkMode ? 'invert(1)' : 'invert(0)' }} />
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a href="https://wa.me/3317163400" target='_blank'>
                            <img src={whatsapp} width={35} alt="" style={{ filter: prefersDarkMode ? 'invert(1)' : 'invert(0)' }} />
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a href="tel:3325390596" target='_blank'>
                            <img src={telefono} width={35} alt="" style={{ filter: prefersDarkMode ? 'invert(1)' : 'invert(0)' }} />
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default NavBar;