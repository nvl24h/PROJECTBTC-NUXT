<template>
    <header class="py-3 border-bottom bg-body-tertiary">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-5">
                    <div class="d-flex gap-3 align-items-center">
                        <div class="d-flex gap-2" v-for="contact in contacts" :key="contact.type">
                            <img class="mt-1" :src="contact.icon" :alt="contact.type" style="height: 16px; width: auto; object-fit: cover" />
                            <div class="">
                                <p class="mb-0">{{ contact.label }}</p>
                                <strong class="text-truncate">{{ contact.value }}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 d-md-block d-none">
                    <div class="row">
                        <!-- Search -->
                        <div class="col-lg-8 col-12 position-relative">
                            <!-- form search -->
                            <form action="" class="ms-auto w-75">
                                <input
                                    v-model="searchQuery"
                                    class="form-control rounded-pill border-2 border-primary-btc search-product"
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Tìm kiếm sản phẩm"
                                />
                                <!-- search box -->
                                <div class="position-absolute bg-white w-75 my-2 rounded-2 z-3 search-product_box">
                                    <ul class="py-2">
                                        <li
                                            class="search__item list-group-numbered border-bottom border-primary-secondary py-2 me-3 d-flex align-items-center"
                                            v-for="item in searchResults"
                                            :key="item.id"
                                        >
                                            <img class="search__item-img" :src="item.product_thumb" :alt="item.product_name" height="40px" />
                                            <a
                                                :href="`/products/${item.product_slug}`"
                                                class="search__link text-decoration-none text-primary-btc fs-6 lh-2"
                                                >{{ item.product_name }}</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <!-- Social -->
                        <div class="header-social col-4 d-lg-flex gap-2 justify-content-end d-none">
                            <a
                                :href="social.link"
                                v-for="social in socials"
                                :key="social.name"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="d-flex justify-content-center align-items-center rounded text-decoration-none"
                                style="color: #8b959e; width: 40px; height: 40px; flex-shrink: 0; background-color: #f1f1f1"
                            >
                                <i :class="social.icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img :src="logo.header" :alt="logo.alt" style="max-height: 60px; width: auto" />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <Suspense>
                <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-3 mt-lg-0">
                        <li class="nav-item text-lg-center" v-for="category in categories" :key="category.name">
                            <NuxtLink
                                :to="`/collections/${category.path}`"
                                :class="['nav-link fw-bold fs-6 text-uppercase px-3 primary-btc-hover position-relative']"
                                >{{ category.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </Suspense>
        </div>
    </nav>
</template>

<script setup>
import {ref, watch} from "vue";
import {useRuntimeConfig} from "nuxt/app";
import debounce from "lodash/debounce";

// Thiết lập cấu hình và các biến
const config = useRuntimeConfig();
const searchQuery = ref(""); // Biến lưu trữ giá trị input từ người dùng
const searchResults = ref([]); // Biến lưu trữ kết quả tìm kiếm

// Hàm fetch sản phẩm từ API
const fetchProducts = async (query) => {
    if (query.length > 4) {
        try {
            // Chuyển đổi query thành dạng URL an toàn
            const encodedQuery = encodeURIComponent(query);

            // Gửi yêu cầu tới API để tìm kiếm sản phẩm
            const response = await fetch(`${config.public.apiBaseUrl}/v1/api/products/search/${encodedQuery}`, {
                headers: {
                    "x-api-key": config.public.x_api_key,
                    "Content-Type": "application/json",
                },
            });

            // Kiểm tra nếu phản hồi không thành công
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Cập nhật kết quả tìm kiếm từ dữ liệu nhận được
            searchResults.value = data.metadata || [];
        } catch (error) {
            console.error("Lỗi khi tìm kiếm sản phẩm:", error.message);
            // Đặt kết quả tìm kiếm thành rỗng nếu có lỗi xảy ra
            searchResults.value = [];
        }
    } else {
        // Nếu query quá ngắn (<=3 ký tự), không thực hiện tìm kiếm và xóa kết quả hiện tại
        searchResults.value = [];
    }
};

// Sử dụng debounce để giảm số lần gọi API khi người dùng nhập nhanh
const debouncedFetchProducts = debounce((query) => {
    fetchProducts(query);
}, 300); // Độ trễ 300ms

// Theo dõi sự thay đổi của giá trị input tìm kiếm và gọi hàm debounce
watch(searchQuery, (newQuery) => {
    debouncedFetchProducts(newQuery);
});
</script>

<style scoped>
.header-social a:hover {
    background-color: #48c7f0 !important;
    color: #fffcff !important;
}

.router-link-active {
    color: #48c7f0 !important;
}
.router-link-active::after {
    content: "";
    position: absolute;
    top: -23px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #48c7f0;
}

.search-product:focus + .search-product_box {
    display: block !important;
}

.search-product_box {
    display: none;
}

.search-product_box:hover {
    display: block !important;
}

@media (max-width: 1399.98px) {
    .router-link-active::after {
        content: "";
        position: absolute;
        top: -11px;
        left: 0;
        height: 3px;
        width: 100%;
        background-color: #48c7f0;
    }
}

@media (max-width: 991.98px) {
    .router-link-active::after {
        content: none;
    }
}
</style>
