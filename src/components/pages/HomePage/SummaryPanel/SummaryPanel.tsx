import { Container, Row, Col } from 'react-bootstrap';
import { usePageStatus } from 'hooks/componentHooks';
import { useFetchProfile } from 'hooks/networkHooks';
import Page from 'components/pages/Page/Page';
import './HomePage.scss';

const HomePage = () => {

    const { isLoading, isError, data } = useFetchProfile();

    let pageContent = usePageStatus(isLoading, isError);

    if (!pageContent && data) {
        pageContent = (
            <div id='homePage' className='rk-page-content'>
                <Container>
                    <Row>
                        <Col>
                            <h1>{data.name}</h1>
                            <h2>{data.title}</h2>
                        </Col>
                        <Col>
                            <img id='profileImg' src='/images/profile.jpg' />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    return (
        <Page>
            {pageContent}
        </Page>
    );
}

export default HomePage;