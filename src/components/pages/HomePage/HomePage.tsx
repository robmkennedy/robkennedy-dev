import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/pages/Page/Page';
import SummaryPoint from './SummaryPoint/SummaryPoint';
import { usePageStatus } from 'hooks/componentHooks';
import { useFetchProfile } from 'hooks/networkHooks';
import './HomePage.scss';

const HomePage = () => {

    const { isLoading, isError, data } = useFetchProfile();

    let pageContent = usePageStatus(isLoading, isError);

    if (!pageContent && data) {

        const summaryItems = data.summary.map(({ icon, text }, index) => <SummaryPoint icon={icon} text={text} key={index} />)
        pageContent = (
            <Container>
                <Row>
                    <Col lg={6}>
                        <div id='infoPanel'>
                            <img id='profileImg' src={data.photo} alt='Handsome man' />
                            <div>
                                <h4>{data.name}</h4>
                                <h5 id='profileTitle'>{data.title}</h5>
                                <div className='rk-profile-link'>
                                    <img src={'/images/icons/linkedin.svg'} alt='Linked In' />
                                    <a target='_blank' rel='noreferrer' href={`https://${data.linkedIn}`}>LinkedIn</a>
                                </div>
                                <div className='rk-profile-link'>
                                    <img src={'/images/icons/github.svg'} alt='GitHub' />
                                    <a target='_blank' rel='noreferrer' href={`https://${data.gitHub}`}>GitHub</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        {summaryItems}
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