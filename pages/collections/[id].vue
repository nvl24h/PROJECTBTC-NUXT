<template>
    <FeaturesDetail />

    <section class="product__banner">
        <img class="product__banner-img" src="/images/productHero.jpg" alt="Product Banner" />
    </section>

    <section class="py-3">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <NuxtLink to="/" class="text-primary-btc text-decoration-none">Home</NuxtLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">collections</li>
                    <li class="breadcrumb-item active" aria-current="page">{{ id }}</li>
                </ol>
            </nav>
        </div>
    </section>

    <Product />

    <Warehouse />
</template>

<script setup>
import {useRoute} from "vue-router";
const route = useRoute();
const id = route.params.id;
</script>

<style scoped>
.product__banner-img {
    max-height: 344px;
    width: 100%;
    object-fit: cover;
    display: block;
    margin: 0 auto;
}
</style>
