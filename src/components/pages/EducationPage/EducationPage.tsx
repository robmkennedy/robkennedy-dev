import { useFetchQualifications } from 'hooks/networkHooks';
import './EducationPage.scss';

const EducationPage = () => {

    const { isLoading, error, data } = useFetchQualifications();

    if (data) {
        debugger;
    }

    return (
        <div id='educationPage'>
        </div>
    );
}

export default EducationPage;