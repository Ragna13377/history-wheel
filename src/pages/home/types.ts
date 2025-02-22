import { getTimeSegments } from '@pages/home/actions';

export type HomePageProps = {
	timeSegments: Awaited<ReturnType<typeof getTimeSegments>>
}