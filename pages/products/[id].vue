<template>
    <!-- Features Detail -->
    <FeaturesDetail />

    <!-- Product Banner -->
    <section class="product__banner">
        <img quality="85" loading="lazy" class="product__banner-img" src="/images/productHero.jpg" alt="Product Banner" />
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
                    <ProductDetailSliderImage :productThumb="productImage" />
                </div>
                <div class="col-lg-6 col-md-6">
                    <div>
                        <h2 class="fs-3 fw-normal">{{ productData.product_name }}</h2>
                        <p>{{ productData.product_details }}</p>
                        <div class="d-flex gap-4">
                            <p>Tình trạng: <span class="text-primary-btc">Còn hàng</span></p>
                            <div class="header-social col-4 d-lg-flex gap-2 d-none">
                                <a
                                    v-for="social in socials"
                                    :key="social.name"
                                    :href="social.link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="d-flex justify-content-center align-items-center rounded"
                                    style="color: #8b959e; width: 25px; height: 25px; font-size: 15px; flex-shrink: 0; background-color: #f1f1f1"
                                >
                                    <i :class="social.icon"></i>
                                </a>
                            </div>
                        </div>
                        <!-- Format price using toLocaleString -->
                        <h2>{{ formatCurrency(productData.product_price) }}</h2>
                        <div class="row g-2">
                            <div v-for="(attribute, key) in productAttributes" :key="key" class="col-6">
                                <div class="d-flex w-100 align-items-center gap-2">
                                    <img
                                        quality="85"
                                        loading="lazy"
                                        class="object-fit-cover"
                                        height="100%"
                                        src="/icons/grape.png"
                                        alt="Attribute Icon"
                                    />
                                    <p class="mb-0">
                                        {{ attribute.label }}: <br /><span class="text-primary-btc">{{ attribute.value }}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <a href="#" class="btn btn-lg bg-primary-btc text-light w-100"><i class="fa-solid fa-file-arrow-down"></i> Download catalogue</a>
                    <div class="border mt-3 p-3 rounded border-info d-flex gap-2">
                        <NuxtImg
                            quality="85"
                            loading="lazy"
                            class="object-fit-cover"
                            src="/icons/call-icon.png"
                            alt="Hỗ trợ mua hàng"
                            height="20px"
                        />
                        <div>
                            <p class="mb-1">Hỗ trợ mua hàng</p>
                            <a class="text-primary-btc text-decoration-none fs-4 fw-bold" href="tel:0966999591">0966 999 591</a><br />
                            <a class="text-primary-btc text-decoration-none fs-4 fw-bold" href="tel:0909395885">0909 395885</a>
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
            <h2 class="text-start mb-5">Sản phẩm vừa xem</h2>
            <RecentlyViewed />
        </div>
    </section>
</template>

<script setup>
import {socials} from "@/utils";
import {useRoute, useAsyncData} from "nuxt/app";
import {addToRecentlyViewed} from "@/utils/recentlyViewed";
import {ref, onMounted, watch} from "vue";

const route = useRoute();
const id = route.params.id;
const config = useRuntimeConfig();

const productData = ref({});
const productImage = ref([]);
const productAttributes = ref([]);

// Fetch product data
const {data: product, error} = await useAsyncData(() =>
    $fetch(`/v1/api/products/${id}`, {
        baseURL: config.public.apiBaseUrl,
        headers: {
            "x-api-key": config.public.x_api_key,
            "Content-Type": "application/json",
        },
    })
);

if (error.value) {
    throw createError({statusCode: 404, statusMessage: "Product not found", fatal: true});
}

// Cập nhật thông tin sản phẩm sau khi fetch thành công
productData.value = product.value.metadata;
productImage.value = [productData.value.product_thumb, ...productData.value.product_gallery];
productAttributes.value = [
    {label: "Giống nho", value: productData.value.product_attributes.type},
    {label: "Dung tích", value: productData.value.product_attributes.size},
    {label: "Vùng", value: productData.value.product_attributes.region},
    {label: "Niên vụ", value: productData.value.product_attributes.current_vintage},
    {label: "Nồng độ", value: productData.value.product_attributes.alcohol_volume},
    {label: "Quốc gia", value: productData.value.product_attributes.country},
    {label: "Thương hiệu", value: productData.value.product_attributes.brand_name},
    {label: "Nhiệt độ bảo quản", value: productData.value.product_attributes.storage_Temp},
];

// Cập nhật sản phẩm hiện tại vào danh sách sản phẩm đã xem gần đây và cập nhật danh sách sản phẩm đã xem
const updateRecentlyViewed = () => {
    addToRecentlyViewed({
        id: productData.value._id,
        product_name: productData.value.product_name,
        product_thumb: productData.value.product_thumb,
        product_slug: productData.value.product_slug,
        product_price: productData.value.product_price,
    });
};

// Gọi hàm updateRecentlyViewed khi component được mount và khi sản phẩm thay đổi
watch(
    () => route.params.id,
    () => {
        updateRecentlyViewed();
    },
    {immediate: true}
);

// Format currency function
const formatCurrency = (value) => {
    return value.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
    });
};
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
