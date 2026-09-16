// src/pages/Home.jsx
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <article>
            <h1>React Games</h1>
            <h2>Functional Games</h2>
            <div className='vertical-stretch-box'>
                <button><Link to={'/tictactoe'} >Tic Tac Toe</Link></button>
            </div>
            <h2>In Progress</h2>
            <ul>
                <li>None</li>
            </ul>
            <h2>Planned Add-ins</h2>
            <ul>
                <li>Color guesser</li>
            </ul>
            
        </article>
    )
}