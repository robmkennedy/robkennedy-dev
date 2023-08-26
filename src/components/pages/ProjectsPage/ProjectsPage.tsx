import { useFetchQualifications } from 'hooks/networkHooks';
import './ProjectsPage.scss';

const ProjectsPage = () => {

    const { isLoading, error, data } = useFetchQualifications();

    if (data) {
        debugger;
    }

    return (
        <div id='projectsPage'>
        </div>
    );
}

export default ProjectsPage;