import React from 'react';
import Hero from '../components/Hero';
import SchoolProjectRow from '../components/SchoolProjectRow';
import Section from '../components/Section';
import { classe4Projects } from '../content/classe4Projects';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Classe3() {
    return (
        <>
            <Hero text="A.S. 2019/2020" />
            <Section>
                <article className="message is-danger">
                    <div className="message-body">
                        <p>
                            <FaExclamationTriangle className="icon is-small" /> Non sono state svolte attività di PCTO causa COVID-19.
                        </p>
                    </div>
                </article>

                {classe4Projects.map(({ companyName, logoSrc, websiteName, websiteLink, description, timestamp, projectRoute }) => {
                    return <SchoolProjectRow companyName={companyName} logoSrc={logoSrc} websiteName={websiteName} websiteLink={websiteLink} description={description} timestamp={timestamp} projectRoute={projectRoute} />;
                })}
            </Section>
        </>
    );
}
