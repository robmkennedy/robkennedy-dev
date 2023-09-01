import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Page from 'components/pages/Page/Page';
import EmployerItem from 'components/pages/ExperiencePage/EmployerItem/EmployerItem';
import { usePageStatus } from 'hooks/componentHooks';
import { useFetchEmployers } from 'hooks/networkHooks';

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
                        <Accordion>
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