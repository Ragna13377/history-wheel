import { Swiper, SwiperOptions } from 'swiper/types';
import { TDirection } from '@shared/types';
import { getFactsByTimeSegmentId } from '@pages/home/actions';

export type CarouselProps = SwiperOptions & {
	facts: Awaited<ReturnType<typeof getFactsByTimeSegmentId>>;
};

export type CarouselUIProps = CarouselProps & {
	swiperRef: React.RefObject<Swiper>;
	$direction: TDirection;
	onSlideChange: (swiper: Swiper) => void;
};
