<template>
    <a
        :href="link"
        target="_blank"
        rel="external nofollow noopener noreferrer"
        class="no-underline text-inherit hover:underline hover:decoration-2 hover:underline-offset-8"
    >
        {{ name }}
    </a>
</template>

<script lang="ts">
import * as Vue from 'vue';
import consts from '../../../consts/index';

const { string } = consts.vue.mandatory;

export default Vue.defineComponent({
    props: {
        link: string,
        name: string,
    },
});
</script>
