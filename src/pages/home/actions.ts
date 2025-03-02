'use server';
import prisma from '@shared/lib/prisma';
import { factsSchema, timeSegmentsSchema } from '@pages/home/shema';
import { prismaFetch } from '@shared/api/prismaFetch';

export const getTimeSegments = async () =>
	prismaFetch({
		query: () => prisma.timeSegments.findMany(),
		schema: timeSegmentsSchema.array(),
		notFoundRedirect: true,
	});

export const getFactsByTimeSegmentId = async (timeSegmentId: number) =>
	prismaFetch({
		query: () =>
			prisma.facts.findMany({
				where: { timeSegmentId },
				orderBy: { year: 'asc' },
			}),
		schema: factsSchema.array(),
	});
