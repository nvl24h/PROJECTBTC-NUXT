<template>
    <section class="py-3 bg-secondary-btc">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <!-- Item 1 -->
                <div class="col-md-4 featuresDetail__item mb-md-0 mb-4">
                    <div class="d-flex gap-3 justify-content-md-center align-items-center">
                        <NuxtImg quality="85" loading="lazy" src="/icons/car.png" alt="" />
                        <div class="text-white">
                            <h4 class="fs-5 fw-normal mb-1 text-uppercase">Free Ship nội thành</h4>
                            <p class="mb-0">Đối với hóa đơn trên 2 triệu đồng</p>
                        </div>
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="col-md-4 featuresDetail__item mb-md-0 mb-4">
                    <div class="d-flex gap-3 justify-content-md-center align-items-center">
                        <NuxtImg quality="85" loading="lazy" src="/icons/money.png" alt="" />
                        <div class="text-white">
                            <h4 class="fs-5 fw-normal mb-1 text-uppercase">Chiết khấu hấp dẫn</h4>
                            <p class="mb-0">Ưu đãi với số lượng lớn</p>
                        </div>
                    </div>
                </div>
                <!-- Item 3 -->
                <div class="col-md-4 featuresDetail__item mb-md-0 mb-4">
                    <div class="d-flex gap-3 justify-content-md-center align-items-center">
                        <NuxtImg quality="85" loading="lazy" src="/icons/time.png" alt="" />
                        <div class="text-white">
                            <h4 class="fs-5 fw-normal mb-1 text-uppercase">Giao nhanh 24h</h4>
                            <p class="mb-0">Áp dụng trong nội thành</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style>
@media (min-width: 766.98px) {
    .featuresDetail__item:not(:first-child) {
        border-left: 1px solid #747474;
        padding-left: 21px;
    }
}
</style>
