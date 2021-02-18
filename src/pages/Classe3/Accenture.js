import React from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export default function Accenture() {
    return (
        <>
            <Hero text="Accenture">
                <img src="assets/Logo.svg" alt="School Logo" class="icon is-medium" />
            </Hero>
            <Section>
                <div className="columns">
                    <div className="column">
                        <p>
                            <small>
                                9 aprile 2019 - Classe 3<sup>a</sup>D.
                            </small>
                        </p>
                        <br />
                        <div className="content">
                            <h1 className="title is-size-4">Cosa abbiamo fatto?</h1>
                            <p className="subtitle is-size-6"></p>

                            <hr />
                            <h1 className="title is-size-4">Conclusioni</h1>
                            <p className="subtitle is-size-6"></p>
                        </div>
                        <a className="button is-link is-outlined is-fullwidth is-hoverable" rel="noopener noreferrer" target="_blank" href="https://linandrea.netlify.app/accenture/accenture.jpeg">
                            Certificato di partecipazione
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
}
