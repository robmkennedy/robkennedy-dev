import { useFetchNotes, useFetchProfile, useFetchQualifications } from 'hooks/networkHooks';
import './AboutPage.scss';
import { usePageStatus } from 'hooks/componentHooks';
import { Container, Row, Col } from 'react-bootstrap';
import Page from '../Page/Page';

const AboutPage = () => {

    const { isLoading, isError, data } = useFetchNotes();

    let pageContent = usePageStatus(isLoading, isError);

    if (!pageContent && data) {

        const noteItems = data.map((note) => {
            return <p>{note.content}</p>;
        });

        pageContent = (
            <Container>
                <Row>
                    <Col>
                        <div className='fw-light'>
                            {noteItems}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Page id='aboutPage' title='About This Page'>
            {pageContent}
        </Page>
    );
};

export default AboutPage;
