<template>
    <swiper
        :style="{
            '--swiper-navigation-color': '#48c7f0',
            '--swiper-pagination-color': '#48c7f0',
        }"
        :loop="true"
        :spaceBetween="10"
        :navigation="true"
        :thumbs="{swiper: thumbsSwiper}"
        :modules="modules"
        class="mySwiper2"
    >
        <swiper-slide v-for="image in productThumb"><img :src="image" loading="lazy" /></swiper-slide>
    </swiper>
    <swiper
        @swiper="setThumbsSwiper"
        :loop="true"
        :spaceBetween="10"
        :slidesPerView="3"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide v-for="image in productThumb"><img :src="image" /></swiper-slide>
    </swiper>
</template>
<script>
import {ref} from "vue";
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import {FreeMode, Navigation, Thumbs} from "swiper/modules";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    props: {
        productThumb: {
            type: Array,
            default: "aaaa",
        },
    },

    setup(props) {
        const thumbsSwiper = ref(null);

        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };

        return {
            thumbsSwiper,
            setThumbsSwiper,
            productThumb: props.productThumb,
            modules: [FreeMode, Navigation, Thumbs],
        };
    },
};
</script>

<style scoped>
.swiper {
    width: 100%;
    /* height: 100%; */
    /* max-height: 450px; */
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
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

.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

.mySwiper2 {
    height: 450px;
    width: 100%;
}

.mySwiper {
    height: 100px;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
