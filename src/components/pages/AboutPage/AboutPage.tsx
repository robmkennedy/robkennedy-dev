import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/pages/Page/Page';
import NoteItem from 'components/pages/AboutPage/NoteItem/NoteItem';
import { usePageStatus } from 'hooks/componentHooks';
import { useFetchNotes } from 'hooks/networkHooks';

const AboutPage = () => {

    const { isLoading, isError, data } = useFetchNotes();

    let pageContent = usePageStatus(isLoading, isError);

    if (!pageContent && data) {

        const noteItems = data.map((note, index) => {
            return <NoteItem note={note} key={index}/>;
        });

        pageContent = (
            <Container>
                <Row>
                    <Col>
                        <div>
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
