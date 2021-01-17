import React, { useState } from 'react';

export default function Navbar () {
    const [isActive, setActive] = useState("");
    /*
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    */

    const handleActiveToggle = () => {
        if (isActive === '') {
            setActive('is-active');
        } else {
            setActive('');
        }
    }

    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://nilaerdna.github.io/images/Logo.png" alt="Logo"/>
                </a>

                <a role="button" className={'navbar-burger ' + isActive} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={handleActiveToggle}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={'navbar-menu ' + isActive}>
                <div className="navbar-start">
                    <a className="navbar-item">Home</a>
                    <a className="navbar-item">A.S. 2018/2019</a>
                    <a className="navbar-item">A.S. 2019/2020</a>
                    <a className="navbar-item">A.S. 2020/2021</a>
                    <a className="navbar-item">Altri Progetti</a>
                </div>
            </div>
        </nav>
    );
}