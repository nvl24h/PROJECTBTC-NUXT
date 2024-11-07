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
                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                    <li class="breadcrumb-item active" aria-current="page">{{ id }}</li>
                </ol>
            </nav>
        </div>
    </section>

    <Product :collectionData="products" />

    <section class="py-3">
        <div class="container">
            <div class="d-flex justify-content-center">
                <nav aria-label="Pagination Navigation">
                    <ul class="pagination">
                        <li class="page-item" :class="{disabled: currentPage === 1}">
                            <a class="page-link" :href="`${id}/${currentPage - 1}`" aria-disabled="currentPage === 1">Previous</a>
                        </li>
                        <li v-for="page in totalPages" :key="page" class="page-item" :class="{active: page === currentPage}">
                            <a class="page-link" :href="`${id}/${page}`">{{ page }}</a>
                        </li>
                        <li class="page-item" :class="{disabled: currentPage === totalPages}">
                            <a class="page-link" :href="`${id}/${currentPage + 1}`" aria-disabled="currentPage === totalPages">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>

    <Warehouse />
</template>

<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";
import {useFetch, useError} from "#imports";

const route = useRoute();
const id = route.params.id;

const config = useRuntimeConfig();
let products = ref([]);
let currentPage = ref(1);
let totalPages = 3;

const {data: productsData, error} = await useFetch(`${config.public.apiBaseUrl}/v1/api/collections/${id}`, {
    headers: {
        "x-api-key": config.public.x_api_key,
        "Content-Type": "application/json",
    },
});

if (error.value || productsData.value.status !== 200) {
    useError({statusCode: 404, statusMessage: "Collection not Found"});
} else {
    products.value = productsData.value.metadata;
}
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
