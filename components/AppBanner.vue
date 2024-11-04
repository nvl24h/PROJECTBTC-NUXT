<template>
    <section class="hero__top">
        <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            :loop="true"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
            }"
            :pagination="{
                clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide v-for="banner in banners" :key="banner.name">
                <div class="">
                    <img class="position-relative" :src="banner.path" :alt="banner.alt" loading="lazy" />

                    <div class="container position-absolute top-50 start-50 translate-middle text-start w-100">
                        <div class="w-50">
                            <p class="fs-4 fw-normal text-primary-btc">{{ banner.description }}</p>
                            <h1 class="fs-1 fw-bold text-light mb-4 text-capitalize w-75">{{ banner.title }}</h1>
                            <div class="d-flex gap-3">
                                <a :href="banner.quote" class="btn btn-lg bg-primary-btc text-light">Nhận báo giá</a>
                                <a :href="banner.seeMore" class="btn btn-lg bg-primary-btc text-light">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";
import {banners} from "@/utils";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Pagination, Navigation, EffectFade} from "swiper/modules";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation, EffectFade],
            banners,
        };
    },
};
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
