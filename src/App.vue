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
        <router-view/>
    </section>
</template>

<script>
export default {
    
}
</script>
