import { TDirection } from '@shared/types';

export type NavButtonProps = React.ComponentPropsWithRef<'button'> & {
	direction?: TDirection;
};

export type NavButtonGrowProps = NavButtonProps & {
	$isActive?: boolean;
	containerProps?: React.ComponentPropsWithRef<'div'>;
};
