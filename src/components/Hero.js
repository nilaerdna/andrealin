import React from 'react';

export default function Hero({icon, text}) {
    return (
        <section className="hero has-background-light">
            <div className="hero-body is-flex is-justify-content-center is-align-content-center">
                <h1>{text}</h1>
            </div>
        </section>
    );
}
