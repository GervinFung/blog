<template>
    <div
        class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 auto-rows-[1fr]"
    >
        <div v-for="(post, index) in posts" v-bind:key="index">
            <a
                :href="post.link"
                class="no-underline h-full w-max text-blue-600"
            >
                <div
                    class="h-full rounded-lg border border-current border-solid no-underline flex justify-between flex-col border-slate-300 hover:border-slate-600"
                >
                    <img
                        class="rounded-t-lg w-full"
                        :src="post.intro.path"
                        :alt="post.intro.alt"
                    />
                    <div class="box-border py-4 px-8">
                        <div class="flex flex-col text-black">
                            <p class="text-slate-500">
                                <FormattedDate :date="post.data.pubDate" />
                            </p>
                            <h3>
                                {{ post.data.title }}
                            </h3>
                            <p class="text-black">
                                {{ post.data.body }}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
<script lang="ts">
import * as Vue from 'vue';
import FormattedDate from './date.vue';
import type { getCollection } from 'astro:content';

export default Vue.defineComponent({
    props: {
        anyPosts: {
            type: Array,
            required: true,
        },
    },
    data() {
        const posts = this.anyPosts as Awaited<
            ReturnType<typeof getCollection>
        >;

        const isTest = import.meta.env.PUBLIC_NODE_ENV === 'testing';

        const displayPosts = !isTest
            ? posts
            : Array.from({ length: 3 }, () => posts).flat();

        return {
            posts: displayPosts.map((post) => {
                const link = post.slug;
                return {
                    ...post,
                    link,
                    intro: {
                        alt: `${link}-intro`,
                        path: !isTest
                            ? `/images/blog/${link}/intro.png`
                            : `/images/blog/test-post/intro.png`,
                    },
                    data: {
                        ...post.data,
                        body: post.body
                            .split('')
                            .filter((_, index) => index <= 150)
                            .concat('...')
                            .join(''),
                    },
                };
            }),
        };
    },
    components: {
        FormattedDate,
    },
});
</script>
