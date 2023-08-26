import SkillsPage from 'components/pages/SkillsPage/SkillsPage';
import ProfilePage from 'components/pages/ProfilePage/ProfilePage';
import EducationPage from 'components/pages/EducationPage/EducationPage';
import ExperiencePage from 'components/pages/ExperiencePage/ExperiencePage';
import ProjectsPage from 'components/pages/ProjectsPage/ProjectsPage';
import AboutPage from 'components/pages/AboutPage/AboutPage';
import { FunctionComponent } from 'react';

type RouteProps = {
    routePath: string;
    labelText: string;
    component: FunctionComponent;
};

const routes: RouteProps[] = [
    { labelText: 'Profile', routePath: '/', component: ProfilePage },
    { labelText: 'Skills', routePath: '/skills', component: SkillsPage },
    { labelText: 'Experience', routePath: '/experience', component: ExperiencePage },
    { labelText: 'Education', routePath: '/education', component: EducationPage },
    { labelText: 'Projects', routePath: '/projects', component: ProjectsPage },
    { labelText: 'About This Page', routePath: '/about', component: AboutPage }
];

export default routes;