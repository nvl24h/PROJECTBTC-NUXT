<script setup>
import {socials, logo, introduces} from "@/utils";
</script>

<template>
    <section class="py-4" style="background-color: #2e3841">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-md-6">
                    <div class="d-flex align-items-center gap-3 text-light">
                        <img src="/icons/action_footer.png" alt="" max-height="86px" width="auto" />
                        <div>
                            <h3 class="fs-4 fw-normal">Đăng ký nhận ưu đãi</h3>
                            <p class="mb-0">Điền thông tin của bạn để được tư vấn ưu đãi miễn phí</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-lg-0 mt-4">
                    <form action="" class="d-flex ms-auto">
                        <div class="input-group">
                            <input
                                class="form-control form-control-lg remove-background border-0 fs-6"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Vui lòng nhập email của ban"
                            />
                            <button class="btn bg-primary-btc text-light btn-lg text-uppercase fw-bold text-nowrap" type="submit">
                                <p class="fs-6 mb-0">Gửi thông tin</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="py-5 bg-secondary-btc">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-secondary">
                    <div>
                        <img :src="logo.footer" :alt="logo.alt" style="max-height: 60px; width: auto" />
                        <p class="mt-3 fs-6 footer-info" style="text-align: justify">
                            Betty’s choice là tập hợp những sản phẩm chất lượng cao của nước Úc, những sản phẩm đã được lựa chọn kỹ càng để phù hợp
                            nhất với dinh dưỡng, khẩu vị và thói quen của người Việt.
                        </p>

                        <span>Theo dõi chúng tôi tại:</span>

                        <div class="footer-social col-4 d-flex gap-2 mt-3">
                            <a
                                :href="social.link"
                                v-for="social in socials"
                                :key="social.name"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="d-flex justify-content-center align-items-center rounded-circle text-decoration-none"
                                style="color: #8b959e; width: 40px; height: 40px; flex-shrink: 0; background-color: #f1f1f1"
                            >
                                <i :class="social.icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mt-md-0 mt-3">
                    <div>
                        <h3 class="text-light">Thông tin</h3>
                        <ul class="list-unstyled">
                            <li class="mt-3" v-for="introduce in introduces" :key="introduce">
                                <a :href="introduce.link" class="text-secondary text-decoration-none position-relative">{{ introduce.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 text-secondary">
                    <div>
                        <h3 class="text-light mb-4">Liên hệ</h3>
                        <div class="d-flex gap-2 align-items-center mb-4 footer-contact-box">
                            <i class="fa-solid fa-phone fa-2xl"></i>
                            <h3><a href="tel:0966999591" class="text-light text-decoration-none">0966.999.591</a></h3>
                        </div>
                        <div class="d-flex gap-2 align-items-center mb-4 footer-contact-box">
                            <i class="fa-regular fa-envelope fa-2xl"></i>
                            <p class="mb-0">
                                <a href="mailto:info@bettychoice.au" class="text-secondary text-decoration-none">info@bettychoice.au</a>
                            </p>
                        </div>
                        <div class="d-flex gap-2 align-items-center footer-contact-box">
                            <i class="fa-solid fa-location-dot fa-2xl"></i>
                            <p class="mb-0">384 Kim Giang, P. Đại Kim, Quận Hoàng Mai, TP. Hà Nội</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <section class="py-3">
        <div class="container">
            <div class="row">
                <div class="col-md-6 d-flex align-items-center">
                    <div>
                        <p class="fs-6 fw-normal mb-0">© 2024 Betty Choice Việt Nam</p>
                    </div>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                    <p class="fs-6 fw-normal text-lg-center mb-0 mt-lg-0 mt-2">
                        Nội dung trên Website chỉ mang tính chất giới thiệu sản phẩm. Chúng tôi không bán hàng trực tuyến !
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.remove-background {
    background-color: #ffffff21 !important;
    color: #d1d1d1 !important;
}

.remove-background::placeholder {
    color: #d1d1d1 !important;
}

.remove-background::-webkit-input-placeholder {
    color: #d1d1d1 !important;
}

.footer-social a:hover {
    background-color: #48c7f0 !important;
    color: #fffcff !important;
}

.footer-contact-box svg {
    color: #48c7f0 !important;
}

.footer-info {
    max-width: 350px;
}
</style>
