import React from 'react';
import "./styles/main.css";
import Footer from '../../components/Footer/footerComponent.tsx';
// Imagenes
// @ts-ignore
import image1 from "../../img/img_c_63e2bfcac4b25.jpg";
// @ts-ignore
import image2 from "./../../img/producto 1.jpg";
// @ts-ignore
import image3 from "./../../img/producto 2.jpg";
// @ts-ignore
import image4 from "./../../img/producto 3.jpg";
// @ts-ignore
// import image5 from "./../../img/image 1 up.jpg";

// Galeria
// @ts-ignore
// import galeria1 from './../../img/galeria/galeria 1.jpg';
// @ts-ignore
// import galeria2 from './../../img/galeria/galeria 2.jpg';
// @ts-ignore
import galeria3 from './../../img/galeria/galeria 3.jpg';
// @ts-ignore
import galeria4 from './../../img/galeria/galeria 4.jpg';
// @ts-ignore
import galeria5 from './../../img/galeria/galeria 5.jpg';
// @ts-ignore
import galeria6 from './../../img/galeria/galeria 6.jpg';
// @ts-ignore
import galeria7 from './../../img/galeria/galeria 7.jpg';
// @ts-ignore
import galeria8 from './../../img/galeria/galeria 8.jpg';
// @ts-ignore
import galeria9 from './../../img/galeria/galeria 9.jpg';
// @ts-ignore
import galeria10 from './../../img/galeria/galeria 10.jpg';
// @ts-ignore
import galeria11 from './../../img/galeria/galeria 11.jpg';
// @ts-ignore
import galeria12 from './../../img/galeria/galeria 12.jpg';
// @ts-ignore
// import galeria13 from './../../img/galeria/galeria 13.jpg';
// @ts-ignore
import galeria14 from './../../img/galeria/galeria 14.jpg';
// @ts-ignore
import galeria15 from './../../img/galeria/galeria 15.jpg';
// @ts-ignore
import whatsapp from "../../icons/whatsapp.ico"
import emailjs from '@emailjs/browser';

const Plantilla_2: React.FC = () => {
    const imagenes: Array<any> = [
        image4,
        galeria3,
        galeria4,
        galeria5,
        galeria6,
        galeria7,
        galeria8,
        galeria9,
        galeria10,
        galeria11,
        galeria12,
        galeria14,
        galeria15
    ];

    /* Hacer funcionar las animaciones */
    const sectionRef = React.useRef<HTMLDivElement>(null);

    const [servicesInView, setServicesInView]: any = React.useState(false);
    /* Modo oscuro */
    const [prefersDarkMode, setPrefersDarkMode] = React.useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    const handleDarkModeChange = (e) => {
        console.log('Dark mode change:', e.matches);
        setPrefersDarkMode(e.matches);
    };

    const handleScroll = (): void => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            setServicesInView(isVisible);
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        handleDarkModeChange(darkModeQuery);

        // Limpiar el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
            darkModeQuery.removeEventListener('change', handleDarkModeChange);
        }
    }, []);

    /* Hacer funcionar el formulario */
    const [values, setValues]: any = React.useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        message: "",
    })

    const handleChange: any = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = evt.target;

        const fieldValidations: Record<string, RegExp | ((v: string) => boolean)> = {
            user_name: /^[a-zA-Z\s]*$/,
            user_email: /[a-z0-9]+/,
            user_phone: /^\d{0,10}$/,
            message: /[A-Za-z0-9]+/,
            // Agrega otras validaciones si es necesario
        };

        // @ts-ignore
        if (fieldValidations[name] && (typeof fieldValidations[name] === 'function' ? fieldValidations[name](value) : fieldValidations[name].test(value) || value === "")) {
            setValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        }
    };
    /* EmailJS */
    const form: any = React.useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_f8xxm9r', 'template_ou49bbo', form.current, 'U-Fs-m5q0TeNGw_wu')
            .then((result) => {
                console.log(result.text);
                setValues({
                    user_name: "",
                    user_email: "",
                    user_phone: "",
                    message: "",
                })
            }, (error) => {
                console.log(error.text);
            });
    };
    /* Toast */

    return (
        <div className={`container-fluid p-0 ${prefersDarkMode ? 'bg-dark' : ''}`}>
            {/* Botón de whatsapp*/}
            <div className="whatsapp-button">
                <a href="https://wa.me/3317163400" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                    <img src={whatsapp} width={35} alt="" />
                </a>
            </div>
            {/* Botón de whatsapp*/}
            {/* contactanos comienzo */}
            <section className='image-section'>
                <div className="overlay d-flex justify-content-center align-items-center">
                    <div className="w-75">
                        <h1 className='display-3 fw-bold mb-3'>Reparación de equipo dental</h1>
                        <h5 className='mb-3'>Obtén la mejor atención y reparación en equipos dentales</h5>
                        <a type='button' href='#contactForm' className={`btn mb-3 ${prefersDarkMode ? 'btn-dark' : 'btn-primary'}`}>Contáctanos</a>
                    </div>
                </div>
            </section>
            {/* contactanos final */}

            {/* sobre nosotros comienzo */}
            <section className="w-100 row">
                <div className="col-lg-6">
                    <div className={`p-5 ${prefersDarkMode ? 'text-light' : ''}`}>
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
                    <div className="p-5">
                        <div className="w-100 d-flex justify-content-center align-items-center">
                            <img src={image1} className='w-100 rounded-4' alt="..." />
                        </div>
                    </div>
                </div>
            </section>
            {/* sobre nosotros final */}

            {/* servicios empieza */}
            <section className='w-100 p-3' style={{ background: prefersDarkMode ? '#333333' : "#ECECEC" }}>
                <h2 className={`display-6 fw-bold mb-5 text-center ${prefersDarkMode ? 'text-light' : ''}`}>Servicios</h2>

                <div className="row mb-3" ref={sectionRef}>
                    <div className="row flex-wrap-reverse justify-content-around mb-5">
                        {/* Tarjeta izquierda */}
                        <div className={`col-lg-4 col-md-6 ${servicesInView ? 'animated-service active' : 'animated-service'}`}>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card">
                                    <img src={image2} className="card-img" width={300} height={320} alt="..." />
                                    <div className="card-img-overlay">
                                        <h4 className="text-dark text-center fw-bold text-shadow"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tarjeta derecha */}
                        <div className={`col-lg-4 col-md-4 ${servicesInView ? 'animated-service active' : 'animated-service'}`}>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card" style={{ background: prefersDarkMode ? '#333333' : "#ECECEC", border: 0 }}>
                                    <h3 className={`text-center fw-bold card-title align-self-start ms-3 ${prefersDarkMode ? 'text-light' : 'text-dark'}`}>Reparación</h3>
                                    <div className="card-body">
                                        <p className={`card-text align-self-start ${prefersDarkMode ? 'text-light' : ''}`}>Descubre la excelencia en nuestros servicios de reparación. Nuestra experiencia y la
                                            satisfacción de nuestros clientes hablan por sí mismas. Estamos listos para resolver tus necesidades y responder a tus
                                            preguntas. ¡Comunícate con nosotros hoy para obtener más información o para contratar nuestros servicios de reparación
                                            confiables y de alta calidad!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row flex-wrap justify-content-around mb-5">
                        {/* Tarjeta derecha */}
                        <div className={`col-lg-4 col-md-4 ${servicesInView ? 'animated-service active' : 'animated-service'}`}>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card" style={{ background: prefersDarkMode ? '#333333' : "#ECECEC", border: 0 }}>
                                    <h3 className={`text-center fw-bold card-title align-self-start ms-3 ${prefersDarkMode ? 'text-light' : 'text-dark'}`}>Mantenimiento</h3>
                                    <div className="card-body">
                                        <p className={`card-text align-self-start ${prefersDarkMode ? 'text-light' : ''}`}>Preserva el rendimiento óptimo de
                                            tus equipos con nuestro servicio de mantenimiento de piezas.
                                            Cuidamos cada detalle para garantizar un funcionamiento impecable.
                                            Descubre la tranquilidad de contar con expertos que cuidan de tus
                                            herramientas. ¡Contáctanos ahora para asegurar la durabilidad y
                                            eficiencia de tus equipos!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tarjeta izquierda */}
                        <div className={`col-lg-4 col-md-6 ${servicesInView ? 'animated-service active' : 'animated-service'}`}>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card">
                                    <img src={image3} className="card-img" width={300} height={320} alt="..." />
                                    <div className="card-img-overlay">
                                        <h4 className="text-dark text-center fw-bold text-shadow"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row flex-wrap-reverse justify-content-around">
                        {/* Tarjeta izquierda */}
                        <div className={`col-lg-4 col-md-6 ${servicesInView ? 'animated-service active' : 'animated-service'}`}>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card">
                                    <img src={galeria15} className="card-img" width={300} height={320} alt="..." />
                                    <div className="card-img-overlay">
                                        <h4 className="text-dark text-center fw-bold text-shadow"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tarjeta derecha */}
                        <div className={`col-lg-4 col-md-4 ${servicesInView ? 'animated-service active' : 'animated-service'}`}>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card" style={{ background: prefersDarkMode ? '#333333' : "#ECECEC", border: 0 }}>
                                    <h3 className={`text-center fw-bold card-title align-self-start ms-3 ${prefersDarkMode ? 'text-light' : 'text-dark'}`}>Venta</h3>
                                    <div className="card-body">
                                        <p className={`card-text align-self-start ${prefersDarkMode ? 'text-light' : ''}`}>Explora la excelencia en tecnología dental
                                            con nuestra selección de equipos de calidad. Nos enorgullece
                                            ofrecer soluciones avanzadas y confiables para tu práctica
                                            odontológica. Descubre la innovación, el rendimiento superior y
                                            la durabilidad en cada equipo que ofrecemos. ¡Da un paso hacia el
                                            futuro de la odontología con NDG! Contáctanos para adquirir los
                                            mejores instrumentos que impulsarán tu éxito profesional.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* servicios final */}

            {/* opinion empieza */}
            <section className='w-100 p-5 mb-3'>
                <div className="d-flex justify-content-center align-content-center">
                    <figure className='w-75'>
                        <blockquote className="blockquote">
                            <p className={`display-6 ${prefersDarkMode ? 'text-light' : ''}`}>
                                Estoy muy agradecido con NDG por su servicio de reparación, mantenimiento y venta en equipos dentales.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            José Jaime Guadalupe Castañeda Ruiz
                        </figcaption>
                    </figure>
                </div>
            </section>
            {/* opinion final */}

            {/* galeria comienzo */}
            <section className='w-100 p-5 mb-3'>
                <h2 className={`display-6 fw-bold mb-4 text-center ${prefersDarkMode ? 'text-light' : ''}`}>Galeria</h2>

                <div className='d-flex justify-content-center align-content-center'>
                    <div id="carouselExampleIndicators" className="carousel slide w-75">
                        <div className="carousel-indicators">
                            {imagenes.map((imagen: any, index: number) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? 'active' : ''}
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {imagenes.map((imagen: any, index: number) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img src={imagen} className="d-block w-100" style={{ maxHeight: '300px', objectFit: 'contain' }} alt={`Imagen ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
                            <span className="visually-hidden">Anterior</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon bg-black" aria-hidden="true"></span>
                            <span className="visually-hidden">Siguiente</span>
                        </button>
                    </div>
                </div>
            </section>
            {/* galeria final */}

            {/* ubicacion comienzo */}
            <section className='w-100 p-3 m-0 row' style={{ background: prefersDarkMode ? '#333333' : "#ECECEC" }}>
                <div className="col-lg-6">
                    <div className="p-5">
                        <h2 className={`display-6 fw-bold mb-3 ${prefersDarkMode ? 'text-light' : ''}`}>Ubicación</h2>
                        <p className={`lead ${prefersDarkMode ? 'text-light' : ''}`}>
                            C. Batalla de Cuahtla 2555, Río Verde, 44700 Guadalajara, Jal., México
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="d-flex justify-content-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.268050972739!2d-103.29055762439123!3d20.699336999010846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b124fd689673%3A0x66c00c5b635603eb!2sReparaci%C3%B3n%20y%20Venta%20de%20equipos%20dentales%20NDG!5e0!3m2!1sen!2smx!4v1704580409444!5m2!1sen!2smx" width="600" height="450" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
            {/* ubicacion final */}

            {/* form comienzo */}
            <section id='contactForm' className='w-100 p-3 mb-3 row'>
                <div className="col-lg-6">
                    <div className="p-5">
                        <h2 className={`display-6 mb-3 ${prefersDarkMode ? 'text-light' : ''}`}>Contactanos</h2>
                        <p className={`lead ${prefersDarkMode ? 'text-light' : ''}`}>
                            Comunicate con nosotros utilizando el formulario de contacto a continuación.
                            Esperamos con interés escuchar de ti y ayudarte con tus necesidades.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="p-5">
                        <form ref={form}
                            className="row g-3 needs-validation"
                            onSubmit={sendEmail}>
                            <div className="col-md-4">
                                <label htmlFor="name" className={`form-label ${prefersDarkMode ? 'text-light' : ''}`}>Nombre</label>
                                <input type="text"
                                    className="form-control"
                                    id="name"
                                    name='user_name'
                                    value={values.user_name}
                                    onChange={handleChange}
                                    placeholder='Ingresa tu nombre...' required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="email" className={`form-label ${prefersDarkMode ? 'text-light' : ''}`}>Email</label>
                                <input type="email"
                                    className="form-control"
                                    id="email"
                                    name='user_email'
                                    value={values.user_email}
                                    onChange={handleChange}
                                    placeholder='Ingresa tu correo...' required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="phone" className={`form-label ${prefersDarkMode ? 'text-light' : ''}`}>Celular</label>
                                <input type="tel"
                                    className="form-control"
                                    id="phone"
                                    name='user_phone'
                                    value={values.user_phone}
                                    onChange={handleChange}
                                    placeholder='Ingresa tu numéro...' required />
                            </div>
                            <div className="form">
                                <label htmlFor="message" className={`form-label ${prefersDarkMode ? 'text-light' : ''}`}>Mensaje</label>
                                <textarea className="form-control"
                                    id="message"
                                    name='message'
                                    value={values.message}
                                    onChange={handleChange}
                                    style={{ height: 150 }}
                                    placeholder='¡Queremos escucharte! Escribe tu mensaje...' required></textarea>
                            </div>
                            <div className="col-12 mt-3">
                                <input type="submit"
                                    className={`btn ${prefersDarkMode ? 'btn-dark border border-white' : 'btn-primary'}`}
                                    value="Enviar" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* form final */}

            <Footer />
        </div>
    );
};

export default Plantilla_2;