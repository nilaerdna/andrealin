import React from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export default function Unicode() {
    return (
        <>
            <Hero text="Unicode">
                <img src="assets/Logo.svg" alt="School Logo" class="icon is-medium" />
            </Hero>
            <Section>
                <div className="columns">
                    <div className="column">
                        <p>13, 27 novembre 2020 - Andrea Lin, Mattia Ferrari.</p>
                        <br />
                        <h1 className="title is-size-4">Richiesta</h1>
                        <p className="subtitle is-size-6">
                            Scegliere uno dei tre progetti mostrati e presentare delle slide PowerPoint per punti con descrizione sintetica dell’approccio utilizzato e descrizione dettagliata degli output di progetto richiesti
                        </p>
                        <hr />
                        <h1 className="title is-size-4">Cosa abbiamo fatto?</h1>
                        <p className="subtitle is-size-6">
                            Noi abbiamo scelto di presentare il progetto numero 3: «Soluzione per Comandi Gestuali» perché secondo noi era il progetto più interessante dei 3 proposti.
                            <br />È possibile visualizzare la presentazione da noi realizzata con il pulsante sottostante.
                        </p>
                        <hr />
                        <h1 className="title is-size-4">Conclusioni</h1>
                        <p className="subtitle is-size-6">L'attività è stata molto interessante, ma sono rimasto un po' deluso perché mi aspettavo qualcosa di più pratico.</p>
                        <hr />
                        <div className="columns">
                            <div className="column">
                                <a className="button is-link is-outlined is-fullwidth is-hoverable" rel="noopener noreferrer" target="_blank" href="https://linandrea.netlify.app/unicode/Progetto3_Soluzione_per_Comandi_Gestuali.pdf">
                                    Presentazione
                                </a>
                            </div>
                            <div className="column">
                                <a className="button is-success is-outlined is-fullwidth is-hoverable" rel="noopener noreferrer" target="_blank" href="https://linandrea.netlify.app/unicode/Presentazione_e_consegna_UNICODE.pdf">
                                    Azienda e consegne
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
