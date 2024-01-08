import React from 'react';
// Importamos la imagen
import imagenTest_1 from '../../img/Plantilla1_test.jpg'
// Importamos estilos
import './styles/carousel_P1.css';

const Plantilla_1_carousel = () => {
    return (
        <section className='section-servicios'>
            <h2 className="text-center mb-5">Servicios</h2>

            <div className="row row-cols-2 g-4 justify-content-evenly mt-5 mb-5">
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
            <article>
                <h2 className="text-center mb-5">Ubicación</h2>

                <div className="card mb-3 mt-5 border-0">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.268050972739!2d-103.29055762439123!3d20.699336999010846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b124fd689673%3A0x66c00c5b635603eb!2sReparaci%C3%B3n%20y%20Venta%20de%20equipos%20dentales%20NDG!5e0!3m2!1sen!2smx!4v1704580409444!5m2!1sen!2smx" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <footer>
                {/* form comienzo */}
                <section className='w-100 p-3 row bg-dark'>
                    <div className="col-lg-6">
                        <div className="about-us-padding">
                            <form className="row g-3 needs-validation" noValidate>
                                <div className="col-md-4">
                                    <label htmlFor="validationCustom01" className="form-label text-white">First name</label>
                                    <input type="text" className="form-control" id="validationCustom01" defaultValue="Mark" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationCustom02" className="form-label text-white">Last name</label>
                                    <input type="text" className="form-control" id="validationCustom02" defaultValue="Otto" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationCustomUsername" className="form-label text-white">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationCustom03" className="form-label text-white">City</label>
                                    <input type="text" className="form-control" id="validationCustom03" required />
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationCustom04" className="form-label text-white">State</label>
                                    <select defaultValue={""} className="form-select" id="validationCustom04" required>
                                        <option disabled value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationCustom05" className="form-label text-white">Zip</label>
                                    <input type="text" className="form-control" id="validationCustom05" required />
                                    <div className="invalid-feedback">
                                        Please provide a valid zip.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input text-white" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label text-white" htmlFor="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-us-padding">
                            <h2 className='display-6 fw-bold mb-3 text-white'>Contactanos</h2>
                            <p className='lead text-white'>
                                Comunixate con nosotros utilizando el formulario de contacto a continuacion.
                                Esperamos con interés escuchar de ti y ayudarte con tus necesidades.
                            </p>
                        </div>
                    </div>
                </section>
                {/* form final */}
            </footer>
        </section>
    );
};

export default Plantilla_1_carousel;