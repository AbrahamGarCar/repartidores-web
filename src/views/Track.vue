<style>
    .main-track{
        width: 100%;
        height: calc(100vh - 80px);
    }

    .card {
        z-index: 0;
        background-color: #ECEFF1;
        padding-bottom: 20px;
        margin-top: 90px;
        margin-bottom: 90px;
        border-radius: 10px
    }

    .top {
        padding-top: 40px;
        padding-left: 13% !important;
        padding-right: 13% !important
    }

    #progressbar {
        margin-bottom: 30px;
        overflow: hidden;
        color: #455A64;
        padding-left: 0px;
        margin-top: 30px
    }

    #progressbar li {
        list-style-type: none;
        font-size: 13px;
        width: 25%;
        float: left;
        position: relative;
        font-weight: 400
    }

    #progressbar .step0:before {
        font-family: FontAwesome;
        content: "\f10c";
        color: #fff
    }

    #progressbar li:before {
        width: 40px;
        height: 40px;
        line-height: 45px;
        display: block;
        font-size: 20px;
        background: #C5CAE9;
        border-radius: 50%;
        margin: auto;
        padding: 0px
    }

    #progressbar li:after {
        content: '';
        width: 100%;
        height: 12px;
        background: #C5CAE9;
        position: absolute;
        left: 0;
        top: 16px;
        z-index: -1
    }

    #progressbar li:last-child:after {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        position: absolute;
        left: -50%
    }

    #progressbar li:nth-child(2):after,
    #progressbar li:nth-child(3):after {
        left: -50%
    }

    #progressbar li:first-child:after {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        position: absolute;
        left: 50%
    }

    #progressbar li:last-child:after {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px
    }

    #progressbar li:first-child:after {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px
    }

    #progressbar li.active:before,
    #progressbar li.active:after {
        background: #651FFF
    }

    #progressbar li.active:before {
        font-family: FontAwesome;
        content: "\f00c"
    }

    .icon {
        width: 60px;
        height: 60px;
        margin-right: 15px
    }

    .icon-content {
        padding-bottom: 20px
    }

    .btn-search{
        border: none;
        border-radius: 5px;
        background-color: black;
        color: white;
    }

    @media screen and (max-width: 992px) {
        .icon-content {
            width: 50%
        }
    }
</style>

<template>
    <section class="col-md-12">
        <div class="main-track d-flex justify-content-center align-items-center flex-column">
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-md-6 text-center">
                        <input v-model="orderNumber" placeholder="Numero de orden" type="number" width="100%" class="form-control rounded-4">
                        <button class="btn-search mt-2" @click="getOrder">BUSCAR</button>
                    </div>
                </div>
            </div>
            <div v-if="order != null" class="container">
                <div class="card rounded-0">
                    <div class="row d-flex justify-content-between px-3 top">
                        <div class="d-flex">
                            <h5>ORDEN <span class="text-primary font-weight-bold">#{{ order.orderNumber }}</span></h5>
                        </div>
                        <div class="d-flex flex-column text-sm-right">
                            <p v-if="order.process >= 3" class="mb-0">Tiempo aproximado de llegada: <span>{{ order.infoDestination.duration }}</span></p>
                            <p v-else class="mb-0">Tiempo aproximado de llegada: <span><div class="spinner-border spinner-border-sm" role="status">
                            <span class="sr-only">Loading...</span>
                            </div></span>
                            </p>
                        </div>
                    </div> <!-- Add class 'active' to progress -->
                    <div class="row d-flex justify-content-center">
                        <div class="col-12">
                            <ul id="progressbar" class="text-center">
                                <li :class="[order.process >= 1 ? 'active' : '']" class="step0"></li>
                                <li :class="[order.process >= 2 ? 'active' : '']" class="step0"></li>
                                <li :class="[order.process >= 3 ? 'active' : '']" class="step0"></li>
                                <li :class="[order.process >= 4 ? 'active' : '']" class="step0"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row justify-content-between top">
                        <div class="row d-flex icon-content"> <i style="font-size: 45px; margin-right: 10px;" class="fas fa-edit"></i>
                            <div class="d-flex flex-column">
                                <p class="font-weight-bold">Orden<br>procesada</p>
                            </div>
                        </div>
                        <div class="row d-flex icon-content"> <i style="font-size: 45px; margin-right: 10px;" class="fas fa-check-circle"></i>
                            <div class="d-flex flex-column">
                                <p class="font-weight-bold">Orden<br>lista</p>
                            </div>
                        </div>
                        <div class="row d-flex icon-content"> <i style="font-size: 45px; margin-right: 10px;" class="fas fa-motorcycle"></i>
                            <div class="d-flex flex-column">
                                <p class="font-weight-bold">Orden<br>en camino</p>
                            </div>
                        </div>
                        <div class="row d-flex icon-content"> <i style="font-size: 45px; margin-right: 10px;" class="fas fa-home"></i>
                            <div class="d-flex flex-column">
                                <p class="font-weight-bold">Orden<br>finalizada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
//Firebase
import { firebase, db, firestore } from '@/firebase'

export default {
    name: 'Track',

    data() {
        return {
            orderNumber: '',
            order: null,
        }
    },

    created() {
        
    },

    methods: {
        async getOrder(){
            try {
                console.log('daleeee');
                let order = Number(this.orderNumber)

                let response = await db.collection('orders')
                                        .where('orderNumber', '==', order)
                                        .onSnapshot(query => {
                                            query.forEach(doc => {
                                                this.order = doc.data()
                                            })
                                        })
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>