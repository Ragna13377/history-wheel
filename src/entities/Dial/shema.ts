import { z } from 'zod';

export const timeSegmentsSchema = z.object({
	id: z.number().int(),
	startYear: z.number(),
	endYear: z.number(),
	theme: z.string(),
})

export type TimeSegmentsSchemaProps = z.infer<typeof timeSegmentsSchema>