import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Employer from 'model/Employer';
import './QualificationItem.scss';
import Qualification from 'model/Qualification';

type QualificationItemProps = {
    qualification: Qualification
};

const QualificationItem = ({ qualification }: QualificationItemProps) => {

    return (
        <div className='rk-qualification-item fw-light'>
            <Container>
                <Row>
                    <Col xs={12} md={9}>
                        <Row>
                            <Col xs={12} lg={6}>
                                <div className='rk-qualification-detail'>
                                    <img src='/images/education/certificate.svg' />
                                    <div>{qualification.title}</div>
                                </div>
                            </Col>
                            <Col xs={12} lg={6}>
                                <div className='rk-qualification-detail'>
                                    <img src='/images/education/location.svg' />
                                    <div>{qualification.institutionName}</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className='rk-qualification-detail'>
                            <img src='/images/education/graduate.svg' />
                            <div>{qualification.graduationDate}</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default QualificationItem;