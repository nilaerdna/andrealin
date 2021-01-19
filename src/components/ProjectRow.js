import React from 'react';

export default function ProjectRow({ project }) {
    const { name, image, description, link } = project;
    return (
        <article className="media">
            <figure className="media-left">
                <a className="image is-128x128" target="_blank" rel="noopener noreferrer" href={link}>
                    <img className="is-rounded hover-effect" alt="Project Icon" src={image} />
                </a>
            </figure>
            <div className="media-content">
                <div className="content media-right">
                    <p>
                        <strong>{name}</strong>
                        <br />
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
}
