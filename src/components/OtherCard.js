import React from 'react';

export default function OtherCard ({icon, title, children}){
    return (
            <article className="media notification has-background-white">
                <figure className="media-left">
                    <span>
                        {icon}
                    </span>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <h1 className="is-size-4">{title}</h1>
                        {children}
                    </div>
                </div>
            </article>
    );
}