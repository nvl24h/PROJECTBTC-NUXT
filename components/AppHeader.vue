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
                                            class="search__item list-group-numbered border-bottom border-primary-secondary py-2 me-3"
                                            v-for="item in searchResults"
                                            :key="item.id"
                                        >
                                            <img class="search__item-img" :src="item.image" :alt="item.name" height="40px" />
                                            <NuxtLink
                                                :to="`/products/${item.id}`"
                                                class="search__link text-decoration-none text-primary-btc fs-6 lh-1"
                                                >{{ item.name }}</NuxtLink
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
            <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-3 mt-lg-0">
                    <li class="nav-item text-lg-center" v-for="category in categories" :key="category.name">
                        <NuxtLink
                            :href="`/collections/${category.path}`"
                            :class="['nav-link fw-bold fs-6 text-uppercase px-3 primary-btc-hover position-relative']"
                            >{{ category.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import {contacts, socials, logo, categories} from "@/utils";

// Fetch
const searchResults = [
    {
        name: "Rượu vang đỏ Mỹ Barrel Bomb Proprietary Red Blend",
        image: "https://product.hstatic.net/200000511439/product/1_2000520157eb40ff9845db8974ef4594_large.png",
    },
    {
        name: "Rượu vang đỏ Mỹ Barrel Bomb Proprietary Red Blend",
        image: "https://product.hstatic.net/200000511439/product/1_2000520157eb40ff9845db8974ef4594_large.png",
    },
    {
        name: "Rượu vang đỏ Mỹ Barrel Bomb Proprietary Red Blend",
        image: "https://product.hstatic.net/200000511439/product/1_2000520157eb40ff9845db8974ef4594_large.png",
    },
    {
        name: "Rượu vang đỏ Mỹ Barrel Bomb Proprietary Red Blend",
        image: "https://product.hstatic.net/200000511439/product/1_2000520157eb40ff9845db8974ef4594_large.png",
    },
];
</script>

<style>
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
