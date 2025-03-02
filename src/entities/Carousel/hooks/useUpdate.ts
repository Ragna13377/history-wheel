import { useEffect, useRef } from 'react';
import { debounce } from '@shared/utils/timerUtils';

export const useUpdate = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const swiperRef = useRef<any | null>(null);
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 1024) {
				swiperRef.current?.swiper?.update();
			}
		};
		const debouncedResize = debounce(handleResize, 100);
		handleResize();
		window.addEventListener('resize', debouncedResize);
		return () => window.removeEventListener('resize', debouncedResize);
	}, []);
	return {
		swiperRef,
	};
};
