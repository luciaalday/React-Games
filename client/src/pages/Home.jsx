// src/pages/Home.jsx
export default function Home() {
    return (
        <article>
            <h1>Home page</h1>
            <svg viewBox="-5 -5 110 120" width={150} height={150}>
                {/** 
                 * line
                 <line x1={0} y1={0} x2={100} y2={100} />
                 * polyline
                 <polyline points="0 0, 100 50, 50 100" />
                 * circle
                 <circle cx="10" cy="10" r="15" />
                 * rect
                 <rect x="10" y="10" width="20" height="50" />>
                 * polygon
                 <polygon points="0 0, 100 50, 50 100" />
                 * path
                 <path
                    d="M 50 0 Q 50 100 0 100 A 50 50 0 0 1 100 100 Q 70 80 70 30 Q 65 100 50 110"
                 />
                 */}
            </svg>
            <h4>Goals to implement</h4>
            <ul>
               <li>Navigation
                    <ul>
                        <li>Mobile menu integration</li>
                        <li>Dropdown menu</li>
                    </ul>
               </li>
               <li>Block formatting layout</li>
               <li>Custom color picker</li>
                    <ul>
                        <li>
                            <input type="color" className="color-picker" />
                        </li>
                    </ul>
               <li>Slate text editor integration</li>
               <li>Database integration</li>
            </ul>
        </article>
    )
}