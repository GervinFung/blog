<template>
    <header
        class="py-3 px-4 mb-16 box-border w-full grid place-items-center border-0 border-b border-solid border-b-slate-300 sticky top-0 bg-slate-50"
    >
        <div class="w-10/12 flex justify-between items-center">
            <div>
                <a href="/">
                    <img
                        src="images/bar/blog.webp"
                        alt="logo"
                        class="w-12"
                        style="min-width: unset !important"
                    />
                </a>
            </div>
            <div class="flex justify-between items-center w-40">
                <div>
                    <ExternalLink
                        name="Github"
                        link="https://github.com/GervinFung"
                    />
                </div>
                <div>
                    <ExternalLink
                        name="About"
                        link="https://gervinfungdaxuen.vercel.app"
                    />
                </div>
            </div>
        </div>
    </header>
</template>
<script lang="ts">
import * as Vue from 'vue';
import consts from '../../consts/index';
import ExternalLink from './link/external.vue';

export default Vue.defineComponent({
    data() {
        return {
            siteTitle: consts.title,
        };
    },
    components: {
        ExternalLink,
    },
});
</script>
