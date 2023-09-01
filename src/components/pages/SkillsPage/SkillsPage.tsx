import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/pages/Page/Page';
import SkillsBox from 'components/pages/SkillsPage/SkillsBox/SkillsBox';
import SkillsNav from 'components/pages/SkillsPage/SkillsNav/SkillsNav';
import { usePageStatus } from 'hooks/componentHooks';
import { useFetchSkills } from 'hooks/networkHooks';

const SkillsPage = () => {
    
    const { isLoading, isError, data } = useFetchSkills();

    let pageContent = usePageStatus(isLoading, isError);

    if (!pageContent && data) {

        pageContent = (
            <Container>
                <Row>
                    <Col lg={3}>
                        <SkillsNav />
                    </Col>
                    <Col>
                        <SkillsBox />
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Page id='skillPage' title='Skills'>
            {pageContent}
        </Page>
    );
}

export default SkillsPage;