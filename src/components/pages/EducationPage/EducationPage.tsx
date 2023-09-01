import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/pages/Page/Page';
import QualificationItem from 'components/pages/EducationPage/QualificationItem/QualificationItem';
import { usePageStatus } from 'hooks/componentHooks';
import { useFetchQualifications } from 'hooks/networkHooks';

const EducationPage = () => {

    const { isLoading, isError, data } = useFetchQualifications();

    let pageContent = usePageStatus(isLoading, isError);

    if (!pageContent && data) {

        const qualificationItems = data.map((qualification, index) => {
            return <QualificationItem qualification={qualification} key={index} />
        });

        pageContent = (
            <Container>
                <Row>
                    <Col>
                        {qualificationItems}
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Page id='educationPage' title='Education'>
            {pageContent}
        </Page>
    );
}

export default EducationPage;