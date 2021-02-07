import React from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export default function Leonardodavinci() {
    return (
        <>
            <Hero text="Leonardo Da Vinci">
                <img src="assets/Logo.svg" alt="School Logo" class="icon is-medium" />
            </Hero>
            <Section>
                <div className="columns">
                    <div className="column is-12">
                        <p>
                            <small>
                                27 febbraio - 6, 13, 27 marzo - 17 aprile 2019
                                <br />
                                Studenti: Andrea Lin, Domenico Policastro, Raffaele Andrei, Francesco Pio Nardella, Mattia Ferrari, Giacomo Carlo Camellini, Chiara Franco, Jennifer Bruno, Claudio Scognamiglio, Tommaso Braglia, Cecilia Grisendi,
                                Matteo Munari, Giulia Menozzi, Denise Napoli.
                            </small>
                        </p>
                        <br />
                        <h1 className="title">Richiesta</h1>
                        <h2 className="subtitle">Prestare servizio individuale aderendo al progetto "INFO.HTML" promosso dall'Istituto Comprensivo "Leonardo da Vinci" di Reggio Emilia e dall'Istituto Blaise Pascal di Reggio Emilia.</h2>
                        <hr />
                        <h1 className="title">Lezioni proposte</h1>
                        <p>Le lezioni proposte ai ragazzi sono stati:</p>
                        <ol>
                            <li>Scratch: introduzione al programma, e primi esercizi.</li>
                            <li>Scratch: approfondimento, utilizzo di nuovi blocchi.</li>
                            <li>Flowchart, diagrammi a blocchi e introduzione ai linguaggi di programmazione.</li>
                            <li>C++: Introduzione al linguaggio di programmazione.</li>
                            <li>C++: Approfondimento.</li>
                        </ol>
                        <hr />
                        <h1 className="title">Conclusioni e competenze acquisite</h1>
                        <p>Abbiamo imparato come insegnare e gestire una classe.</p>
                        <hr />
                        <a className="button is-link is-outlined is-fullwidth is-hoverable" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/drive/folders/1AAzGt5F87I_3aHbIQ9iFqfQlKBB3llqo?usp=sharing">
                            Lezioni presentate agli studenti
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
}
