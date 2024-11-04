<script setup></script>

<template>
    <!-- Features Detail -->
    <FeaturesDetail />

    <!-- Product Banner -->
    <section class="product__banner">
        <img class="product__banner-img" src="/images/productHero.jpg" alt="" />
    </section>

    <!-- Product Breadcrumb -->
    <section class="py-3">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/" class="text-primary-btc text-decoration-none">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
        </div>
    </section>

    <!-- Product -->
    <Product />
    <!--    Phan trang -->
    <section class="py-3">
        <div class="container">
            <div class="d-flex justify-content-center">
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active" aria-current="page">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>

    <Warehouse />
</template>

<style scoped>
.product__banner-img {
    max-height: 344px;
    width: 100%;
    object-fit: cover;
    display: block;
    margin: 0 auto;
}
</style>
