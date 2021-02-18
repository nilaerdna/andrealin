import React from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { TiWarning } from 'react-icons/ti';
export default function Cna() {
    return (
        <>
            <Hero text="AND Emili">
                <img src="assets/Logo.svg" alt="School Logo" class="icon is-medium" />
            </Hero>
            <Section>
                <div className="columns">
                    <div className="column">
                        <p>
                            <small>27 febbraio 2020 - Andrea Lin.</small>
                        </p>
                        <br />
                        <article className="message is-danger">
                            <div className="message-body">
                                <p className="align-text-icon">
                                    <TiWarning style={{ marginRight: '5px' }} /> Dopo aver positivamente superato il colloquio di selezione ed esser stato abbinato all'azienda non ho potuto fare l'esperienza in azienda a causa della pandemia.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </Section>
        </>
    );
}
