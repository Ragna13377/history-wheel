import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
	inline-size: calc(100% - var(--page-offset) * 2);
	min-block-size: 12.5rem;
	margin-block-start: clamp(1.25rem, 0.8rem + 2.25vw, 3.5rem);
`;

export const StyledPagination = styled.div`
	visibility: hidden;
	user-select: none;
	.swiper-pagination-bullet-active {
		background: hsl(var(--accent));
	}
	.swiper-pagination-bullet {
		background: hsl(var(--accent-foreground));
	}
	@media (max-width: 1024px) {
		position: fixed;
		visibility: visible;
		user-select: auto;
	}
`;
