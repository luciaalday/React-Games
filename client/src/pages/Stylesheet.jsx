import { useState, useEffect, useRef } from 'react';
import '../css/defaults.css';

const COLOR_GROUPS = {
    'Primary': ['--primary', '--primary-light', '--primary-lighter', '--primary-dark'],
    'Accent': ['--accent'],
    'Neutral': ['--background', '--text'],
};

export default function Stylesheet() {
    const containerRef = useRef(null);
    const [values, setValues] = useState({});

    useEffect(() => {
        const styles = getComputedStyle(containerRef.current);
        const resolved = {};
        Object.values(COLOR_GROUPS).flat().forEach((name) => {
            resolved[name] = styles.getPropertyValue(name).trim();
        });
        setValues(resolved);
    }, []);

    return (
        <article ref={containerRef}>
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
            <p>Lorem ipsum</p>

            <h1>Colors</h1>
            {Object.entries(COLOR_GROUPS).map(([groupName, vars]) => (
                <div className="color-group" key={groupName}>
                    <h2 style={{textAlign:'left'}}>{groupName}</h2>
                    <div className="color-swatches">
                        {vars.map((name) => (
                            <div
                                className="color-swatch"
                                key={name}
                                style={{ backgroundColor: `var(${name})` }}
                            >
                                <h5>{name.replace('--', '')}</h5>
                                <p>{values[name]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="card">
                <h2>Card</h2>
            </div>
        </article>
    );
}