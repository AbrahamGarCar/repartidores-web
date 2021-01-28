<style>
    .nav-link{
        font-weight: bold;
    }

    .my-order{
        color: white;
        background-color: #F29F05;
    }
</style>

<template>
    <section>
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: white;">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    <img width="150px" src="./assets/images/logo.png" alt="">
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/restaurantes">Restaurantes</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/nosotros">Nosotros</router-link>
                        </li>
                        <li class="nav-item my-order">
                            <router-link class="nav-link" style="color: white;" to="/mi-pedido">Mi pedido</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main>
            <router-view/>
        </main>
    </section>
</template>

<script>
export default {
    
}
</script>
