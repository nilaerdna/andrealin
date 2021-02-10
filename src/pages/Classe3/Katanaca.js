import React from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export default function Katanaca() {
    return (
        <>
            <Hero text="KatanaCa'">
                <img src="assets/Logo.svg" alt="School Logo" class="icon is-medium" />
            </Hero>
            <Section>
                <div className="columns">
                    <div className="column">
                        <p>
                            <small>10, 11, 12 gennaio 2019 - Gruppo: Andrea Lin, Federico Giansoldati, Lorenzo Le Pera.</small>{' '}
                        </p>
                        <br />
                        <h1 className="title is-size-4">Richiesta</h1>
                        <p className="subtitle is-size-6">
                            Analizzare la <strong>"K-Mission"</strong> di KatanaCa' e trovare eventuali consigli per un miglioramento nell'esperienza utente all'interno del loro sito, creando possibilmente una demo.
                        </p>
                        <hr />
                        <p>
                            Abbiamo completato l'incarico realizzando una demo e con l'esposizione in aula dei consigli non realizzati da noi per mancanza di tempo ma sopratutto di conoscenze.
                            <br />
                            La nostra lista di consigli:
                        </p>
                        <ol>
                            <li>Cambiare l'ordine delle domande e renderle più efficaci.</li>
                            <li>Rendere il numero di adulti minimo ad 1.</li>
                            <li>Creare un percorso per ogni tipo di casa.</li>
                            <li>Rimuovere le ripetizioni tra le domande.</li>
                            <li>All'aggiunta del budget, calcolo automatico della flessibilità inserita.</li>
                            <li>Avere un contatore del possibile costo della casa che si sta cercando.</li>
                            <li>Una mappa interattiva, per indicare la posizione preferita della casa.</li>
                            <li>Durante la creazione dei piani, avere un "puzzle" con le stanze per le preferenze di posizione.</li>
                            <li>Rimozione della sezione "economica" del cliente, poiché la gestione dell'economia deve essere gestita dall'utente stesso.</li>
                        </ol>
                        <hr />
                        <h1 className="title is-size-4">Conclusioni</h1>
                        <p className="subtitle is-size-6">A me l'attività non è piaciuta, perché all'inizio non tutti hanno compreso l'obiettivo, noiosa e poco inerente con l'informatica</p>
                        <hr />
                        <a className="button is-link is-outlined is-fullwidth is-hoverable" rel="noopener noreferrer" target="_blank" href="https://linandrea.netlify.app/katanaca/">
                            Demo
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
}
