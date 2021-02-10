import React from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export default function Energyway() {
    return (
        <>
            <Hero text="Energy Way">
                <img src="assets/Logo.svg" alt="School Logo" class="icon is-medium" />
            </Hero>
            <Section>
                <div className="columns">
                    <div className="column">
                        <p>
                            <small>14, 15, 16 gennaio 2019 - Gruppo: Andrea Lin, Federico Giansoldati, Lorenzo Le Pera.</small>{' '}
                        </p>
                        <br />
                        <h1 className="title">Richiesta</h1>
                        <h2 className="subtitle">
                            Creare grafici relativi ambiente, scuola o cultura con i dati reperibili dal portale{' '}
                            <a target="_blank" rel="noopener noreferrer" href="https://opendata.comune.re.it/">
                                Opendata del comune di Reggio Emilia
                            </a>
                            {', '}
                            calcolando anche possibili costi.
                        </h2>
                        <hr />
                        <h1 className="title">Cosa abbiamo fatto?</h1>
                        <ol>
                            <li>Abbiamo scelto di rappresentare i DVD con più prestiti tra il 2015 e il 2017.</li>
                            <li>Per ogni anno abbiamo selezionato i 20 DVD più richiesti.</li>
                            <li>Abbiamo categorizzato i vari DVD.</li>
                            <li>Abbiamo fatto il grafico rappresentante i prestiti per genere/categoria.</li>
                        </ol>
                        <hr />
                        <h1 className="title">Conclusioni</h1>
                        <h2 className="subtitle">L'attività è stata molto interessante, perché non sapevo dell'esistenza del portale Opendata di Reggio Emilia.</h2>
                        <hr />
                        <a className="button is-link is-outlined is-fullwidth is-hoverable" rel="noopener noreferrer" target="_blank" href="https://linandrea.netlify.app/energyway/StatsCity.pdf">
                            Presentazione e file vari
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
}
