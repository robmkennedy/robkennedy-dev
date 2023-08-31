import { useFetchQualifications } from 'hooks/networkHooks';
import './ProjectsPage.scss';
import { usePageStatus } from 'hooks/componentHooks';
import { Container, Row, Col } from 'react-bootstrap';
import Page from '../Page/Page';

const ProjectsPage = () => {

    const pageContent = (
        <Container>
            <Row>
                <Col>
                    <div className='fw-light'>Future projects will be linked from this page.</div>
                </Col>
            </Row>
        </Container>
    );

    return (
        <Page id='projectsPage' title='Projects'>
            {pageContent}
        </Page>
    );
}

export default ProjectsPage;