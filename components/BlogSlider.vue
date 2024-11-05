<template>
    <swiper
        :slidesPerView="'auto'"
        :spaceBetween="10"
        :navigation="true"
        :loop="true"
        :breakpoints="{
            '640': {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            '1024': {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide>
            <div class="blog__item bg-white">
                <img class="blog__image" src="/images/Event01.png" alt="image 1" loading="lazy" />
                <div class="px-4 mt-3">
                    <h3 class="fs-5"><NuxtLink to="#" class="text-decoration-none text-dark">Ruou vang trang</NuxtLink></h3>
                    <p class="blog__desc desc">
                        Rượu vang trắng là thức uống thơm ngon khó cưỡng,Rượu vang trắng là thức uống thơm ngon khó cưỡng giúp tiệc rượu thêm phần
                        trọn vẹn và thịnh soạn hơn
                    </p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="blog__item bg-white">
                <img class="blog__image" src="/images/Event01.png" alt="image 1" loading="lazy" />
                <div class="px-4 mt-3">
                    <h3 class="fs-5"><NuxtLink to="#" class="text-decoration-none text-dark">Ruou vang trang</NuxtLink></h3>
                    <p class="blog__desc desc">
                        Rượu vang trắng là thức uống thơm ngon khó cưỡng,Rượu vang trắng là thức uống thơm ngon khó cưỡng giúp tiệc rượu thêm phần
                        trọn vẹn và thịnh soạn hơn
                    </p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="blog__item bg-white">
                <img class="blog__image" src="/images/Event01.png" alt="image 1" loading="lazy" />
                <div class="px-4 mt-3">
                    <h3 class="fs-5"><NuxtLink to="#" class="text-decoration-none text-dark">Ruou vang trang</NuxtLink></h3>
                    <p class="blog__desc desc">
                        Rượu vang trắng là thức uống thơm ngon khó cưỡng,Rượu vang trắng là thức uống thơm ngon khó cưỡng giúp tiệc rượu thêm phần
                        trọn vẹn và thịnh soạn hơn
                    </p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="blog__item bg-white">
                <img class="blog__image" src="/images/Event01.png" alt="image 1" loading="lazy" />
                <div class="px-4 mt-3">
                    <h3 class="fs-5"><NuxtLink to="#" class="text-decoration-none text-dark">Ruou vang trang</NuxtLink></h3>
                    <p class="blog__desc desc">
                        Rượu vang trắng là thức uống thơm ngon khó cưỡng,Rượu vang trắng là thức uống thơm ngon khó cưỡng giúp tiệc rượu thêm phần
                        trọn vẹn và thịnh soạn hơn
                    </p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="blog__item bg-white">
                <img class="blog__image" src="/images/Event01.png" alt="image 1" loading="lazy" />
                <div class="px-4 mt-3">
                    <h3 class="fs-5"><NuxtLink to="#" class="text-decoration-none text-dark">Ruou vang trang</NuxtLink></h3>
                    <p class="blog__desc desc">
                        Rượu vang trắng là thức uống thơm ngon khó cưỡng,Rượu vang trắng là thức uống thơm ngon khó cưỡng giúp tiệc rượu thêm phần
                        trọn vẹn và thịnh soạn hơn
                    </p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="blog__item bg-white">
                <img class="blog__image" src="/images/Event01.png" alt="image 1" loading="lazy" />
                <div class="px-4 mt-3">
                    <h3 class="fs-5"><NuxtLink to="#" class="text-decoration-none text-dark">Ruou vang trang</NuxtLink></h3>
                    <p class="blog__desc desc">
                        Rượu vang trắng là thức uống thơm ngon khó cưỡng,Rượu vang trắng là thức uống thơm ngon khó cưỡng giúp tiệc rượu thêm phần
                        trọn vẹn và thịnh soạn hơn
                    </p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="blog__item bg-white">
                <img class="blog__image" src="/images/Event01.png" alt="image 1" loading="lazy" />
                <div class="px-4 mt-3">
                    <h3 class="fs-5"><NuxtLink to="#" class="text-decoration-none text-dark">Ruou vang trang</NuxtLink></h3>
                    <p class="blog__desc desc">
                        Rượu vang trắng là thức uống thơm ngon khó cưỡng,Rượu vang trắng là thức uống thơm ngon khó cưỡng giúp tiệc rượu thêm phần
                        trọn vẹn và thịnh soạn hơn
                    </p>
                </div>
            </div>
        </swiper-slide>
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
.blog__item:hover {
    background: #48c7f0;
}

.blog__image {
    width: 100%;
    max-height: 260px;
}

.blog__item a:hover {
    color: #48c7f0;
}

.blog__desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
