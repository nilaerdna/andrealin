import React from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export default function Tiwi() {
    return (
        <>
            <Hero text="Tiwi">
                <img src="assets/Logo.svg" alt="School Logo" class="icon is-medium" />
            </Hero>
            <Section>
                <div className="columns">
                    <div className="column is-12">
                        <p>
                            <small>7, 8, 9 gennaio 2019 - Gruppo: Andrea Lin, Jonathan Mandato, Alessandro Franceschini, Filippo Gelosini.</small>
                        </p>
                        <br />
                        <h1 className="title">Richiesta</h1>
                        <h2 className="subtitle">Introdurre un'idea innovativa (ipotizzando che non esistesse) realizzando un relativo video/presentazione da mostrare ad un ipotetico datore di lavoro </h2>
                        <hr />
                        <p>Ci hanno dato 5 punti chiave sulla quale basare il video:</p>
                        <ol>
                            <li>Individuare il problema</li>
                            <li>Perchè vorremmo risolvere questo problema</li>
                            <li>Analizzare i competitors sul mercato</li>
                            <li>Valutare se il problema è noto al cliente</li>
                            <li>Pensare agli elementi essenziali da includere nella nostra idea</li>
                        </ol>
                        <p />
                        <br />
                        <p>
                            Con la nostra idea (basata su <strong>Discord</strong>, un servizio di chat vocali gratuito che utilizziamo quotidianamente) abbiamo risposto così ai 5 punti:
                        </p>
                        <ol>
                            <li>Non sono presenti servizi di chat vocali gratuiti, con community estese.</li>
                            <li>I servizi di chat vocali (es. TeamSpeak) sono a pagamento e spesso necessitano di un certo livello di capacità informatiche per la gestione.</li>
                            <li>I competitors offrono servizi molto utilizzati ma di difficile accessibilità.</li>
                            <li>Si, molti clienti abbandonano tali servizi perché non riescono a permettersi i costi di mantenimento di quei server.</li>
                            <li>Il nostro servizio deve essere di semplice utilizzo, gratuito, intuitivo.</li>
                        </ol>
                        <hr />
                        <h1 className="title">Conclusioni</h1>
                        <h2 className="subtitle">
                            L'attività è stata molto divertente, la realizzazione del video è stata semplificata dall'utilizzo di{' '}
                            <a target="_blank" rel="noopener noreferrer" href="https://www.powtoon.com/">
                                PowToon
                            </a>
                            {', '}
                            invece la scelta dell'idea è stata difficile anche se basata su una già esistente.
                        </h2>
                        <hr />
                        <a className="button is-link is-outlined is-fullwidth is-hoverable" rel="noopener noreferrer" target="_blank" href="synergize\index.html">
                            Demo
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
}
