export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);

    const repo = await $fetch("https://api.github.com/repos/nuxt/nuxt", {
        headers: {
            Authorization: `token ${config.githubToken}`,
        },
    });

    return repo;
});
