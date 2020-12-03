<style>
    .navbar{
        
    }
</style>

<template>
    <section>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <router-link class="navbar-brand" to="/">Navbar</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/restaurantes">Restaurantes</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/mi-pedido">Mi pedido</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/nosotros">Nosotros</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main class="container">
            <div class="row">
                <router-view/>
            </div>
        </main>
    </section>
</template>

<script>
export default {
    
}
</script>
