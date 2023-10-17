import { Container, Row, Col } from 'react-bootstrap';
import './Error.scss';

type ErrorProps = {
    message: string
}
/**
 *
 *
 * @param {ErrorProps} { message }
 * @return {*} 
 */
const Error = ({ message }: ErrorProps) => {

    return (
        <Container>
            <Row>
                <Col>
                    <div className='rk-error'>
                        <div>
                            <h4>{message}</h4>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Error;