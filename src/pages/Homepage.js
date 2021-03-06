import React from 'react';
import Section from '../components/Section';
import Hero from '../components/Hero';
import HomepageCard from '../components/HomepageCard';
import OtherCard from '../components/OtherCard';
import { BiGame } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { IoHardwareChip, IoCodeSlash } from 'react-icons/io5';
import { languages } from '../content/languages';
import { libraries } from '../content/libraries';
import SkillProgress from '../components/SkillProgress';

export default function Homepage() {
    const birthday = new Date('2002-10-31');

    const calculateAge = (birthday) => {
        let difference = Date.now() - birthday.getTime();
        let date = new Date(difference);
        return Math.abs(date.getUTCFullYear() - 1970);
    };

    const age = calculateAge(birthday);

    return (
        <>
            <Hero text="Andrea Lin">
                <img src="assets/Logo.svg" alt="School Logo" className="icon is-medium" />
            </Hero>

            <Section>
                <div className="columns is-multiline">
                    <div className="column is-half">
                        <HomepageCard icon={<img className="is-rounded" src="https://i.imgur.com/TgxmYrp.jpg" alt="Foto" />} title="Andrea Lin" color="is-info">
                            <p>
                                {age} anni
                                <br />
                                IIS Blaise Pascal, RE.
                            </p>
                        </HomepageCard>
                    </div>
                    <div className="column is-half">
                        <HomepageCard icon={<BiGame size="64" />} title="Hobbies" color="is-warning">
                            <p>
                                Computer Hardware
                                <br />
                                Videogames
                            </p>
                        </HomepageCard>
                    </div>
                    <div className="column is-one-third">
                        <OtherCard icon={<FaUser className="has-text-danger icon is-medium" />} title="Chi sono?">
                            <p className="subtitle">Ciao, mi chiamo Andrea Lin, abito a Poviglio, ho {age} anni e studio informatica all'I.I.S. Blaise Pascal di Reggio Emilia.</p>
                        </OtherCard>
                    </div>
                    <div className="column is-one-third">
                        <OtherCard icon={<IoHardwareChip className="has-text-dark icon is-medium" />} title="Hardware">
                            <p className="subtitle">Mi piace avere qualsiasi gadget tecnologico sotto mano, io stesso mi sono assemblato il mio computer!</p>
                        </OtherCard>
                    </div>
                    <div className="column is-one-third">
                        <OtherCard icon={<IoCodeSlash className="has-text-success icon is-medium" />} title="Coding">
                            <p className="subtitle">Ho iniziato a scrivere codice all'età di 13 anni, e da lì mi sono innamorato della materia. Attualmente sono immerso nel mondo del Web Development, con lo stack MERN.</p>
                        </OtherCard>
                    </div>
                    <div className="column is-half">
                        <SkillProgress skill={languages} />
                    </div>
                    <div className="column is-half">
                        <SkillProgress skill={libraries} />
                    </div>
                </div>
            </Section>
        </>
    );
}
