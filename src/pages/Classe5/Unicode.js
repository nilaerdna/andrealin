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
                    <div className="column is-12">
                        <p>
                            <small>
                                9 aprile 2019 - Classe 4<sup>a</sup>D.
                            </small>
                        </p>
                        todo
                    </div>
                </div>
            </Section>
        </>
    );
}
