import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { FaCogs, FaGithubSquare } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import ProjectRow from '../components/ProjectRow';
import { projects } from '../content/projects';

export default function Other() {
    return (
        <>
            <Hero text="Altri Progetti">
                <FaCogs className="icon is-medium is-dark" />
            </Hero>
            <Section>
                <article className="message is-info">
                    <div className="message-body">
                        <p>In questa pagina sono presenti vari progetti personali o realizzati a scuola non relativi ad attività di alternanza o PCTO.</p>
                    </div>
                </article>

                <article className="message is-dark">
                    <div className="message-body">
                        <p className="align-text-icon">
                            Molti dei progetti sottostanti sono presenti sul mio profilo
                            <GoMarkGithub style={{ marginRight: '5px', marginLeft: '5px' }} />
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/nilaerdna">
                                GitHub
                            </a>
                            .
                        </p>
                    </div>
                </article>
                {projects.map((project, index) => {
                    return <ProjectRow key={index} project={project} />;
                })}
            </Section>
        </>
    );
}
