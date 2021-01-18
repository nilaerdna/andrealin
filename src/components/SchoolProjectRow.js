import React from 'react';

export default function SchoolProjectRow({ companyName, logoSrc, websiteName, websiteLink, description, timestamp, projectRoute }) {
    return (
        <article className="media">
            <figure className="media-left">
                <p className="image is-128x128">
                    <a href={projectRoute}>
                        <img className="is-rounded" alt="Company Logo" src={logoSrc} />
                    </a>
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