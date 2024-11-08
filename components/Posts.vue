<template>
    <div class="blog__container">
        <div class="blog__item bg-white" v-for="(item, index) in blogPosts" :key="index">
            <img class="blog__image" :src="item.image" :alt="item.alt" loading="lazy" />
            <div class="px-4 mt-3">
                <h3 class="fs-5">
                    <NuxtLink to="#" class="text-decoration-none text-dark">
                        {{ item.title }}
                    </NuxtLink>
                </h3>
                <p class="blog__desc desc">
                    {{ item.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogPosts: [
                {
                    image: "/images/Event01.png",
                    alt: "image 1",
                    title: "Ruou vang trang",
                    description:
                        "Rượu vang trắng là thức uống thơm ngon khó cưỡng, Rượu vang trắng là thức uống thơm ngon khó cưỡng giúp tiệc rượu thêm phần trọn vẹn và thịnh soạn hơn",
                },
                // Add more blogPosts here as needed
            ],
        };
    },
};
</script>

<style scoped>
.blog__container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.blog__item {
    width: 300px;
    transition: background 0.3s;
}

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
