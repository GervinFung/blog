<template>
    <html lang="en">
        <main class="flex-[1_0] w-11/12 sm:w-10/12">
            <div class="w-full grid place-items-center">
                <div class="w-8/12">
                    <div
                        class="text-[128px] lg:text-[256px] grid place-items-center"
                    >
                        <span> 404 </span>
                    </div>
                    <div>
                        <p>
                            I regret to inform you that the post with the name
                            "<em
                                ><strong>{{ link }}</strong></em
                            >" is not available at the moment. It is possible
                            that the post was either deleted or never existed in
                            the first place.
                        </p>
                    </div>
                    <div>
                        <p>
                            However, there is no need to worry as you can click
                            <a href="/">here</a> for a quick redirect to the
                            homepage
                        </p>
                    </div>
                    <div>
                        <p>
                            <em>
                                For your information, the error message "404
                                status code" means that the page you have
                                requested is not available
                            </em>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </html>
</template>
<script lang="ts">
import * as Vue from 'vue';
import consts from '../../consts/index';

export default Vue.defineComponent({
    props: {
        link: consts.vue.mandatory.string,
    },
});
</script>
