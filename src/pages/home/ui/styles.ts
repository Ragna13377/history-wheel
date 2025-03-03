import styled from 'styled-components';
import { Header } from '@shared/ui/Header';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	max-inline-size: 1440px;
	block-size: 100%;
	inline-size: 100%;
	margin: 0 calc((100% - 1440px) / 3) 0 calc((100% - 1440px) / 3 * 2);
	border-inline: 1px solid hsl(var(--accent));
	padding: clamp(3.75rem, 3rem + 3.75vw, 7.5rem) 0 clamp(0.8125rem, -0.325rem + 5.6875vw, 6.5rem) 0;
	@media (max-width: 1440px) {
		justify-content: flex-start;
		margin: 0;
		border: none;
	}
	&:before {
		content: '';
		position: absolute;
		block-size: 100%;
		inline-size: 1px;
		inset-block-start: 0;
		inset-inline-start: 50%;
		z-index: -100;
		background-color: hsl(var(--accent));
		@media (max-width: 1024px) {
			content: none;
		}
	}
`;

export { StyledMain as StyledHome };

export const StyledHeader = styled(Header)`
	padding-inline-start: var(--page-offset);
`;
