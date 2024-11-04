<script setup>
const productList = [
    {
        product_thumb: "https://product.hstatic.net/200000511439/product/ro.1_4f31f30fc6084af79e2220bfb0bfb290_master.jpg",
        product_name: "Rượu vang đỏ Ý Roccamora Negroamaro DOC",
        product_price: 9999999,
        product_link: "https://khoruouvang.vn/products/ruou-vang-do-y-roccamora-negroamaro-doc",
    },
    {
        product_thumb: "https://product.hstatic.net/200000511439/product/ro.1_4f31f30fc6084af79e2220bfb0bfb290_master.jpg",
        product_name: "Rượu vang đỏ Ý Roccamora Negroamaro DOC",
        product_price: 9999999,
        product_link: "https://khoruouvang.vn/products/ruou-vang-do-y-roccamora-negroamaro-doc",
    },
    {
        product_thumb: "https://product.hstatic.net/200000511439/product/ro.1_4f31f30fc6084af79e2220bfb0bfb290_master.jpg",
        product_name: "Rượu vang đỏ Ý Roccamora Negroamaro DOC",
        product_price: 9999999,
        product_link: "https://khoruouvang.vn/products/ruou-vang-do-y-roccamora-negroamaro-doc",
    },
];
</script>
<template>
    <section class="product py-5">
        <div class="container">
            <div class="row g-2 g-md-4">
                <div class="col-lg-3 col-md-4 col-6" v-for="product in productList" :key="product.id">
                    <div class="card rounded-4 product-slider position-relative">
                        <div class="overflow-hidden position-relative" style="height: 270px">
                            <img
                                :src="product.product_thumb"
                                class="card-img-top pt-4 position-absolute top-50 start-50 translate-middle"
                                alt="..."
                                style="height: 100%; width: auto"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title small product-title">{{ product.product_name }}</h5>
                            <p class="fw-bold fs-2 text-primary-btc">{{ product.product_price }}<span class="fs-6">000</span></p>
                            <a
                                class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                                :href="product.product_link"
                                ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

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
