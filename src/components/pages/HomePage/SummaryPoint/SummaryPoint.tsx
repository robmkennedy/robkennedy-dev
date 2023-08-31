import './SummaryPoint.scss';
import { memo } from 'react';

type SummaryPointProps = {
    icon: string,
    text: string
};

const SummaryPoint = ({ icon, text }: SummaryPointProps) => {

    return (
        <div className='rk-summary-point fw-light'>
            <img src={icon}/>
            <div>{text}</div>
        </div>
    );
};

export default memo(SummaryPoint);