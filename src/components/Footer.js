import React from 'react';
import { SiBulma, SiReact, SiReactrouter } from 'react-icons/si';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Portfolio PCTO</strong> di <strong>Andrea Lin</strong>
                    <br />
                    IIS Blaise Pascal, RE. 2018 - 2021.
                </p>
                <SiBulma className="icon is-medium px-1" />
                <SiReact className="icon is-medium px-1" />
                <SiReactrouter className="icon is-medium px-1" />
            </div>
        </footer>
    );
}
