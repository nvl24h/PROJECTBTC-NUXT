<template>
    <!-- Features Detail -->
    <FeaturesDetail />

    <!-- Product Banner -->
    <section class="product__banner">
        <img class="product__banner-img" src="/images/productHero.jpg" alt="" />
    </section>

    <!-- Product Breadcrumb -->
    <section class="py-3">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/" class="text-primary-btc text-decoration-none">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                    <li class="breadcrumb-item active" aria-current="page">{{ id }}</li>
                </ol>
            </nav>
        </div>
    </section>

    <!-- Product -->
    <Product />
    <!--    Phan trang -->
    <section class="py-3">
        <div class="container">
            <div class="d-flex justify-content-center">
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item" aria-current="page">
                            <a class="page-link" :href="`${id}/1`">1</a>
                        </li>
                        <li class="page-item active">
                            <a class="page-link" href="2">2</a>
                        </li>

                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>

    <Warehouse />
</template>

<script setup>
import {ref, watch} from "vue";
import {useRoute, useRuntimeConfig} from "nuxt/app";

const route = useRoute();
const config = useRuntimeConfig();
const products = ref(null);

const productDataApi = async (id) => {
    try {
        const url = `/v1/api/collections/${id}`;
        const {data: productsData, error} = await useFetch(`${config.public.apiBaseUrl}${url}`, {
            headers: {
                "x-api-key": `${config.public.x_api_key}`,
                "Content-Type": "application/json",
            },
        });

        if (error.value || productsData.value.status !== 200) {
            throw createError({statusCode: 404, statusMessage: "Collection not Found", fatal: true});
        }

        products.value = productsData.value.metadata;
    } catch (error) {
        console.error(error);
    }
};

// Gọi API khi component được mount lần đầu
productDataApi(route.params.id);

// Theo dõi sự thay đổi của `route.params.id` để gọi lại API
watch(
    () => route.params.id,
    (newId) => {
        productDataApi(newId);
    }
);
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
