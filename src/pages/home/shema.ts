import { z } from 'zod';

export const timeSegmentsSchema = z.object({
	id: z.number().int(),
	startYear: z.number(),
	endYear: z.number(),
	theme: z.string(),
});

export const factsSchema = z.object({
	id: z.number().int(),
	year: z.number(),
	description: z.string(),
	timeSegmentId: z.number().int().positive(),
});

export type TimeSegmentsSchemaProps = z.infer<typeof timeSegmentsSchema>;
export type FactsSchemaProps = z.infer<typeof factsSchema>;
