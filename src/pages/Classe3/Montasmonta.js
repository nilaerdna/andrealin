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
                    <div className="column">
                        <p>
                            <small>2 marzo 2019 - Gruppo: Andrea Lin, Jonathan Mandato, Alessandro Franceschini.</small>
                        </p>
                        <br />
                        <h1 className="title is-size-4">Richiesta</h1>
                        <p className="subtitle is-size-6">Smontare un computer e rimontarlo funzionante.</p>
                        <hr />
                        <h1 className="title is-size-4">Conclusioni</h1>
                        <p className="subtitle is-size-6">
                            I computer che sono stati smontati e rimontati sono diversi da quelli normali perché possiedono componentistica proprietaria (in questo caso di Fujitsu), quindi la lezione è stata più un’infarinatura generale su come si
                            smonta/monta e sui componenti un computer che una vera e propria guida su come si monta un computer.
                        </p>
                        <hr />
                        <a className="button is-link is-outlined is-fullwidth is-hoverable" rel="noopener noreferrer" target="_blank" href="https://linandrea.netlify.app/montasmonta/relazioneGruppo2.pdf">
                            Relazione consegnata al professore
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
}
