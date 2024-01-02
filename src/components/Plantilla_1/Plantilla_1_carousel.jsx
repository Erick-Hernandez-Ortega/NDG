import React from 'react';
// Importamos la imagen
import imagenTest_1 from '../../Imagenes/Plantilla1_test.jpg'

const Plantilla_1_carousel = () => {
    return (
        <section className='mt-5'>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
                <div class="col">
                    <div class="card">
                        <img src={imagenTest_1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Reparaciones</h4>
                            <p class="card-text">En esta seccion se podrían mencionar algo de las reparaciones y hacer que cuando le den clic
                                te mande a la sección de reaparaciones donde se muestran los porductos que reparan</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={imagenTest_1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Venta</h4>
                            <p class="card-text">Esta sección igual que la anterior pero mostrando los prodcutos que venden</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={imagenTest_1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Contacto</h4>
                            <p class="card-text">Y en esta sección tal vez algo sobre el contacto e igual, cuando el den clic se puede redireccionar
                                a un formulario de contacto para que les manden correo o mensaje</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plantilla_1_carousel;