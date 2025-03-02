import { useState } from 'react';
import { Swiper } from 'swiper/types';
import { TDirection } from '@shared/types';

export const useDirection = () => {
	const [direction, setDirection] = useState<TDirection>('forward');
	const onSlideChange = (swiper: Swiper) => {
		const activeIndex = Number(swiper.activeIndex);
		if (activeIndex === 0) setDirection('forward');
		else if (activeIndex + Number(swiper.params.slidesPerView) === swiper.slides.length)
			setDirection('back');
	};
	return {
		$direction: direction,
		onSlideChange,
	};
};
