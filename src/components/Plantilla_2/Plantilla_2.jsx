import React from 'react';
import "./styles/main.css";
import image1 from "../../img/img_c_63e2bfcac4b25.jpg";
import image2 from "./../../img/pexels-daniel-frank-305568.jpg";
import image3 from "./../../img/pexels-daniel-frank-305566.jpg";
import image4 from "./../../img/pexels-daniel-frank-305567.jpg";
import image5 from "./../../img/pexels-cedric-fauntleroy-4269503.jpg";
import image6 from "./../../img/pexels-cedric-fauntleroy-4269690.jpg";
import image7 from "./../../img/pexels-mali-maeder-69686.jpg";

const Plantilla_2 = () => {
    return (
        <div className="container-fluid p-0">
            {/* contactanos comienzo */}
            <section className='image-section'>
                <div className="overlay d-flex justify-content-center align-items-center">
                    <div className="w-75">
                        <h1 className='display-3 fw-bold mb-3'>Reparación de equipo dental</h1>
                        <h5 className='mb-3'>Obtén la mejor atención y reparación en equipos dentales</h5>
                        <button type='button' className="btn btn-primary mb-3">Contáctanos</button>
                    </div>
                </div>
            </section>
            {/* contactanos final */}

            {/* sobre nosotros comienxo */}
            <section className='w-100 row'>
                <div className="col-lg-6">
                    <div className="about-us-padding">
                        <h2 className='display-6 fw-bold mb-3'>Sobre nosotros</h2>
                        <p className='lead'>
                            Bienvenidos a NDG, su aliado confiable en el mundo de la salud dental en Jalisco, México.
                            <br />
                            <br />
                            En NDG, nos enorgullece ofrecer servicios especializados en la reparación y mantenimiento de equipos dentales,
                            respaldados por años de experiencia y un compromiso inquebrantable con la excelencia.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-us-padding">
                        <div className="w-100">
                            <img src={image1} className='w-100 rounded-4' alt="..." />
                        </div>
                    </div>
                </div>
            </section>
            {/* sobre nosotros final */}

            {/* servicios empieza */}
            <section className='w-100 p-3'>
                <h2 className='display-6 fw-bold mb-3 text-center'>Servicios</h2>

                <div className="row mb-3">
                    <div className="col-lg-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="card">
                                <img src={image2} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h4 className="text-dark text-center fw-bold text-shadow">Reparación</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="card">
                                <img src={image3} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h4 className="text-dark text-center fw-bold text-shadow">Mantenimiento</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="card">
                                <img src={image4} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h4 className="text-dark text-center fw-bold text-shadow">Venta</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-lg-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="card">
                                <img src={image2} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h4 className="text-dark text-center fw-bold text-shadow">Reparación</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="card">
                                <img src={image3} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h4 className="text-dark text-center fw-bold text-shadow">Mantenimiento</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="card">
                                <img src={image4} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h4 className="text-dark text-center fw-bold text-shadow">Venta</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* servicios final */}

            {/* opinion empieza */}
            <section className='w-100 p-3 mb-3'>
                <div className="d-flex justify-content-center align-content-center">
                    <figure className='w-75'>
                        <blockquote className="blockquote">
                            <p className='display-6'>
                                Estoy muy agradecida con NDG por su servicio de reparación y equipos dentales.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Andrea
                        </figcaption>
                    </figure>
                </div>
            </section>
            {/* opinion final */}

            {/* galeria comienzo */}
            <section className='w-100 p-3 mb-3'>
                <h2 className='display-6 fw-bold mb-3 text-center'>Galeria</h2>

                <div className='d-flex justify-content-center align-content-center'>
                    <div id="carouselExampleIndicators" className="carousel slide w-100">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner" style={{ maxHeight: "500px" }}>
                            <div className="carousel-item active">
                                <img src={image5} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image6} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image7} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Anterior</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Siguiente</span>
                        </button>
                    </div>
                </div>
            </section>
            {/* galeria final */}

            {/* ubicacion comienzo */}
            <section className='w-100 p-3 mb-3 row'>
                <div className="col-lg-6">
                    <div className="about-us-padding">
                        <h2 className='display-6 fw-bold mb-3'>Ubicación</h2>
                        <p className='lead'>
                            GDL, Jalisco, México
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="d-flex justify-content-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.268050972739!2d-103.29055762439123!3d20.699336999010846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b124fd689673%3A0x66c00c5b635603eb!2sReparaci%C3%B3n%20y%20Venta%20de%20equipos%20dentales%20NDG!5e0!3m2!1sen!2smx!4v1704580409444!5m2!1sen!2smx" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
            {/* ubicacion final */}

            {/* form comienzo */}
            <section className='w-100 p-3 mb-3 row'>
                <div className="col-lg-6">
                    <div className="about-us-padding">
                        <form className="row g-3 needs-validation" noValidate>
                            <div className="col-md-4">
                                <label htmlFor="validationCustom01" className="form-label">First name</label>
                                <input type="text" className="form-control" id="validationCustom01" defaultValue="Mark" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationCustom02" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="validationCustom02" defaultValue="Otto" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                    <div className="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationCustom03" className="form-label">City</label>
                                <input type="text" className="form-control" id="validationCustom03" required />
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="validationCustom04" className="form-label">State</label>
                                <select defaultValue={""} className="form-select" id="validationCustom04" required>
                                    <option disabled value="">Choose...</option>
                                    <option>...</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="validationCustom05" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="validationCustom05" required />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label" htmlFor="invalidCheck">
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
                        <h2 className='display-6 fw-bold mb-3'>Contactanos</h2>
                        <p className='lead'>
                            Comunixate con nosotros utilizando el formulario de contacto a continuacion.
                            Esperamos con interés escuchar de ti y ayudarte con tus necesidades.
                        </p>
                    </div>
                </div>
            </section>
            {/* form final */}

            <footer>
                <p className='display-1'>FOOTER CHIDO</p>
            </footer>
        </div>

    );
};

export default Plantilla_2;