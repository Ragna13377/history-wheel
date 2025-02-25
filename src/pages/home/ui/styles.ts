import styled from 'styled-components';

export const StyledMain = styled.main`
	position: relative;
	max-inline-size: 1440px;
	block-size: 100%;
	inline-size: 100%;
	margin: 0 auto;
	border-inline: 1px solid hsl(var(--accent));
	padding-block: 170px 104px;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	&:after,
	&:before {
		content: '';
		position: absolute;
		background-color: hsl(var(--accent));
		z-index: -1;
	}
	&:after {
		block-size: 1px;
		inline-size: 100%;
		inset-block-start: 50%;
		inset-inline-start: 0;
	}
	&:before {
		block-size: 100%;
		inline-size: 1px;
		inset-block-start: 0;
		inset-inline-start: 50%;
	}
`;