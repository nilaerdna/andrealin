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
                        <p>
                            <small>
                                qualcosa 2021 - Classe 5<sup>a</sup>D.
                            </small>
                        </p>
                        todo
                    </div>
                </div>
            </Section>
        </>
    );
}
