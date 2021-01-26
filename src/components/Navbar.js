import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
    const [isActive, setActive] = useState('');

    const handleActiveToggle = () => {
        if (isActive === '') {
            setActive('is-active');
        } else {
            setActive('');
        }
    };

    return (
        <nav className="navbar is-fixed-top" role="navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <img src="/assets/Logo.svg" alt="Logo" />
                </Link>

                { /* eslint-disable-next-line */ }
                <a role="button" className={'navbar-burger ' + isActive} onClick={handleActiveToggle}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className={'navbar-menu ' + isActive}>
                <div className="navbar-start">
                    <NavLink className="navbar-item" exact to="/" activeClassName="is-active">
                        Home
                    </NavLink>
                    <NavLink className="navbar-item" to="/3" activeClassName="is-active">
                        A.S. 2018/2019
                    </NavLink>
                    <NavLink className="navbar-item" to="/4" activeClassName="is-active">
                        A.S. 2019/2020
                    </NavLink>
                    <NavLink className="navbar-item" to="/5" activeClassName="is-active">
                        A.S. 2020/2021
                    </NavLink>
                    <NavLink className="navbar-item" to="/other" activeClassName="is-active">
                        Altri Progetti
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
