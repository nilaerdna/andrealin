import React from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export default function Montasmonta() {
    return (
        <>
            <Hero text="Monta Smonta">
                <img src="assets/Logo.svg" alt="School Logo" class="icon is-medium" />
            </Hero>
            <Section>
                <div className="columns">
                    <div className="column is-12">
                        <p>
                            <small>2 marzo 2019 - Gruppo: Andrea Lin, Jonathan Mandato, Alessandro Franceschini.</small>
                        </p>
                        <br />
                        <h1 className="title">Richiesta</h1>
                        <h2 className="subtitle">Smontare un computer e rimontarlo funzionante.</h2>
                        <hr />
                        <h1 className="title">Conclusioni</h1>
                        <h2 className="subtitle">
                            I computer che sono stati smontati e rimontati sono diversi da quelli normali perché possiedono componentistica proprietaria (in questo caso di Fujitsu), quindi la lezione è stata più un’infarinatura generale su come si
                            smonta/monta e sui componenti un computer che una vera e propria guida su come si monta un computer.
                        </h2>
                        <hr />
                        <a className="button is-link is-outlined is-fullwidth is-hoverable" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1uv7hWXZjpxORPaGhulY0SoxgYJf6DUNwF2K-Uhj7l-8">
                            Relazione consegnata al professore
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
}