import React from 'react';
import { SiBulma, SiReact} from 'react-icons/si';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Portfolio PCTO</strong> di <strong>Andrea Lin</strong>
                    <br />
                    IIS Blaise Pascal, RE. 2018 - 2021.
                </p>
                <SiReact size="25"/>
                <SiBulma size="25"/>
            </div>
        </footer>
    );
}
