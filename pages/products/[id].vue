<template>
    <!-- Features Detail -->
    <FeaturesDetail />

    <!-- Product Banner -->
    <section class="product__banner">
        <NuxtImg quality="85" loading="lazy" class="product__banner-img" src="/images/productHero.jpg" alt="" />
    </section>

    <!-- Product Breadcrumb -->
    <section class="py-3">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><NuxtLink to="/" class="text-primary-btc text-decoration-none">Home</NuxtLink></li>
                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
        </div>
    </section>

    <!-- Product -->
    <section class="py-3">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <div class="">
                        <ProductDetailSliderImage :productThumb="productImage" />
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div>
                        <h2 class="fs-3 fw-normal">{{ productData.product_name }}</h2>
                        <p>{{ productData.product_details }}</p>
                        <!-- Social -->
                        <div class="d-flex gap-4">
                            <p>Tình trạng: <span class="text-primary-btc">Còn hàng</span></p>
                            <div class="header-social col-4 d-lg-flex gap-2 d-none">
                                <a
                                    :href="social.link"
                                    v-for="social in socials"
                                    :key="social.name"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="d-flex justify-content-center align-items-center rounded"
                                    style="color: #8b959e; width: 25px; height: 25px; font-size: 15px; flex-shrink: 0; background-color: #f1f1f1"
                                >
                                    <i :class="social.icon"></i>
                                </a>
                            </div>
                        </div>
                        <h2 class="">{{ productData.product_price }}<span>đ</span></h2>
                        <!-- type -->
                        <div class="row g-2">
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <NuxtImg quality="85" loading="lazy" class="object-fit-cover" height="100%" src="/icons/grape.png" alt="grape" />
                                    <p class="mb-0">
                                        Giống nho: <br /><span class="text-primary-btc">{{ productData.product_attributes.type }}</span>
                                    </p>
                                </div>
                            </div>
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <NuxtImg quality="85" loading="lazy" class="object-fit-cover" height="100%" src="/icons/grape.png" alt="grape" />
                                    <p class="mb-0">
                                        Dung tích: <br /><span class="text-primary-btc">{{ productData.product_attributes.size }}</span>
                                    </p>
                                </div>
                            </div>
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <NuxtImg quality="85" loading="lazy" class="object-fit-cover" height="100%" src="/icons/grape.png" alt="grape" />
                                    <p class="mb-0">
                                        Vùng: <br /><span class="text-primary-btc">{{ productData.product_attributes.region }}</span>
                                    </p>
                                </div>
                            </div>
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <NuxtImg quality="85" loading="lazy" class="object-fit-cover" height="100%" src="/icons/grape.png" alt="grape" />
                                    <p class="mb-0">
                                        Niên vụ: <br /><span class="text-primary-btc">{{ productData.product_attributes.current_vintage }}</span>
                                    </p>
                                </div>
                            </div>
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <NuxtImg quality="85" loading="lazy" class="object-fit-cover" height="100%" src="/icons/grape.png" alt="grape" />
                                    <p class="mb-0">
                                        Nồng độ: <br /><span class="text-primary-btc">{{ productData.product_attributes.alcohol_volume }}</span>
                                    </p>
                                </div>
                            </div>
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <NuxtImg quality="85" loading="lazy" class="object-fit-cover" height="100%" src="/icons/grape.png" alt="grape" />
                                    <p class="mb-0">
                                        Quốc gia: <br /><span class="text-primary-btc">{{ productData.product_attributes.country }}</span>
                                    </p>
                                </div>
                            </div>
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <NuxtImg quality="85" loading="lazy" class="object-fit-cover" height="100%" src="/icons/grape.png" alt="grape" />
                                    <p class="mb-0">
                                        Thương hiệu: <br /><span class="text-primary-btc">{{ productData.product_attributes.brand_name }}</span>
                                    </p>
                                </div>
                            </div>
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <NuxtImg quality="85" loading="lazy" class="object-fit-cover" height="100%" src="/icons/grape.png" alt="grape" />
                                    <p class="mb-0">
                                        Nhiệt độ bảo quản: <br /><span class="text-primary-btc">{{
                                            productData.product_attributes.storage_Temp
                                        }}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="">
                        <a href="#" class="btn btn-lg bg-primary-btc text-light w-100"
                            ><i class="fa-solid fa-file-arrow-down"></i> Download catalogue</a
                        >
                        <div class="border mt-3 p-3 rounded border-info d-flex gap-2">
                            <NuxtImg
                                quality="85"
                                loading="lazy"
                                class="object-fit-cover"
                                src="/icons/call-icon.png"
                                alt="Hỗ trở mua hàng"
                                height="20px"
                            />
                            <div class="">
                                <p class="mb-1">Hỗ trợ mua hàng</p>
                                <!-- <h3 class="mt-0">0966 999 591 <br />0909 395885</h3> -->
                                <a class="text-primary-btc text-decoration-none fs-4 fw-bold" href="tel:0966999591">0966 999 591</a>
                                <br />
                                <a class="text-primary-btc text-decoration-none fs-4 fw-bold" href="tel:0909395885">0909 395885</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Warehouse -->
    <Warehouse />

    <section class="products py-5">
        <div class="container">
            <div class="products__box">
                <h2 class="text-start mb-5">Sản vừa xem</h2>
                <!-- list product -->
                <div class="products__list">
                    <ProductSlider />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {socials} from "@/utils";
import {useRoute} from "vue-router";
import {useFetch} from "nuxt/app"; // Đảm bảo import useFetch nếu chưa có
import {createError} from "h3"; // Đảm bảo import createError nếu chưa có

const router = useRoute();
const id = router.params.id;
const config = useRuntimeConfig();

// Using useFetch
const url = `/v1/api/products/${id}`;

const {data: product} = await useFetch(`${config.public.apiBaseUrl}${url}`, {
    headers: {
        "x-api-key": `${config.public.x_api_key}`, // use from runtimeConfig
        "Content-Type": "application/json",
    },
});

if (product.value && product.value.status !== 200) {
    throw createError({statusCode: 404, statusMessage: "Product not Found", fatal: true});
}

// Data products
const productData = product.value.metadata;
const productImage = [productData.product_thumb, ...productData.product_gallery];
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
