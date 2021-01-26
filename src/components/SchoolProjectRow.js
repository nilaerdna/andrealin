import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

export default function SchoolProjectRow({ project }) {
    const { companyName, logoSrc, websiteName, websiteLink, description, timestamp, projectRoute } = project;
    const { url } = useRouteMatch();
    return (
        <article className="media">
            <figure className="media-left">
                <p className="image is-128x128">
                    <Link to={`${url}/${projectRoute}`}>
                        <img className="is-rounded hover-effect" alt="Company Logo" src={logoSrc} />
                    </Link>
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{companyName}</strong>{' '}
                        <small>
                            <a target="_blank" rel="noopener noreferrer" href={websiteLink}>
                                {websiteName}
                            </a>
                        </small>{' '}
                        <small>{timestamp}</small>
                        <br />
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
}
