import { useFetchQualifications } from 'hooks/networkHooks';
import './AboutPage.scss';

const AboutPage = () => {

    const { isLoading, error, data } = useFetchQualifications();

    if (data) {
        debugger;
    }

    return (
        <div id='aboutPage'>
        </div>
    );
}

export default AboutPage;