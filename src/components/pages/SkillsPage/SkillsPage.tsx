import { useFetchSkills } from 'hooks/networkHooks';
import './SkillsPage.scss';

const SkillsPage = () => {

    const { isLoading, error, data } = useFetchSkills();

    if (data) {
        debugger;
    }

    return (
        <div id='skillsPage'>
        </div>
    );
}

export default SkillsPage;