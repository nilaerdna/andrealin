import React, { useState } from 'react';

export default function SkillProgress({ skill }) {
    const [skillPerc, setSkillPerc] = useState(skill.languages[0].perc);
    return (
        <>
            <h2 className="title is-size-3">{skill.title}</h2>
            <div>
                <div className="buttons are-small">
                    {skill.languages.map(({ name, perc }) => {
                        return (
                            <button
                                className="button"
                                onClick={() => {
                                    setSkillPerc(perc);
                                }}
                            >
                                {name}
                            </button>
                        );
                    })}
                </div>
                {skillPerc}%
                <progress className="progress is-small" value={skillPerc} max={100}>
                    {skillPerc}%
                </progress>
            </div>
        </>
    );
}
