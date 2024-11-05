<template>
    <section class="product py-5">
        <div class="container">
            <div class="row g-2 g-md-4">
                <div class="col-lg-3 col-md-4 col-6" v-for="product in collectionData" :key="product.id">
                    <div class="card rounded-4 product-slider position-relative">
                        <div class="overflow-hidden position-relative" style="height: 270px">
                            <NuxtImg
                                quality="85"
                                loading="lazy"
                                :src="product.product_thumb"
                                class="card-img-top pt-4 position-absolute top-50 start-50 translate-middle"
                                alt="..."
                                style="height: 100%; width: auto"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title small product-title">{{ product.product_name }}</h5>
                            <p class="fw-bold fs-2 text-primary-btc">{{ price }},<span class="fs-6">000</span></p>
                            <a
                                :href="`/products/${product.product_slug}`"
                                role="button"
                                class="product__link text-decoration-none position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                                ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {useRoute} from "vue-router";
import {useFetch} from "nuxt/app";
import {createError} from "h3";

const router = useRoute();
const id = router.params.id;
const config = useRuntimeConfig();

// Using useFetch
const url = `/v1/api/collections/${id}`;

const {data: collections} = await useFetch(`${config.public.apiBaseUrl}${url}`, {
    headers: {
        "x-api-key": `${config.public.x_api_key}`, // use from runtimeConfig
        "Content-Type": "application/json",
    },
});

if (collections.value && collections.value.status !== 200) {
    throw createError({statusCode: 404, statusMessage: "Collection not Found", fatal: true});
}

const collectionData = collections.value.metadata;

let price;
const collectionPrice = () => {
    for (let data of collectionData) {
        price = data.product_price.toString().slice(0, -3);
    }
    return price;
};
collectionPrice();
</script>

<style scoped>
.product-slider:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #48c7f0;
    opacity: 0.4;
    border-radius: 15px;
}

.product-slider:hover .product__link {
    display: inline-flex !important;
}
.product-slider .product__link {
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 50%;
    bottom: 0;
    right: 0;
}

.product-img {
    background-position: center;
}

.product-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Giới hạn số dòng */
    overflow: hidden;
    text-overflow: ellipsis; /* Thêm dấu ... sau khi văn bản bị cắt */
}
</style>
