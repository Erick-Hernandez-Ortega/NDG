import React from 'react';
// Importamos la imagen
import imagenTest_1 from '../../Imagenes/Plantilla1_test.jpg';
// Importamos estilos
import '../../estilos/main_Plantilla1.css';

const Plantilla_1 = () => {
    return (
        <main className='mainP1'>
            <div className="card mb-3 border-0 mb-5">
                <div className="row g-0 justify-content-center">
                    <div className="col-md-6 row align-items-center">
                        <div className="card-body">
                            <h2 className="card-title">NDG, somos la mejor opción en reparaciones de equipo de dental.</h2>
                            <p className="card-text">En este espacio podemos mostrar información de la empresa, ya sea experiencia en el
                                mercado, clientes con los que se ha trabjado, etc.</p>
                            <a href="#" class="btn btn-dark">Contactanos</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={imagenTest_1} className="img-fluid object-fit-cover rounded" alt="..." />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Plantilla_1;