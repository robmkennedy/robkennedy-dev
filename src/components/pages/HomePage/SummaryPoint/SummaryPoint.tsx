import { memo } from 'react';
import './SummaryPoint.scss';

type SummaryPointProps = {
    icon: string,
    text: string
};

const SummaryPoint = ({ icon, text }: SummaryPointProps) => {

    return (
        <div className='rk-summary-point'>
            <img src={icon} alt='Summary Point Logo'/>
            <div>{text}</div>
        </div>
    );
};

export default memo(SummaryPoint);