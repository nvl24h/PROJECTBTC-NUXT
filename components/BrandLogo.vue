<template>
    <swiper
        :slidesPerView="'auto'"
        :spaceBetween="10"
        :loop="true"
        :navigation="true"
        :breakpoints="{
            '320': {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            '640': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            '1024': {
                slidesPerView: 6,
                spaceBetween: 40,
            },
        }"
        :modules="modules"
        class="mySwiper brandlogo-slider"
    >
        <swiper-slide><img class="partner__image" src="/images/viettinbank.png" alt="" /> </swiper-slide>
        <swiper-slide><img class="partner__image" src="/images/vietnamendline.png" alt="" /> </swiper-slide>
        <swiper-slide><img class="partner__image" src="/images/sungroup.png" alt="" /> </swiper-slide>
        <swiper-slide><img class="partner__image" src="/images/sheraton.png" alt="" /> </swiper-slide>
        <swiper-slide><img class="partner__image" src="/images/viettinbank.png" alt="" /> </swiper-slide>
        <swiper-slide><img class="partner__image" src="/images/vietnamendline.png" alt="" /> </swiper-slide>
        <swiper-slide><img class="partner__image" src="/images/sungroup.png" alt="" /> </swiper-slide>
        <swiper-slide><img class="partner__image" src="/images/sheraton.png" alt="" /> </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Pagination, Navigation} from "swiper/modules";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>

<style>
.partner__img {
    display: flex;
    align-items: flex-end;
}

.partner__img .swiper-slide {
    object-fit: cover;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: end;
}

.partner__image {
    object-fit: cover;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: end;
}

.partner .swiper-wrapper {
    align-items: center !important;
}
</style>
