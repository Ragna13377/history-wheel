import { TimeTickerUIProps } from '../types';

const TimeTickerUI = ({ time, ...props }: TimeTickerUIProps) => <div {...props}>{time}</div>;

export default TimeTickerUI;
