<template>
    <div>
        <AppHeader />

        <NuxtPage />

        <AppFooter />
    </div>
</template>

<script setup></script>

<style>
.bg-primary-btc {
    background-color: #48c7f0 !important;
}

.bg-secondary-btc {
    background-color: #01182e;
}

.text-primary-btc {
    color: #48c7f0 !important;
}

.border-primary-btc {
    border-color: #48c7f0 !important;
}

.primary-btc-hover:hover {
    color: #48c7f0 !important;
}

* {
    user-select: none !important;
    -webkit-user-select: none;
    -ms-user-select: none;
}

a {
    text-decoration: none;
}
</style>
