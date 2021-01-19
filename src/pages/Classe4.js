import React from 'react';
import Hero from '../components/Hero';
import SchoolProjectRow from '../components/SchoolProjectRow';
import Section from '../components/Section';
import { classe4Projects } from '../content/classe4Projects';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Classe4() {
    return (
        <>
            <Hero text="A.S. 2019/2020">
                <img src="assets/Logo.svg" alt="School Logo" className="icon is-medium" />
            </Hero>
            <Section>
                <article className="message is-danger">
                    <div className="message-body">
                        <p>
                            <FaExclamationTriangle className="icon is-small" /> Non sono state svolte attività di PCTO causa COVID-19.
                        </p>
                    </div>
                </article>

                {classe4Projects.map((project, index) => {
                    return <SchoolProjectRow key={index} project={project} />;
                })}
            </Section>
        </>
    );
}
