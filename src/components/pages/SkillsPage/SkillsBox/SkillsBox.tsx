import { useLayoutSelector } from 'hooks/selectorHooks';
import './SkillsBox.scss';
import { SkillType } from 'utils/types';
import { useFetchSkills } from 'hooks/networkHooks';


const SkillsBox = () => {

    let skills: string[] = [];
    const { data } = useFetchSkills();
    const { selectedSkillType } = useLayoutSelector();

    if (data) {
        switch (selectedSkillType) {
            case SkillType.SKILL_DESIGN:
                skills = data.designSkills;
                break;
            case SkillType.SKILL_DEVELOPMENT:
                skills = data.developmentSkills;
                break;
            case SkillType.SKILL_GENERAL:
                skills = data.generalSkills;
                break;
            default:
                skills = [];
        }
    }

    const skillsMarkup = skills.map((text, index) => <li className='rk-skills-box-skill' key={index}>{text}</li>);

    return (
        <div className='rk-skills-box fw-light'>
            <div className='rk-skills-box-content'><ul>{skillsMarkup}</ul></div>
        </div>
    );
}

export default SkillsBox;