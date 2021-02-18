import React from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export default function Cna() {
    return (
        <>
            <Hero text="CNA">
                <img src="assets/Logo.svg" alt="School Logo" class="icon is-medium" />
            </Hero>
            <Section>
                <div className="columns">
                    <div className="column">
                        <p>
                            <small>
                                30 aprile, 7, 15, 18 maggio 2020 - Classe 4<sup>a</sup>D.
                            </small>
                        </p>
                        <br />
                        <div className="content">
                            <h1 className="title is-size-4">Cosa abbiamo fatto?</h1>
                            <p className="subtitle is-size-6">
                                <ul>
                                    <li>Modulo 1 - il 30 aprile abbiamo ascoltato delle presentazioni riguardo a</li>
                                    <ul>
                                        <li>Fake News</li>
                                        <li>Redazione di un curriculum vitae</li>
                                        <li>Come affrontare un colloquio di lavoro</li>
                                        <li>Scrittura corretta sui social</li>
                                    </ul>
                                    <li>Verifica Modulo 1 - 7 maggio</li>
                                    <li>Modulo 2 - Il 15 maggio abbiamo ascoltato delle presentazioni riguardo a:</li>
                                    <ul>
                                        <li>Start up</li>
                                        <li>Story telling</li>
                                        <li>Avvio d'impresa</li>
                                    </ul>
                                    <li>Verifica Modulo 2 - 17 maggio</li>
                                </ul>
                            </p>
                        </div>
                        <hr />
                        <h1 className="title is-size-4">Conclusioni</h1>
                        <p className="subtitle is-size-6">
                            Ho trovato l'attività abbastanza interessante, anche se secondo me non è stata una valida alternativa all'esperienza in azienda.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}
