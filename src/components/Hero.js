import React from 'react';

export default function Hero({ text, children }) {
    return (
        <section className="hero has-background-light">
            <div className="hero-body is-flex is-justify-content-center is-align-content-center">
                <h1 className="title hero-title is-size-3">
                    {children} {text}
                </h1>
            </div>
        </section>
    );
}
