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

    

    .restaurant-image-about p:nth-child(1){
        font-size: 18px;
        font-weight: bold;
    }

    .btn-menu{
        padding: 5px 10px;
        border: none;
        background-color: rosybrown;
        color: white;
    }

    .vbga-results{
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .vbga-results li{
        margin-top: 10px;
        background-color: #FEFAF9;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
    }

    .active{
        background-color: rgb(166, 3, 3) !important;
    }

    #v-pills-home-tab{
        color: black !important;
    }
</style>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1>Restaurantes</h1>
                    
                    <div class="col-md-6 offset-md-3">
                        <google-places-autocomplete
                            class="rounded-0"
                            @resultChanged="placeDetail => place = placeDetail"
                            @resultCleared="() => place = null"
                            >
                            <div class="rounded-0" slot="input" slot-scope="{ context, events, actions }">
                                <label for="locationInput">Dinos cual es tu dirección:</label>
                                <input
                                v-model="context.input"
                                @focus="events.inputHasReceivedFocus"
                                @input="events.inputHasChanged"
                                @keydown.enter.prevent="actions.selectItemFromList"
                                @keydown.down.prevent="actions.shiftResultsSelection"
                                @keydown.up.prevent="actions.unshiftResultsSelection"
                                type="search"
                                id="locationInput"
                                class="form-control"
                                placeholder="Escribe tu dirección ..."
                                >
                            </div>
                        </google-places-autocomplete>
                    </div>

                    <p class="mt-4">Estos restaurantes se encuentran disponibles cercas te tu ubicación</p>
                </div>
            </div>

            <div class="row mt-2" v-if="restaurants != null" :key="key">
                <div class="col-md-6 mt-4" v-for="(item, index) in restaurants" :key="index">
                    <div class="row">
                        <div class="col-md-5 restaurant-image-container p-0">
                            <img width="100%" :src="item.image" alt="">
                            <div class="layer">
                                <button class="btn-menu" @click="getMenu(item.objectID)" data-toggle="modal" data-target="#menuModal">Menu</button>
                            </div>
                        </div>
                        <div class="col-md-7 restaurant-image-about d-flex justify-content-center align-items-start flex-column" style="line-height: 10px;">
                            <p>{{ item.name }}</p>
                            <p style="font-weight: lighter;">{{ item.tags[0].text }}<span v-if="item.tags.length == 2">/{{ item.tags[1].text }}</span></p>
                            <p style="font-weight: lighter;">MX${{ item.cost }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="menuModal" tabindex="-1" aria-labelledby="menuModal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content rounded-0">
                    <div class="modal-header">
                        <h5 class="modal-title" id="menuModalLabel">Menu</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row" v-if="menus.length != 0">
                            <div class="col-3">
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a v-for="(item, index) in menus" :key="index" @click="selectedMenu = item" class="nav-link mt-2" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">{{ item.name }}</a>
                                </div>
                            </div>
                            <div class="col-9" v-if="selectedMenu != null">
                                <div class="tab-content" id="v-pills-tabContent">
                                    <div class="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" style="background-color: #FEFAF9 !important; padding: 10px;">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-6" v-for="(food, index) in selectedMenu.foods" :key="index">
                                                    <div class="row">
                                                        <div class="col-md-7 restaurant-image-about d-flex justify-content-center align-items-start flex-column">
                                                            <p>{{ food.name }}</p>
                                                            <p style="font-weight: lighter;">{{ food.description }}</p>
                                                            <p style="font-weight: lighter;">MX${{ food.cost }}</p>
                                                        </div>
                                                        <div class="col-md-5 restaurant-image-container p-0">
                                                            <img width="100%" :src="food.image" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="row">
                            <div class="col-md-12">
                                <h2>No hay un menu cargado...</h2>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary rounded-0" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// For the default version
import algoliasearch from 'algoliasearch';

const client = algoliasearch('YN419Q56L7', 'efb182f014abeb054001cd6da4160c2e');
const index = client.initIndex('restaurants');

//Firebase
import { firebase, db, firestore } from '@/firebase'

export default {

    name: 'Restaurants',

    data(){
        return{
            key: 0,
            direction: {
                directionDestination: '',
                lat: 0,
                lng: 0,
            },

            place: null,
            menus: [],
            restaurants: null,

            selectedMenu: null,
        }
    },

    created(){
        client.clearCache()
    },

    watch: {
        place(){
            if (this.place != null) {
                this.direction.directionDestination = this.place.formatted_address
                this.direction.lat = this.place.geometry.location.lat()
                this.direction.lng = this.place.geometry.location.lng()

                this.getRestaurants()
            }    
        }
    },

    methods: {
        binnie(args){
            let km = args
            let cost = 2
            let costClient = 5

            let total = 0

            if (km <= 3.4) {
                total = 25

                return [total, 20, 5]
            }else{
                let diff = km - 3.5
                let multiplo = parseInt(diff) + 1

                total = (20 + (costClient * multiplo)) + (5 + (cost * multiplo))

                return [total, (20 + (costClient * multiplo)), (5 + (cost * multiplo))]
            }

            return [total, 20, 5]
        },

        async getDistance(start, end) {
            
            const service = new google.maps.DistanceMatrixService();
            return new Promise((resolve, reject) => {
                let response;
                service.getDistanceMatrix({
                        origins: [start],
                        destinations: [end],
                        travelMode: 'DRIVING',
                        unitSystem: google.maps.UnitSystem.METRIC,
                        avoidHighways: false,
                        avoidTolls: false
                },(resp, status) => {
                   if (status !== google.maps.DistanceMatrixStatus.OK) {
                        response = reject(status);
                    } else {
                        let km = (resp.rows[0].elements[0].distance.value)/1000

                        let cost = this.binnie(km)

                        response = resolve(cost);
                    }
                });
                return response;
            })
        },

        async getRestaurants(){
            client.clearCache()
            try {
                index.search('', {
                    aroundLatLng: `${this.direction.lat}, ${this.direction.lng}`,
                    // aroundLatLng: '28.7221648, -106.1476528',
                    aroundRadius: 6000, // 1km = 1000
                    filters: `active=1`,
                }).then(({ hits }) => {

                    console.log(hits);
                    this.restaurants = hits

                    this.updateCost()
                });
            } catch (error) {
                console.log(error);
            }
        },

        async getMenu(id){
            this.menus = []
            this.selectedMenu = null
            try {
                let response = await db.collection('menus')
                                        .where('idRestaurant', '==', id)
                                        .get()
                                        .then(query => {
                                            query.forEach(async doc => {
                                                let menu = doc.data()
                                                let foods = []

                                                await db.collection('foods')
                                                        .where('idMenu', '==', doc.id)
                                                        .get()
                                                        .then(snap => {
                                                            snap.forEach(element => {
                                                                foods.push(element.data())
                                                            })
                                                        })

                                                menu.foods = foods
                                                this.menus.push(menu)
                                            })
                                        })
            } catch (error) {
                console.log(error);
            }
        },

        updateCost(){
            this.restaurants.forEach(async (element) => {
                let start = {
                    lat: this.direction.lat,
                    lng: this.direction.lng
                }

                let end = {
                    lat: element._geoloc.lat,
                    lng: element._geoloc.lng
                }

                let cost = await this.getDistance(start, end)

                console.log('Este es el resultado: ', cost);

                Object.defineProperty(element, 'cost', {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: cost[1]
                });

                this.key++

            });
        }
    },
}
</script>