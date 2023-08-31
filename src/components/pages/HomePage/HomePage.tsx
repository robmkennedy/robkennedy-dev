import { Container, Row, Col } from 'react-bootstrap';
import { usePageStatus } from 'hooks/componentHooks';
import { useFetchProfile } from 'hooks/networkHooks';
import SummaryPoint from './SummaryPoint/SummaryPoint';
import Page from 'components/pages/Page/Page';
import './HomePage.scss';

const HomePage = () => {

    const { isLoading, isError, data } = useFetchProfile();

    let pageContent = usePageStatus(isLoading, isError);

    if (!pageContent && data) {

        const summaryPoints = data.summary.map(({ icon, text }) => <SummaryPoint icon={icon} text={text} />)
        pageContent = (
            <Container>
                <Row>
                    <Col lg={6}>
                        <div id='infoPanel' className='mb-5 fw-light'>
                            <img id='profileImg' src={data.photo} />
                            <div>
                                <h4>Rob Kennedy</h4>
                                <h5 className='fw-light mb-4' id='profileTitle'>{data.title}</h5>
                                <div><a id='profileLink' target='_blank' href={`https://${data.linkedIn}`}>{data.linkedIn}</a></div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        {summaryPoints}
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Page id='homePage' title='Summary'>
            {pageContent}
        </Page>
    );
}

export default HomePage;