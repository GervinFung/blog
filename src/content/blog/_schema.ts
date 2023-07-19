import { z } from 'astro:content';

const blog = {
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        // Transform string to Date object
        pubDate: z
            .string()
            .or(z.date())
            .transform((value) => new Date(value)),
        updatedDate: z
            .string()
            .optional()
            .transform((string) => (string ? new Date(string) : undefined)),
        heroImage: z.string().optional(),
    }),
} as const;

export default blog;
