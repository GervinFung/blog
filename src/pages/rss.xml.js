import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import consts from '../consts';

export const get = async (context) => {
    const posts = await getCollection('blog');

    return rss({
        title: consts.title,
        description: consts.description,
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            link: `/${post}/`,
        })),
    });
};
