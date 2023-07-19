<template>
    <footer
        class="flex-[0_0] px-4 py-8 mt-16 box-border w-full grid place-items-center border-0 border-t border-solid border-t-slate-300 top-0 bg-slate-50 break-word"
    >
        <div class="w-full grid place-items-center">
            <p>&copy; 2022 - {{ new Date().getFullYear() }} {{ name }}</p>
        </div>
        <div class="mb-10 w-full grid place-items-center">
            <p>All rights reserved</p>
        </div>
        <div
            class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid gap-4 place-items-center"
        >
            <div class="flex justify-center w-fit">
                Written in&nbsp;
                <div style="color: #7adeb2">
                    <ExternalLink name="Vue" link="https://vuejs.org" />
                </div>
            </div>
            <div class="flex justify-center w-fit">
                Powered by&nbsp;
                <div style="color: #ff7e33">
                    <ExternalLink name="Astro" link="https://astro.build" />
                    &nbsp;
                </div>
            </div>
            <div class="flex justify-center w-fit">
                Styled with&nbsp;
                <div style="color: #38bdf8">
                    <ExternalLink
                        name="Tailwind CSS"
                        link="https://tailwindcss.com"
                    />
                </div>
            </div>
            <div class="flex justify-center w-fit">
                Checked by&nbsp;
                <div style="color: #3178c6">
                    <ExternalLink
                        name="TypeScript"
                        link="https://www.typescriptlang.org"
                    />
                </div>
            </div>
        </div>
    </footer>
</template>
<script lang="ts">
import * as Vue from 'vue';
import consts from '../../consts/index';
import ExternalLink from './link/external.vue';

export default Vue.defineComponent({
    data() {
        return {
            name: consts.name,
        };
    },
    components: {
        ExternalLink,
    },
});
</script>
