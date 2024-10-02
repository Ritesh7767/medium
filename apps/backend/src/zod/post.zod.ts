import zod from 'zod'

export const postValidation = zod.object({
    title: zod.string().min(1),
    content: zod.string().min(1),
    image: zod.string().optional()
})

export type postType = zod.infer<typeof postValidation>