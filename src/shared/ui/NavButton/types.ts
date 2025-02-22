export type NavButtonProps = React.ComponentPropsWithRef<'button'> & {
	direction?: 'left' | 'right';
};

export type NavButtonGrowProps = NavButtonProps & {
	containerProps?: React.ComponentPropsWithRef<'div'>;
};
