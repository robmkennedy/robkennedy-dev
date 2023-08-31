import { Accordion } from 'react-bootstrap';
import Employer from 'model/Employer';
import './EmployerItem.scss';

type EmployerItemProps = {
    eventKey: string,
    employer: Employer
};

const EmployerItem = ({ eventKey, employer }: EmployerItemProps) => {

    const taskList = employer.tasks.map((task, index) => <li key={index}>{task}</li>);

    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>
                <div className='rk-employer-header fw-light'>
                    <div>
                        <div className='rk-employer-name'>{employer.name}</div>
                        <div className='rk-employer-role'>{employer.role}</div>
                    </div>
                    <div>{`${employer.startDate} - ${employer.endDate}`}</div>
                </div>
            </Accordion.Header>
            <Accordion.Body>
                <div className='rk-employer-body fw-light'>
                    <ul>
                        {taskList}
                    </ul>
                    <div className='d-none d-lg-flex rk-employer-image'><img src={employer.logo} /></div>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default EmployerItem;