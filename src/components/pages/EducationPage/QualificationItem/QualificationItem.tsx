import { Col, Container, Row } from 'react-bootstrap';
import Qualification from 'model/Qualification';
import './QualificationItem.scss';

type QualificationItemProps = {
    qualification: Qualification
};

const QualificationItem = ({ qualification }: QualificationItemProps) => {

    return (
        <div className='rk-qualification-item fw-light'>
            <Container>
                <Row>
                    <Col xs={12} md={9}>
                        <div className='rk-qualification-detail'>
                            <img src='/images/education/certificate.svg' alt='Award certificate' />
                            <div>{qualification.title}</div>
                        </div>
                        <div className='rk-qualification-detail'>
                            <img src='/images/education/location.svg' alt='Location point' />
                            <div>{qualification.institutionName}</div>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className='rk-qualification-detail'>
                            <img src='/images/education/graduate.svg' alt='Graduation user' />
                            <div>{qualification.graduationDate}</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default QualificationItem;