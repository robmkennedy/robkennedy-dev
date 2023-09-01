import { Container, Row } from 'react-bootstrap';
import './Page.scss';

type PageProps = {
    id: string,
    title: string,
    children?: React.ReactNode
};

const Page = ({ id, title, children }: PageProps) => {

    return (
        <div id={id} className='rk-page'>
            <Container>
                <Row>
                    <h1 className='rk-page-title mt-lg-4 mb-3 mb-lg-5'>{title}</h1>
                </Row>
            </Container>
            {children}
        </div>
    );
}

export default Page;