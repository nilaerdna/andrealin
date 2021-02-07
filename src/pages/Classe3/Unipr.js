import React from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export default function Unipr() {
    return (
        <>
            <Hero text="Università di Parma">
                <img src="assets/Logo.svg" alt="School Logo" class="icon is-medium" />
            </Hero>
            <Section>
                <div className="columns">
                    <div className="column is-12">
                        <p>
                            {' '}
                            <small>
                                10, 11, 12, 13, 14 giugno 2019
                                <br />
                                Studenti: Andrea Lin, Jonathan Mandato, Chiara Franco, Giulio Mantovi, Andrea De Vietro, Alex Billa, Alberto Catellani, Salvatore Di Lorenzo, Mattia Alberini, Camilla Davolio.
                            </small>{' '}
                        </p>
                        <br />
                        <h1 className="title">Richiesta</h1>
                        <h2 className="subtitle">
                            Riprodurre il videogioco{' '}
                            <a target="_blank" href="https://youtu.be/WNrz9_Fe-Us">
                                Frogger
                            </a>{' '}
                            nei linguaggi Python o Go.
                            <br />
                            <br />
                            <a className="button is-info is-outlined is-hoverable modal-button" data-target="manifest">
                                Locandina
                            </a>
                            <a className="button is-info is-outlined is-hoverable modal-button mx-1" data-target="certificate">
                                Attestato di partecipazione
                            </a>
                            <a className="button is-info is-outlined is-hoverable" href="https://docs.google.com/forms/d/e/1FAIpQLSe8u8CEMKHuyyRfqC7douu4IcXsj_9ZZ4M2gZR7TkwDiAYshw/viewanalytics" target="_blank">
                                Risultato form finale
                            </a>
                        </h2>
                        <hr />
                        <h1 className="title">Cosa abbiamo fatto?</h1>
                        <p>
                            L'esperienza è durata 5 giorni in totale, con 4 ore obbligatorie la mattina e 4 ore facoltative il pomeriggio.
                            <br />
                            Erano presenti studenti di altre scuole, alcuni non avevano mai programmato, con le conoscenze acquisite durante gli anni precendenti è stato un po' più semplice capire i concetti base anche se in un liguaggio nuovo.
                            Durante lo sviluppo del videogioco, eravamo assistiti da studenti dell'università che ci aiutavano se avessimo avuto bisogno.
                        </p>
                        <hr />
                        <h1 className="title">Conclusioni / Competenze acquisite</h1>
                        <p>Siamo riusciti a creare una versione del gioco parzialmente simile all'originale imparando a programmare in un linguaggio nuovo, ci hanno anche spiegato le classi, che affronteremo l'anno prossimo in classe.</p>
                        <hr />
                        <a className="button is-link is-outlined is-fullwidth is-hoverable" href="#attualmente_non_disponibile">
                            Risultato finale
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
}
