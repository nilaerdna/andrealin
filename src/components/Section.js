import React from 'react';

export default function Section({children}) {
    return (
        <section className="section has-background-white">
            <div className="container">
                { children }
            </div>
        </section>
    );
}
