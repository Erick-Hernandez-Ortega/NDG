import React from 'react';

const Footer: React.FC = () => {
    return (
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
    );
};

export default Footer;