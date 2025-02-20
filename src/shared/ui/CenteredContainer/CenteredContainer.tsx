import React, { ComponentPropsWithRef } from 'react';
import styled from 'styled-components';

type CenteredContainerProps = ComponentPropsWithRef<'div'>;

const StyledCenteredContainer = styled.div<CenteredContainerProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const CenteredContainer = ({ children, ...props }: CenteredContainerProps) => (
	<StyledCenteredContainer {...props}>{children}</StyledCenteredContainer>
);
