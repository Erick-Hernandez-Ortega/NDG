import React from 'react';
// Importamos la imagen
import imagenTest_1 from '../../img/Plantilla1_test.jpg'
// Importamos estilos
import './styles/carousel_P1.css';

const Plantilla_1_carousel = () => {
    return (
        <section className='section-servicios'>
            <h2 className="text-center mb-5">Servicios</h2>

            <div className="row row-cols-2 g-4 justify-content-evenly mt-5">
                <div className="col" style={{ maxWidth: '35%' }}>
                    <div className="card">
                        <img src={imagenTest_1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col" style={{ maxWidth: '35%' }}>
                    <div className="card">
                        <img src={imagenTest_1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col" style={{ maxWidth: '35%' }}>
                    <div className="card">
                        <img src={imagenTest_1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col" style={{ maxWidth: '35%' }}>
                    <div className="card">
                        <img src={imagenTest_1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plantilla_1_carousel;