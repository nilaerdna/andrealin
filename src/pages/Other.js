import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProjectRow from '../components/ProjectRow';
import { projects } from '../content/projects';

export default function Other() {
    return (
        <>
            <Hero text="Altri Progetti" />
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
                            <Link target="_blank" href="https://github.com/nilaerdna">
                                GitHub <FaGithub />
                            </Link>
                            .
                        </p>
                    </div>
                </article>
                {projects.map(({name, image, description, link})=>{
                    return(<ProjectRow name={name} image={image} description={description} link={link}/>);
                })}
            </Section>
        </>
    );
}
