import React from 'react';
import Section from '../components/Section';
import Hero from '../components/Hero';
import HomepageCard from '../components/HomepageCard';
import OtherCard from '../components/OtherCard';
import { BiGame } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { IoHardwareChip, IoCodeSlash } from 'react-icons/io5';

export default function Homepage({ icon, text }) {
    const birthday = new Date('2002-10-31');
    
    const calculateAge = (birthday) => {
        let difference = Date.now() - birthday.getTime();
        let date = new Date(difference);
        return Math.abs(date.getUTCFullYear() - 1970);
    };

    const age = calculateAge(birthday);

    return (
        <>
            <Hero text="Andrea Lin" />

            <Section>
                <div className="columns is-multiline">
                    <div className="column is-half">
                        <HomepageCard icon={<img className="is-rounded" src="https://nilaerdna.github.io/images/meirl.jpg" alt="Foto" />} title="Andrea Lin" color="is-info">
                            <p>
                                {age} anni
                                <br />
                                IIS Blaise Pascal, RE.
                            </p>
                        </HomepageCard>
                    </div>
                    <div className="column is-half">
                        <HomepageCard icon={<BiGame classnName="icon" size="64" />} title="Hobbies" color="is-warning">
                            <p>
                                Computer Hardware
                                <br />
                                Videogames
                            </p>
                        </HomepageCard>
                    </div>
                    <div class="column is-one-third">
                        <OtherCard icon={<FaUser class="has-text-danger" size="48" />} title="Chi sono?">
                            <p class="subtitle">Ciao, mi chiamo Andrea Lin, abito a Poviglio, ho {age} anni e studio informatica all'I.I.S. Blaise Pascal di Reggio Emilia.</p>
                        </OtherCard>
                    </div>
                    <div class="column is-one-third">
                        <OtherCard icon={<IoHardwareChip class="has-text-dark" size="48" />} title="Hardware">
                            <p class="subtitle">Mi piace avere qualsiasi gadget tecnologico sotto mano, io stesso mi sono assemblato il mio computer!</p>
                        </OtherCard>
                    </div>
                    <div class="column is-one-third">
                        <OtherCard icon={<IoCodeSlash class="has-text-success" size="48" />} title="Coding">
                            <p class="subtitle">Ho iniziato a scrivere codice all'età di 13 anni, e da lì mi sono innamorato della materia. Attualmente sono immerso nel mondo del Web Development, con lo stack MERN.</p>
                        </OtherCard>
                    </div>
                </div>
                <h1 className="title is-size-3">Skills</h1>
                <h2 className="subtitle is-size-4">Linguaggi</h2>

            </Section>
        </>
    );
}
