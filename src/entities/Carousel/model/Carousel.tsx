'use client';
import { CarouselProps } from '../types';
import { useDirection } from '../hooks/useDirection';
import CarouselUI from '../ui/CarouselUI';
import { useUpdate } from '@entities/Carousel/hooks/useUpdate';

export const Carousel = (props: CarouselProps) => {
	const { $direction, onSlideChange } = useDirection();
	const { swiperRef } = useUpdate();
	return (
		<CarouselUI
			swiperRef={swiperRef}
			$direction={$direction}
			onSlideChange={onSlideChange}
			{...props}
		/>
	);
};
