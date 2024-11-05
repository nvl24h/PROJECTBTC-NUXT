<template>
    <swiper
        :slidesPerView="1.5"
        :spaceBetween="10"
        :navigation="true"
        :breakpoints="{
            '640': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            '1024': {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        }"
        :modules="modules"
        class="mySwiper"
    >
        <SwiperSlide v-for="product in products">
            <div class="card rounded-4 product-slider position-relative" style="max-width: 18rem">
                <img :src="product.product_thumb" class="card-img-top pt-4" alt="..." loading="lazy" />
                <div class="card-body">
                    <h5 class="card-title fs-6">{{ product.product_name }}</h5>
                    <p class="fw-bold fs-1 text-primary-btc">650,<span class="fs-6">000</span></p>
                    <a
                        class="product__link position-absolute text-decoration-none top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                        :href="`products/${product.product_slug}`"
                        ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                    ></a>
                </div>
            </div>
        </SwiperSlide>
    </swiper>
</template>

<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Navigation} from "swiper/modules";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    props: {
        productsSales: {
            type: Array,
            default: "aaaa",
        },
    },

    setup(props) {
        return {
            products: props.productsSales,
            modules: [Navigation],
        };
    },
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
</style>
