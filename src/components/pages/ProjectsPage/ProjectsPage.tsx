import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/pages/Page/Page';
import './ProjectsPage.scss';

const ProjectsPage = () => {

    const pageContent = (
        <Container>
            <Row>
                <Col>
                    <div className='rk-project-title'>Future projects will be linked from this page.</div>
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