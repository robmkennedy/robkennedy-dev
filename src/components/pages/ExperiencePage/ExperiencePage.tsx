import { useFetchEmployers } from 'hooks/networkHooks';
import './ExperiencePage.scss';
import { usePageStatus } from 'hooks/componentHooks';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Page from '../Page/Page';
import EmployerItem from './EmployerItem/EmployerItem';

const ExperiencePage = () => {

    const { isLoading, isError, data } = useFetchEmployers();

    let pageContent = usePageStatus(isLoading, isError);

    if (!pageContent && data) {

        const employerItems = data.map((employer, index) => {
            return <EmployerItem eventKey={`${index}`} employer={employer} key={index} />
        });

        pageContent = (
            <Container>
                <Row>
                    <Col>
                        <Accordion className='fw-light'>
                            {employerItems}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Page id='experiencePage' title='Experience' >
            {pageContent}
        </Page>
    );
}

export default ExperiencePage;