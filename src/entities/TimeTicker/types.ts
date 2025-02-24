export type TimeTickerProps = React.ComponentPropsWithRef<'div'> & {
	time: number;
	animationDuration: number;
};

export type TimeTickerUIProps = Omit<TimeTickerProps, 'animationDuration'>;
