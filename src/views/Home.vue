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
                <div class="col-md-6 d-flex justify-content-center align-items-center flex-column delivery-man-image">
                    <h2>Siempre alguien dispuesto a ir por tu comida.</h2>
                    <h5>¿Que esperas para disfrutar de algo delicioso?</h5>
                </div>
                <div class="col-md-6 delivery-man-image">
                    <img src="https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1484&q=80" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>