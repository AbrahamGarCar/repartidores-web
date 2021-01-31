<style>
    .restaurant-image-container{
        width: 100%;
        height: 100px;
        position: relative;
        
    }

    .restaurant-image-container:hover .layer{
        visibility: visible;
    }

    .restaurant-image-container img{
        width: 100%;
        height: 100px;
        object-fit: cover;
        object-position: center;
    }

    .restaurant-image-container .layer{
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .5);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
    }

    .restaurant-image-about{
        line-height: 8px;
    }

    .restaurant-image-about p:nth-child(1){
        font-weight: bold;
    }

    .restaurant-image-about > p:nth-child(2){
        font-weight: lighter;
    }

    .btn-menu{
        padding: 5px 10px;
        border: none;
        background-color: rosybrown;
        color: white;
    }

</style>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1>Restaurantes</h1>
                    <p>Estos restaurantes se encuentran disponibles cercas te tu ubicacion</p>

                    <p v-if="location != null">Your location data is {{ location.coords.latitude }}, {{ location.coords.longitude}}</p>
                    <p v-if="errorStr != null">Requerimos acceder a tu ubicacion para poder mostrarte el catalogo de restaurantes cercas de tu ubicacion, por favor ajusta tu configuracion en el  navegador.</p>
                </div>
            </div>

            <div class="row mt-4" v-for="(item, index) in [1, 2, 3, 4]">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-5 restaurant-image-container p-0">
                            <img width="100%" src="https://lh3.googleusercontent.com/proxy/AU7RUwkqwQjdjyHPirg4cs1ukFDsa2VG5wlDle-0L8qJh9daMpDEW55wLGLjr1KmIAmW8U_iiYwH4FgpoHyscY4GuGKDE9obhY6cOFReeFw16I1_YGt4" alt="">
                            <div class="layer">
                                <button class="btn-menu">Menu</button>
                            </div>
                        </div>
                        <div class="col-md-7 restaurant-image-about d-flex justify-content-center align-items-start flex-column">
                            <p>KFC (Dostoievsky 691)</p>
                            <p>$$$ <span>Alistas & Pollo</span></p>
                            <p>MX$15</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-5 restaurant-image-container p-0">
                            <img width="100%" src="https://d1ralsognjng37.cloudfront.net/0607eb5e-c589-48ab-a3a7-867b74f4a43a.jpeg" alt="">
                        </div>
                        <div class="col-md-7 restaurant-image-about d-flex justify-content-center align-items-start flex-column">
                            <p>Carbons Burguer - Plaza Puerta Norte</p>
                            <p>$$$ <span>Hamburguesas</span></p>
                            <p>MX$25</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {

    name: 'Restaurants',

    data(){
        return{
            location:null,
            gettingLocation: false,
            errorStr:null
        }
    },

    created(){
        this.getUbication()
    },

    methods: {
        getUbication(){
            try {
                //do we support geolocation
                if(!("geolocation" in navigator)) {
                    this.errorStr = 'Geolocation is not available.';
                    return;
                }

                this.gettingLocation = true;

                // get position
                navigator.geolocation.getCurrentPosition(pos => {
                    this.gettingLocation = false;
                    this.location = pos;
                }, err => {
                    this.gettingLocation = false;
                    this.errorStr = err.message;

                    console.log(err);
                })

            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>