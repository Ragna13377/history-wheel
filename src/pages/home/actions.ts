'use server';
import prisma from '@shared/lib/prisma';
import { timeSegmentsSchema } from '@entities/WheelControl/shema';
import { notFound } from 'next/navigation';

export const getTimeSegments = async () => {
	try {
		const segments = await prisma.timeSegments.findMany();
		const parseResult = timeSegmentsSchema.array().safeParse(segments);

		if (!parseResult.success) {
			console.log('Incorrect data: ', parseResult.error);
			notFound();
		}
		return parseResult.data;
	} catch (error) {
		console.log('DB connection error: ', error);
		notFound();
	}
};
