import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { FaGithub, FaCogs } from 'react-icons/fa';
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
                        <p>
                            Molti dei progetti sottostanti sono presenti sul mio profilo{' '}
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/nilaerdna">
                                GitHub <FaGithub className="icon is-small" />
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
