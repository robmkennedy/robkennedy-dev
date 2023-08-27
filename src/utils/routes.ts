import SkillsPage from 'components/pages/SkillsPage/SkillsPage';
import HomePage from 'components/pages/HomePage/HomePage';
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
    { labelText: 'Home', routePath: '/home', component: HomePage },
    { labelText: 'Skills', routePath: '/skills', component: SkillsPage },
    { labelText: 'Experience', routePath: '/experience', component: ExperiencePage },
    { labelText: 'Education', routePath: '/education', component: EducationPage },
    { labelText: 'Projects', routePath: '/projects', component: ProjectsPage },
    { labelText: 'This Page', routePath: '/about', component: AboutPage }
];

export default routes;