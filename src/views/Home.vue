<style scoped>
    .image-one-container{
        width: 100%;
        height: 650px;
        position: relative;
    }

    .image-one-container img{
        width: 100%;
        height: 650px;
        top: 0;
        left: 0;
        position: absolute;
        object-fit: cover;
        object-position: center;
        z-index: 50;
    }

    .image-one-container .layer{
        position: absolute;
        top: 0;
        left: 0;
        width: 40%;
        height: 650px;
        background-color: rgba(166, 3, 3, 0.9);
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        color: white;
        padding: 10px;
    }

    .btn-order{
        padding: 10px 20px;
        color: white;
        background-color: #F29F05;
        border-radius: 0px;
        border: none;
    }

    .delivery-man-image{
        width: 100%;
        height: 400px;
    }

    .delivery-man-image img{
        width: 100%;
        height: 400px;
        position: absolute;
        object-fit: cover;
    }

    .card-restaurant{
        width: 350px;
        background-color: rgb(166, 3, 3);
        border-radius: 5px;
        color: white;
    }

    .card-image{
        width: 350px;
        border-radius: 5px 5px 0 0;
    }

    .card-image img{
        width: 350px;
        height: 300px;
        object-fit: cover;
        object-position: center;
        border-radius: 5px 5px 0 0;
    }

    .card-content{
        padding: 10px;
    }

    .image-fluid-container{
        width: 100%;
        height: 1000px;
        background-image: url('https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80');
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
    }

    .image-fluid-container .layer{
        width: 100%;
        height: 1000px;
        position: absolute;
        background-color: rgba(0, 0, 0, .6);
        z-index: 50;
    }

    .image-fluid-content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        width: 100%;
        color: white;
        z-index: 100;
    }

</style>

<template>
    <section>
        <!-- banner section -->
        <div class="container-fluid banner-1">
            <div class="row">
                <div class="col-md-12 image-one-container">
                    <img src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" alt="">
                    <div class="layer">
                        <h2>FASSST</h2>
                        <h4>SERVICE - SATISFY - SPECIALIZE</h4>

                        <button class="btn-order">ORDENA AHORA</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-4">
            <div class="row">
                <div class="col-md-6 delivery-man-image">
                    <span style="color: orange; font-weight: bold;">-¿Que es fassst?</span>
                    <div class="mt-2">
                        <h2 style="font-weight: bold;">Un servicio mas barato para que disfrutes sin remordimiento.</h2>
                        <div class="mt-2">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam officiis, atque dolore dolorem, fugiat autem temporibus, quo officia odit placeat nulla deserunt sunt voluptatem nobis at accusamus ad. Voluptatum, dolorum?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam officiis, atque dolore dolorem.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 delivery-man-image">
                    <img src="https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1484&q=80" alt="">
                </div>
            </div>
        </div>

        <div class="container-fluid mt-4" style="background-color: #FEFAF9;">
            <div class="row">
                <div class="col-md-12">
                    <div class="container">
                        <div class="row mt-4">
                            <div class="col-md-6">
                                <span style="color: orange; font-weight: bold;">-¿A quienes puedes encontrar?</span>
                                <div class="mt-2">
                                    <h2 style="font-weight: bold;">Ellos han confiado <br> en nosotros.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-12">
                    <carousel :perPage="4">
                        <slide v-for="(item, index) in [1, 1, 1, 1]" :key="index">
                            <div class="card-restaurant">
                                <div class="card-image">
                                    <img src="https://www.estrategiaynegocios.net/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=odNE8597L9WUhl7vSAQP5c$daE2N3K4ZzOUsqbU5sYtnNf8YBHb2I5k_VvfAtrW46FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg" alt="">
                                </div>
                                <div class="card-content">
                                    <h4 style="font-weight: bold;">Burger King</h4>
                                    <small>Comida rapida</small>

                                    <div class="mt-2">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto optio, velit eveniet, officiis quod maxime sint facilis deleniti totam laudantium perspiciatis, voluptas eos debitis. Quos dolore blanditiis minus architecto?</p>
                                        <button class="btn btn-block btn-info rounded-0">Ordenar</button>
                                    </div>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-md-12 image-fluid-container">
                    <div class="layer" />
                    <div class="image-fluid-content">
                        <h2>Lorem Ipsum</h2>

                        <div style="width: 50%;">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad quo veritatis optio at culpa incidunt earum exercitationem, quisquam eius quidem, blanditiis alias repellat aliquam, quam placeat asperiores tempora maxime?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>