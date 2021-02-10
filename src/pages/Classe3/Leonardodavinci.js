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
                    <div className="column">
                        <p>
                            <small>
                                27 febbraio - 6, 13, 27 marzo - 17 aprile 2019
                                <br />
                                Studenti: Andrea Lin, Domenico Policastro, Raffaele Andrei, Francesco Pio Nardella, Mattia Ferrari, Giacomo Carlo Camellini, Chiara Franco, Jennifer Bruno, Claudio Scognamiglio, Tommaso Braglia, Cecilia Grisendi,
                                Matteo Munari, Giulia Menozzi, Denise Napoli.
                            </small>
                        </p>
                        <br />
                        <h1 className="title is-size-4">Richiesta</h1>
                        <p className="subtitle is-size-6">Prestare servizio individuale aderendo al progetto "INFO.HTML" promosso dall'Istituto Comprensivo "Leonardo da Vinci" di Reggio Emilia e dall'Istituto Blaise Pascal di Reggio Emilia.</p>
                        <hr />
                        <h1 className="title is-size-4">Lezioni proposte</h1>
                        <p>Le lezioni proposte ai ragazzi sono stati:</p>
                        <ol>
                            <li>Scratch: introduzione al programma, e primi esercizi.</li>
                            <li>Scratch: approfondimento, utilizzo di nuovi blocchi.</li>
                            <li>Flowchart, diagrammi a blocchi e introduzione ai linguaggi di programmazione.</li>
                            <li>C++: Introduzione al linguaggio di programmazione.</li>
                            <li>C++: Approfondimento.</li>
                        </ol>
                        <hr />
                        <h1 className="title is-size-4">Conclusioni e competenze acquisite</h1>
                        <p className="subtitle is-size-6">Abbiamo imparato come insegnare e gestire una classe.</p>
                        <hr />
                        <div className="columns">
                            <div className="column">
                                <a className="button is-primary is-outlined is-fullwidth" rel="noopener noreferrer" target="_blank" href="https://linandrea.netlify.app/leonardodavinci/partecipanti_DaVinci.pdf">
                                    Organizzazione
                                </a>
                            </div>
                            <div className="column">
                                <a className="button is-link is-outlined is-fullwidth" rel="noopener noreferrer" target="_blank" href="https://linandrea.netlify.app/leonardodavinci/Scratch1.pdf">
                                    Lezione 1
                                </a>
                            </div>
                            <div className="column">
                                <a className="button is-info is-outlined is-fullwidth" rel="noopener noreferrer" target="_blank" href="https://linandrea.netlify.app/leonardodavinci/Scratcp.pdf">
                                    Lezione 2
                                </a>
                            </div>
                            <div className="column">
                                <a className="button is-success is-outlined is-fullwidth" rel="noopener noreferrer" target="_blank" href="https://linandrea.netlify.app/leonardodavinci/DiagrammiABlocchi.pdf">
                                    Lezione 3
                                </a>
                            </div>
                            <div className="column">
                                <a className="button is-warning is-outlined is-fullwidth" rel="noopener noreferrer" target="_blank" href="https://linandrea.netlify.app/leonardodavinci/LezioneDiCpp.pdf">
                                    Lezione 4
                                </a>
                            </div>
                            <div className="column">
                                <a className="button is-danger is-outlined is-fullwidth" rel="noopener noreferrer" target="_blank" href="https://linandrea.netlify.app/leonardodavinci/EserciziInCpp.pdf">
                                    Lezione 5
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
