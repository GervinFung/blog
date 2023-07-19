<template>
    <!-- Global Metadata -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" type="image/svg+xml" href="/images/icon/favicon.ico" />
    <meta name="generator" :content="generator" />

    <!-- Canonical URL -->
    <link rel="canonical" :href="canonicalURL" />

    <!-- Primary Meta Tags -->
    <title>{{ realTitle }}</title>
    <meta name="title" :content="realTitle" />
    <meta name="description" :content="description" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" :content="url" />
    <meta property="og:title" :content="realTitle" />
    <meta property="og:description" :content="description" />
    <meta property="og:image" :content="url" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" :content="url" />
    <meta property="twitter:title" :content="realTitle" />
    <meta property="twitter:description" :content="description" />
    <meta property="twitter:image" :content="url" />
</template>
<script lang="ts">
import * as Vue from 'vue';
import consts from '../../consts/index';
import '../../styles/global.css';
import '../../styles/font.css';

const { string } = consts.vue.mandatory;

export default Vue.defineComponent({
    props: {
        title: string,
        generator: string,
        description: string,
        canonicalURL: string,
        url: string,
    },
    data() {
        return {
            realTitle:
                this.title === consts.title
                    ? this.title
                    : `${consts.title} | ${this.title}`,
        };
    },
});
</script>
