<template>
    <section class="product py-5">
        <div class="container">
            <div class="row g-2 g-md-4">
                <div class="col-lg-3 col-md-4 col-6" v-for="product in products" :key="product.id">
                    <div class="card rounded-4 product-slider position-relative">
                        <div class="overflow-hidden position-relative" style="height: 270px">
                            <NuxtImg
                                :src="product.product_thumb"
                                quality="85"
                                loading="lazy"
                                alt="Product Image"
                                class="card-img-top pt-4 position-absolute top-50 start-50 translate-middle"
                                style="height: 100%; width: auto"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title small product-title">{{ product.product_name }}</h5>
                            <p class="fw-bold fs-2 text-primary-btc">{{ formatCurrency(product.product_price) }}<span class="fs-6">000</span></p>
                            <NuxtLink
                                :to="`/products/${product.product_slug}`"
                                role="button"
                                class="product__link text-decoration-none position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                            >
                                <i class="fa-solid fa-arrow-right" style="color: currentColor"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <section class="py-3">
                <div class="container">
                    <div class="d-flex justify-content-center">
                        <nav aria-label="Pagination Navigation">
                            <ul class="pagination">
                                <li class="page-item" :class="{disabled: currentPage === 1}">
                                    <NuxtLink class="page-link" :to="`${id}?page=${currentPage - 1}`" :aria-disabled="currentPage === 1">
                                        Previous
                                    </NuxtLink>
                                </li>
                                <li v-for="page in totalPages" :key="page" class="page-item" :class="{active: page === currentPage}">
                                    <NuxtLink class="page-link" :to="`${id}?page=${page}`">{{ page }}</NuxtLink>
                                </li>
                                <li class="page-item" :class="{disabled: currentPage === totalPages}">
                                    <NuxtLink class="page-link" :to="`${id}?page=${currentPage + 1}`" :aria-disabled="currentPage === totalPages">
                                        Next
                                    </NuxtLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script setup>
import {ref, watch} from "vue";
import {useRoute} from "#imports";
import {useRuntimeConfig} from "nuxt/app";

const route = useRoute();
const id = route.params.id;
const page = ref(route.query.page ? parseInt(route.query.page) : 1);
const products = ref([]);
const totalPages = ref(3);
const currentPage = ref(1);
const config = useRuntimeConfig();

const fetchProducts = async (page = 1) => {
    console.log(page);

    try {
        const response = await fetch(`${config.public.apiBaseUrl}/v1/api/collections/${id}?page=${page}`, {
            headers: {
                "x-api-key": config.public.x_api_key,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Kiểm tra xem có dữ liệu và cập nhật các giá trị
        products.value = data.metadata || [];
        console.log(data.metadata);

        totalPages.value = data.totalPages || 3; // Giả sử bạn nhận được tổng số trang từ API
    } catch (error) {
        console.error("Lỗi khi tìm kiếm sản phẩm:", error.message);
        products.value = [];
    }
};

fetchProducts(page);

watch(
    () => route.query.page,
    (newPage) => {
        page.value = parseInt(newPage) || 1;
        currentPage.value = page.value;
        fetchProducts(page.value);
    }
);

// Function to format currency
const formatCurrency = (value) => {
    let formattedValue = value.toLocaleString("en-US");
    if (formattedValue.length > 3) {
        formattedValue = formattedValue.slice(0, -3);
    }
    return formattedValue;
};
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

.product-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
