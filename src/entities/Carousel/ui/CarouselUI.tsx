import SwiperCore from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Slide from '../components/Slide';
import NavButton from '../components/NavButton';
import { CarouselUIProps } from '../types';
import { StyledPagination, StyledSwiper } from '../ui/styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CarouselUI = ({ swiperRef, facts, $direction, onSlideChange, ...props }: CarouselUIProps) => (
	<StyledSwiper
		onInit={(core: SwiperCore) => {
			swiperRef.current = core;
		}}
		modules={[Navigation, Pagination]}
		onSlideChange={onSlideChange}
		navigation={{
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}}
		pagination={{ el: '.swiper-pagination', clickable: true }}
		breakpoints={{
			1024: {
				spaceBetween: 80,
				slidesPerView: 3,
			},
			0: {
				spaceBetween: 25,
				slidesPerView: 2,
			},
		}}
		{...props}
	>
		{facts &&
			facts.map(({ id, year, description }) => (
				<SwiperSlide key={id}>
					<Slide title={year.toString()} description={description} />
				</SwiperSlide>
			))}
		<StyledPagination className='swiper-pagination' />
		<NavButton direction={'back'} showButton={$direction === 'back'} />
		<NavButton direction={'forward'} showButton={$direction === 'forward'} />
	</StyledSwiper>
);

export default CarouselUI;
