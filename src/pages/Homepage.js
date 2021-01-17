import React from 'react';
import Section from '../components/Section';
import Hero from '../components/Hero';
import HomepageCard from '../components/HomepageCard';

export default function Homepage({ icon, text }) {
    return (
        <>
            <Hero text="Andrea Lin" />
            <Section>
                <div class="columns">
                    <div class="column">
                        <HomepageCard 
                            icon={<img className="is-rounded" src="https://nilaerdna.github.io/images/meirl.jpg" alt="icon" />} 
                            title="Andrea Lin"
                        />
                    </div>
                    <div class="column">
                        <HomepageCard />
                    </div>
                    <div class="column">
                        <HomepageCard />
                    </div>
                </div>
            </Section>
        </>
    );
}
