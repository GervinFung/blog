<template>
    <html lang="en">
        <head>
            <Head
                :url="url"
                :title="title"
                :generator="generator"
                :description="description"
                :canonical-url="canonicalURL"
            />
        </head>
        <body
            class="w-full min-h-full flex flex-col place-items-center bg-slate-50"
        >
            <Header />
            <main class="flex-[1_0] w-10/12">
                <article>
                    <div v-if="heroImage">
                        <img class="w-full" :src="heroImage" :alt="heroImage" />
                    </div>
                    <h1>{{ title }}</h1>
                    <FormattedDate :date="pubDate" />
                    <div v-if="updatedDate">
                        <div>Last updated on</div>
                        <FormattedDate :date="updatedDate" />
                    </div>
                    <hr />
                    <slot />
                </article>
                <hr />
                <div class="mb-8 grid place-items-center">
                    <h2>Discover More</h2>
                </div>
                <div class="grid place-items-center w-full">
                    <All :any-posts="related" />
                </div>
            </main>
            <Footer />
        </body>
    </html>
</template>
<script lang="ts">
import * as Vue from 'vue';
import { getCollection } from 'astro:content';
import Head from '../../components/common/head.vue';
import Header from '../../components/common/header.vue';
import Footer from '../../components/common/footer.vue';
import FormattedDate from '../../components/blog/date.vue';
import All from '../../components/blog/all.vue';
import consts from '../../consts/index';
import { guard } from '../../helper/value';

const { mandatory, optional } = consts.vue;
const { date, string } = mandatory;

const postsRef = Vue.ref<Awaited<ReturnType<typeof getCollection>>>();

export default Vue.defineComponent({
    props: {
        title: string,
        description: string,
        pubDate: date,
        updatedDate: optional.date,
        heroImage: optional.string,
        generator: string,
        url: string,
        canonicalURL: string,
    },
    components: {
        All,
        Head,
        Header,
        Footer,
        FormattedDate,
    },
    //ref:https://stackoverflow.com/questions/64117116/how-can-i-use-async-await-in-the-vue-3-0-setup-function-using-typescript
    async setup() {
        postsRef.value = (await getCollection('blog')).sort(
            (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
        );
    },
    data() {
        const posts = guard({
            value: postsRef.value,
            error: () => new Error('Posts is undefined, there is no data'),
        });
        const current = guard({
            error: () => new Error('Post with current post id is not found'),
            value: posts
                .map(
                    (post, index) =>
                        ({
                            post,
                            index,
                        } as const)
                )
                .find(({ post }) => post.data.title === this.title),
        });

        const nextIndex = (move: number) => {
            const index = current.index + move;
            const difference = index - posts.length;
            return difference < 0 ? index : difference;
        };

        return {
            related: [1, 2, 3].map(nextIndex).map((index) => {
                const postIndex =
                    index !== current.index ? index : nextIndex(index);
                return guard({
                    error: () =>
                        new Error(`There is no post at index of ${postIndex}`),
                    value: posts.at(postIndex),
                });
            }),
        };
    },
});
</script>
