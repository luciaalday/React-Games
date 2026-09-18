// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const nav = useNavigate();

    return (
        <article>
            <h1>React Games</h1>
            <h2>Functional Games</h2>
            <div className='vertical-stretch-box'>
                <button onClick={()=>nav('/tictactoe')}>Tic Tac Toe</button>
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