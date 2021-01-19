import React from 'react';
import Hero from '../components/Hero';
import SchoolProjectRow from '../components/SchoolProjectRow';
import Section from '../components/Section';
import { classe5Projects } from '../content/classe5Projects';

export default function Classe5() {
    return (
        <>
            <Hero text="A.S. 2020/2021">
                <img src="assets/Logo.svg" alt="School Logo" className="icon is-medium" />
            </Hero>
            <Section>
                {classe5Projects.map((project, index) => {
                    return <SchoolProjectRow key={index} project={project} />;
                })}
            </Section>
        </>
    );
}
