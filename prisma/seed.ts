import { PrismaClient } from '@prisma/client';
import timeSegments from './seeds/timeSegments.json';
import facts from './seeds/facts.json';

const prisma = new PrismaClient();
const dbSeed = async () => {
	await Promise.all([prisma.timeSegments.createMany({ data: timeSegments })]);
	await Promise.all([prisma.facts.createMany({ data: facts })]);
};
dbSeed()
	.then(() => console.log('Данные добавлены в БД'))
	.catch((e) => console.log(e))
	.finally(async () => {
		await prisma.$disconnect();
	});
