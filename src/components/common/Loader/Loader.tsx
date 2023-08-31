import { Container, Row, Col } from 'react-bootstrap';
import './Loader.scss';

type LoaderProps = {
    message: string
}

const Loader = ({ message }: LoaderProps) => {

    return (
        <Container>
            <Row>
                <Col>
                    <div className='rk-loader'>
                        <div>
                            <h4>{message}</h4>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Loader;