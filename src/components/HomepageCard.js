import React from 'react';

export default function HomepageCard( {icon, title, children} ) {
    return (
        <article className="media notification">
            <figure className="media-left">
                <p className="image is-64x64">
                    {icon || <img src="https://bulma.io/images/placeholders/128x128.png" alt="placeholder" />}
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{title}</strong>
                        <br />
                        {children || <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>}
                    </p>
                </div>
            </div>
        </article>
    );
}
