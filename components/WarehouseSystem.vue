<template>
    <div class="container">
        <h3 class="text-center mb-5">Hệ Thống Kho Hàng Tại Việt Nam</h3>
        <div class="row">
            <!-- Item 1 -->
            <div class="col-lg-4 p-3 col-md-6 warehouse__item position-relative" data-number="01">
                <div class="bg-white p-5">
                    <img class="mb-4" src="/icons/warehouse.png" alt="warehouse" />
                    <h3 class="">Kho Hà Nội</h3>
                    <p class="mb-0">384 Kim Giang, P. Đại Kim, Quận Hoàng Mai, TP. Hà Nội</p>
                </div>
            </div>
            <!-- Item 2 -->
            <div class="col-lg-4 p-3 col-md-6 warehouse__item position-relative" data-number="02">
                <div class="bg-white p-5">
                    <img class="mb-4" src="/icons/warehouse.png" alt="warehouse" />
                    <h3 class="">Kho Hà Nội</h3>
                    <p class="mb-0">384 Kim Giang, P. Đại Kim, Quận Hoàng Mai, TP. Hà Nội</p>
                </div>
            </div>
            <!-- Item 3 -->
            <div class="col-lg-4 p-3 col-md-6 warehouse__item position-relative" data-number="03">
                <div class="bg-white p-5">
                    <img class="mb-4" src="/icons/warehouse.png" alt="warehouse" />
                    <h3 class="">Kho Hà Nội</h3>
                    <p class="mb-0">384 Kim Giang, P. Đại Kim, Quận Hoàng Mai, TP. Hà Nội</p>
                </div>
            </div>
            <!-- Item 4 -->
            <div class="col-lg-4 p-3 col-md-6 warehouse__item position-relative" data-number="04">
                <div class="bg-white p-5">
                    <img class="mb-4" src="/icons/warehouse.png" alt="warehouse" />
                    <h3 class="">Kho Hà Nội</h3>
                    <p class="mb-0">384 Kim Giang, P. Đại Kim, Quận Hoàng Mai, TP. Hà Nội</p>
                </div>
            </div>
            <!-- Item 5 -->
            <div class="col-lg-4 p-3 col-md-6 warehouse__item position-relative" data-number="05">
                <div class="bg-white p-5">
                    <img class="mb-4" src="/icons/warehouse.png" alt="warehouse" />
                    <h3 class="heading__sub warehouse__heading3">Kho Hà Nội</h3>
                    <p class="mb-0">384 Kim Giang, P. Đại Kim, Quận Hoàng Mai, TP. Hà Nội</p>
                </div>
            </div>
            <!-- Item 6 -->
            <div class="col-lg-4 p-3 col-md-6 warehouse__item position-relative" data-number="06">
                <div class="bg-white p-5">
                    <img class="mb-4" src="/icons/warehouse.png" alt="warehouse" />
                    <h3 class="">Kho Hà Nội</h3>
                    <p class="mb-0">384 Kim Giang, P. Đại Kim, Quận Hoàng Mai, TP. Hà Nội</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped>
.warehouse__item div:hover {
    box-shadow: 5px 5px 10px #48c7f0;
}

.warehouse__item::after {
    position: absolute;
    color: #777777;
    top: 10px;
    right: 15px;
    font-size: 7.2rem;
    font-weight: bold;
    line-height: 0.8;
    opacity: 0.2;
    content: attr(data-number);
}
</style>
