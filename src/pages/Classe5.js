import React from 'react';
import Hero from '../components/Hero';
import SchoolProjectRow from '../components/SchoolProjectRow';
import Section from '../components/Section';
import { classe5Projects } from '../content/classe5Projects';

export default function Classe3() {
    return (
        <>
            <Hero text="A.S. 2020/2021" />
            <Section>
                {classe5Projects.map(({ companyName, logoSrc, websiteName, websiteLink, description, timestamp, projectRoute }) => {
                    return <SchoolProjectRow companyName={companyName} logoSrc={logoSrc} websiteName={websiteName} websiteLink={websiteLink} description={description} timestamp={timestamp} projectRoute={projectRoute} />;
                })}
            </Section>
        </>
    );
}
