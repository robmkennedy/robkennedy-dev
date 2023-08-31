import { useFetchQualifications } from 'hooks/networkHooks';
import './EducationPage.scss';
import { usePageStatus } from 'hooks/componentHooks';
import { Container, Row, Col } from 'react-bootstrap';
import Page from '../Page/Page';
import QualificationItem from './QualificationItemItem/QualificationItem';


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