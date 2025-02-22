import styled from 'styled-components';
import { ButtonContainerProps, DialUIProps } from '@entities/Dial/types';

export const StyledDial = styled.div<Pick<DialUIProps, 'radius'> & { $rotation: number }>`
	border: 1px solid hsla(var(--accent));
	border-radius: 50%;
	inline-size: ${({ radius }) => radius}px;
	block-size: ${({ radius }) => radius}px;
	aspect-ratio: 1/1;
	transform: rotate(${({ $rotation }) => $rotation}deg);
	transition: transform 0.5s ease-in-out;
`;

export const ButtonContainer = styled.div<ButtonContainerProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) rotate(${({ $angle }) => $angle}deg)
		translateY(-${({ $radius }) => $radius / 2}px);
	transform-origin: center;
	> * {
		rotate: ${({ $angle, $rotationFix }) => -($angle + $rotationFix + 360) % 360}deg;
    transition: rotate 0.5s ease-in-out;
	}
`;
