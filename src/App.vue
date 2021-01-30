<style>
    @import url('https://fonts.googleapis.com/css2?family=Francois+One&display=swap');

    .nav-link{
        font-weight: bold;
    }

    .my-order{
        color: white;
        background-color: #F29F05;
    }

    *{
        font-family: 'Francois One', sans-serif;
    }

    footer{
        background-color: #181818;
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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
        <footer class="mt-4">
            <img width="150px" src="./assets/images/logo.png" alt="">
            <div class="mt-4">
                <router-link class="ml-4" style="color: white;" to="/">Inicio</router-link>
                <router-link class="ml-4" style="color: white;" to="/">Restaurantes</router-link>
                <router-link class="ml-4" style="color: white;" to="/">Nosotros</router-link>
            </div>
            <div class="mt-4" style="width: 50%;">
                <p class="text-center" style="color: white;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum cupiditate enim sequi veritatis doloremque, harum numquam error quo ullam exercitationem provident, eum facere, quis ad maiores accusamus est sapiente!</p>
            </div>
            <div class="mt-4">
                <a href="#" class="ml-4" style="color: white;">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="ml-4" style="color: white;">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="#" class="ml-4" style="color: white;">
                    <i class="fab fa-twitter"></i>
                </a>
            </div>
        </footer>
    </section>
</template>

<script>
export default {
    
}
</script>
