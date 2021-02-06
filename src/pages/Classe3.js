import React from 'react';
import Hero from '../components/Hero';
import SchoolProjectRow from '../components/SchoolProjectRow';
import Section from '../components/Section';
import { classe3Projects } from '../content/classe3Projects';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ProjectPage from './ProjectPage';

export default function Classe3() {
    const { path } = useRouteMatch(); 
    return (
        <>
            <Hero text="A.S. 2018/2019">
                <img src="assets/Logo.svg" alt="School Logo" class="icon is-medium" />
            </Hero>
            <Section>
                {classe3Projects.map((project, index) => {
                    return <SchoolProjectRow key={index} project={project} />;
                })}
            </Section>
            <Switch>
                <Route exact path={`${path}/tiwi`} component={ProjectPage} />
            </Switch>
        </>
    );
}
