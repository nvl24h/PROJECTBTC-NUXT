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
        <SwiperSlide>
            <div class="card rounded-4 product-slider position-relative" style="max-width: 18rem">
                <img
                    src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                    class="card-img-top pt-4"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title fs-6">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                    <p class="fw-bold fs-1 text-primary-btc">650,<span class="fs-6">000</span></p>
                    <a
                        class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                        href="#"
                        ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                    ></a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card rounded-4 product-slider position-relative" style="max-width: 18rem">
                <img
                    src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                    class="card-img-top pt-4"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title fs-6">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                    <p class="fw-bold fs-1 text-primary-btc">650,<span class="fs-6">000</span></p>
                    <a
                        class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                        href="#"
                        ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                    ></a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card rounded-4 product-slider position-relative" style="max-width: 18rem">
                <img
                    src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                    class="card-img-top pt-4"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title fs-6">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                    <p class="fw-bold fs-1 text-primary-btc">650,<span class="fs-6">000</span></p>
                    <a
                        class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                        href="#"
                        ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                    ></a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card rounded-4 product-slider position-relative" style="max-width: 18rem">
                <img
                    src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                    class="card-img-top pt-4"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title fs-6">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                    <p class="fw-bold fs-1 text-primary-btc">650,<span class="fs-6">000</span></p>
                    <a
                        class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                        href="#"
                        ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                    ></a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card rounded-4 product-slider position-relative" style="max-width: 18rem">
                <img
                    src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                    class="card-img-top pt-4"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title fs-6">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                    <p class="fw-bold fs-1 text-primary-btc">650,<span class="fs-6">000</span></p>
                    <a
                        class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                        href="#"
                        ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                    ></a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card rounded-4 product-slider position-relative" style="max-width: 18rem">
                <img
                    src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                    class="card-img-top pt-4"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title fs-6">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                    <p class="fw-bold fs-1 text-primary-btc">650,<span class="fs-6">000</span></p>
                    <a
                        class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                        href="#"
                        ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                    ></a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card rounded-4 product-slider position-relative" style="max-width: 18rem">
                <img
                    src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                    class="card-img-top pt-4"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title fs-6">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                    <p class="fw-bold fs-1 text-primary-btc">650,<span class="fs-6">000</span></p>
                    <a
                        class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                        href="#"
                        ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                    ></a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card rounded-4 product-slider position-relative" style="max-width: 18rem">
                <img
                    src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                    class="card-img-top pt-4"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title fs-6">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                    <p class="fw-bold fs-1 text-primary-btc">650,<span class="fs-6">000</span></p>
                    <a
                        class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                        href="#"
                        ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                    ></a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card rounded-4 product-slider position-relative" style="max-width: 18rem">
                <img
                    src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                    class="card-img-top pt-4"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title fs-6">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                    <p class="fw-bold fs-1 text-primary-btc">650,<span class="fs-6">000</span></p>
                    <a
                        class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                        href="#"
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
    setup() {
        return {
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
