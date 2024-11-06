<template>
    <section class="py-3">
        <div class="container">{{ page }}</div>
    </section>
</template>

<script setup>
import {useRoute} from "vue-router";
const router = useRoute();
const id = router.params.id;

// Using useFetch
const url = "https://jsonplaceholder.typicode.com/posts/" + id;
const {data: pages} = await useFetch(url);
const page = pages.value.body;

console.log();
</script>

<style lang="scss" scoped></style>
