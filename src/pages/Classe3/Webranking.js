import React from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export default function Webranking() {
    return (
        <>
            <Hero text="Webranking">
                <img src="assets/Logo.svg" alt="School Logo" class="icon is-medium" />
            </Hero>
            <Section>
                <div className="columns">
                    <div className="column">
                        <p>
                            <small>17, 18, 19 gennaio 2019 - Gruppo: Andrea Lin, Elia Conti, Alberto Incerti.</small>
                        </p>
                        <br />
                        <h1 className="title is-size-4">Richiesta</h1>
                        <p className="subtitle is-size-6">Creare un sito web e-commerce, con minimo 3 pagine: Home, Pagina Prodotto, Carrello (possibilmente con il carrello funzionante) e disegnare i layout pensati per il sito web.</p>
                        <hr />
                        <p>
                            Il mio gruppo ha deciso di realizzare un sito e-commerce di componentistica hardware, perché è un argomento che ci accomunava. <br />
                            Ci è stato chiesto di compilare una tabella di autovalutazione e di disegnare i layout che volevamo realizzare, abbiamo deciso di strutturare il sito così perché semplice da realizzare per le nostre conoscenze, abbastanza
                            comune tra gli e-commerce e graficamente intuitivo.
                        </p>
                        <br />
                        <table className="table is-bordered is-striped is-fullwidth">
                            <tbody>
                                <tr>
                                    <th></th>
                                    <td>Andrea</td>
                                    <td>Elia</td>
                                    <td>Alberto</td>
                                </tr>
                                <tr>
                                    <td>HTML</td>
                                    <td>9</td>
                                    <td>8</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>CSS</td>
                                    <td>9</td>
                                    <td>8</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>JAVASCRIPT</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Nessuno di noi aveva competenze in JavaScript.</p>
                        <hr />
                        <h1 className="title is-size-4">Conclusioni</h1>
                        <p className="subtitle is-size-6">
                            L'attività è mi è piaciuta, perché inerente all'informatica, creativamente stimolante, e perché non conoscevo dell'esistenza dei framework (abbiamo utilizzato{' '}
                            <a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/">
                                Bootstrap
                            </a>
                            ) e perché siamo riusciti a far funzionare il carrello (
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/wojodesign/simplecart-js">
                                simpleCart<sup>(js)</sup>
                            </a>
                            ).
                        </p>
                        <hr />
                        <div className="columns">
                            <div className="column">
                                <a className="button is-link is-outlined is-fullwidth" rel="noopener noreferrer" target="_blank" href="https://linandrea.netlify.app/webranking/layout.pdf">
                                    Layout
                                </a>
                            </div>
                            <div className="column">
                                <a className="button is-success is-outlined is-fullwidth" rel="noopener noreferrer" target="_blank" href="https://linandrea.netlify.app/webranking/systemvault/">
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
