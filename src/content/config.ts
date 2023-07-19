import { defineCollection } from 'astro:content';
import blogSchema from './blog/_schema';

const blog = defineCollection(blogSchema);

const collections = { blog };

export { collections };
