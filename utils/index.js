"use strict";

const contacts = [
    {
        type: "Hotline",
        icon: "/icons/call-icon.png",
        label: "Hotline",
        value: "0966 999 591",
    },
    {
        type: "Email",
        icon: "/icons/email-icon.png",
        label: "Email",
        value: "info@bettychoice.au",
    },
];

const socials = [
    {
        name: "Facebook",
        icon: "fa-brands fa-facebook-f",
        link: "https://facebook.com",
    },
    {
        name: "Instagram",
        icon: "fa-brands fa-instagram",
        link: "https://instagram.com",
    },
    {name: "TikTok", icon: "fa-brands fa-tiktok", link: "https://tiktok.com"},
    {
        name: "YouTube",
        icon: "fa-brands fa-youtube",
        link: "https://youtube.com",
    },
];

const categories = [
    {name: "Vang đỏ", path: "vang-do"},
    {name: "Vang trắng", path: "vang-trang"},
    {name: "Vang hồng", path: "vang-hong"},
    {name: "Vang tím", path: "vang-tim"},
    {name: "Sparkling", path: "sparkling"},
    {name: "Vang ngọt", path: "vang-ngot"},
    {name: "Quà tặng", path: "qua-tang"},
    {name: "Khuyến Mại", path: "khuyen-mai"},
];

const banners = [
    {
        name: "slider1",
        path: "https://file.hstatic.net/200000511439/file/dong_gia_300k_4000x1250_ede49a50603c4fe99686141e5c17716c.png",
        mobile: "https://file.hstatic.net/200000511439/file/dong_gia_300k_4000x1250_ede49a50603c4fe99686141e5c17716c.png",
        title: "bộ sưu tập rượu vang metala",
        description: "2024 Metala’s Collection",
        quote: "https://file.hstatic.net/200000511439/file/dong_gia_300k_4000x1250_ede49a50603c4fe99686141e5c17716c.png",
        seeMore: "https://file.hstatic.net/200000511439/file/dong_gia_300k_4000x1250_ede49a50603c4fe99686141e5c17716c.png",
        alt: "test",
    },
    {
        name: "slider2",
        path: "https://file.hstatic.net/200000511439/file/banner_website_4000_x_1250_killibinbin_00e639824e7446efb37402a4c583f8c9.png",
        mobile: "https://file.hstatic.net/200000511439/file/dong_gia_300k_4000x1250_ede49a50603c4fe99686141e5c17716c.png",
        title: "bộ sưu tập rượu vang metala",
        description: "2024 Metala’s Collection",
        quote: "https://file.hstatic.net/200000511439/file/dong_gia_300k_4000x1250_ede49a50603c4fe99686141e5c17716c.png",
        seeMore: "https://file.hstatic.net/200000511439/file/dong_gia_300k_4000x1250_ede49a50603c4fe99686141e5c17716c.png",
        alt: "test",
    },
    {
        name: "slider2",
        path: "https://file.hstatic.net/200000511439/file/sweet_kisses_banner_web_4000x1250px_c69d9dbbdfaf4ee2912ab0d7615dfccd.png",
        mobile: "https://file.hstatic.net/200000511439/file/dong_gia_300k_4000x1250_ede49a50603c4fe99686141e5c17716c.png",
        title: "bộ sưu tập rượu vang metala",
        description: "2024 Metala’s Collection",
        quote: "https://file.hstatic.net/200000511439/file/dong_gia_300k_4000x1250_ede49a50603c4fe99686141e5c17716c.png",
        seeMore: "https://file.hstatic.net/200000511439/file/dong_gia_300k_4000x1250_ede49a50603c4fe99686141e5c17716c.png",
        alt: "test",
    },
    {
        name: "slider2",
        path: "https://file.hstatic.net/200000511439/file/sweet_kisses_banner_web_4000x1250px_c69d9dbbdfaf4ee2912ab0d7615dfccd.png",
        mobile: "https://file.hstatic.net/200000511439/file/dong_gia_300k_4000x1250_ede49a50603c4fe99686141e5c17716c.png",
        title: "bộ sưu tập rượu vang metala",
        description: "2024 Metala’s Collection",
        quote: "https://file.hstatic.net/200000511439/file/dong_gia_300k_4000x1250_ede49a50603c4fe99686141e5c17716c.png",
        seeMore: "https://file.hstatic.net/200000511439/file/dong_gia_300k_4000x1250_ede49a50603c4fe99686141e5c17716c.png",
        alt: "test",
    },
];

const logo = {
    type: "logo",
    header: "/icons/Logo.png",
    footer: "/icons/logo-white.png",
    alt: "Bettychoice",
};

const introduces = [
    {
        name: "Giới thiệu",
        link: "/gioi-thieu",
    },
    {
        name: "Chính sách",
        link: "/gioi-thieu",
    },
    {
        name: "Hướng dẫn mua hàng",
        link: "/gioi-thieu",
    },
    {
        name: "Tuyển dụng",
        link: "/gioi-thieu",
    },
    {
        name: "Câu hỏi thường gặp",
        link: "/gioi-thieu",
    },
];

export {contacts, socials, categories, banners, logo, introduces};
