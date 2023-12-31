import { FunctionComponent } from 'react';
import HomePage from 'components/pages/HomePage/HomePage';
import AboutPage from 'components/pages/AboutPage/AboutPage';
import SkillsPage from 'components/pages/SkillsPage/SkillsPage';
import ProjectsPage from 'components/pages/ProjectsPage/ProjectsPage';
import EducationPage from 'components/pages/EducationPage/EducationPage';
import ExperiencePage from 'components/pages/ExperiencePage/ExperiencePage';

type RouteProps = {
    routePath: string;
    labelText: string;
    component: FunctionComponent;
};

const routes: RouteProps[] = [
    { labelText: 'Summary', routePath: '/summary', component: HomePage },
    { labelText: 'Skills', routePath: '/skills', component: SkillsPage },
    { labelText: 'Experience', routePath: '/experience', component: ExperiencePage },
    { labelText: 'Education', routePath: '/education', component: EducationPage },
    { labelText: 'Projects', routePath: '/projects', component: ProjectsPage },
    { labelText: 'This Page', routePath: '/about', component: AboutPage }
];

export default routes;