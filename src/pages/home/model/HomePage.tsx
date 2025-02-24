import { HomePageUI } from '@pages/home/ui/HomePageUI';
import { getTimeSegments } from '@pages/home/actions';

export const HomePage = async () => {
	const timeSegments = await getTimeSegments();
	return <HomePageUI timeSegments={timeSegments} />;
};
