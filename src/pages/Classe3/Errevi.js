import React from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export default function Errevi() {
    return (
        <>
            <Hero text="Errevi System">
                <img src="assets/Logo.svg" alt="School Logo" class="icon is-medium" />
            </Hero>
            <Section>
                <div className="columns">
                    <div className="column is-12">
                        <p>
                            <small>21, 22, 23 gennaio 2019 - Gruppo: Andrea Lin, Elia Conti, Alberto Incerti.</small>
                        </p>
                        <br />
                        <h1 className="title">Richiesta</h1>
                        <h2 className="subtitle">
                            Creare un sito web che interagisce con l'API di{' '}
                            <a target="_blank" rel="noopener noreferrer" href="https://openweathermap.org/">
                                OpenWeatherMap
                            </a>{' '}
                            e che restituisca determinati dati{' '}
                            <a className="modal-button" rel="noopener noreferrer" data-target="pdf">
                                (PDF consegna)
                            </a>
                            .
                        </h2>
                        <hr />
                        <h1 className="title">Conclusioni</h1>
                        <h2 className="subtitle">L'attività mi è piaciuta molto, anche se la realizzazione del sito è stata difficile poiché non conoscevamo JavaScript, jQuery e i file JSON.</h2>
                        <hr />
                        <a className="button is-link is-outlined is-fullwidth is-hoverable" rel="noopener noreferrer" target="_blank" href="sosmeteo\index.html">
                            Demo
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
}
