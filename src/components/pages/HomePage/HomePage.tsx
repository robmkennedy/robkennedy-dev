import { Container, Row, Col } from 'react-bootstrap';
import { usePageStatus } from 'hooks/componentHooks';
import { useFetchProfile } from 'hooks/networkHooks';
import Page from 'components/pages/Page/Page';
import './HomePage.scss';
import SummaryPoint from './SummaryPoint/SummaryPoint';

const HomePage = () => {

    const { isLoading, isError, data } = useFetchProfile();

    let pageContent = usePageStatus(isLoading, isError);

    if (!pageContent && data) {
        pageContent = (
            <div id='homePage' className='rk-page-content'>
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <h1>{data.name}</h1>
                            <h2>{data.title}</h2>
                            <img id='profileImg' src='/images/profile-bw.jpg' />
                        </Col>
                        <Col>
                            <SummaryPoint icon='/images/icons/analytics-regular.svg' text='test Text'></SummaryPoint>
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