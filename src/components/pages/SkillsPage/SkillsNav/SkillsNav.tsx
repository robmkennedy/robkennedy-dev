import { Nav } from 'react-bootstrap';
import SkillsBox from '../SkillsBox/SkillsBox';
import './SkillsNav.scss';
import { useAppDispatch } from 'hooks/stateHooks';
import { SkillType } from 'utils/types';
import { skillTypeSelected } from 'state/slices/layoutSlice';
import { useLayoutSelector } from 'hooks/selectorHooks';

const SkillsNav = () => {

    const dispatch = useAppDispatch();
    const { selectedSkillType } = useLayoutSelector();

    const handleNavSelect = (key: string | null) => {
        dispatch(skillTypeSelected(key));
    };

    return (
        <div className='rk-skills-nav'>
            <Nav variant="underline" className="flex-lg-column" onSelect={handleNavSelect}>
                <Nav.Item className='flex-fill text-center text-lg-start me-lg-auto'>
                    <Nav.Link active={selectedSkillType === SkillType.SKILL_DESIGN}
                        className='' eventKey={SkillType.SKILL_DESIGN}>Design</Nav.Link>
                </Nav.Item>
                <Nav.Item className='flex-fill text-center text-lg-start me-lg-auto'>
                    <Nav.Link active={selectedSkillType === SkillType.SKILL_DEVELOPMENT}
                        className='' eventKey={SkillType.SKILL_DEVELOPMENT}>Development</Nav.Link>
                </Nav.Item>
                <Nav.Item className='flex-fill text-center text-lg-start me-lg-auto'>
                    <Nav.Link active={selectedSkillType === SkillType.SKILL_GENERAL}
                        className='' eventKey={SkillType.SKILL_GENERAL}>General</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default SkillsNav;