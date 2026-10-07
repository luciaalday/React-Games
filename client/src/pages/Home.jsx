// src/pages/Home.jsx
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <article>
            <h1>React Games</h1>
            <h2>Functional Stuff</h2>
            <ul>
                <li><Link to='/tictactoe'>Tic Tac Toe</Link></li>
                <li><Link to='/trips'>Trip Planner</Link></li>
            </ul>
            <h2>In Progress</h2>
            <ul>
                <li>Watch Workout App Mockups</li>
            </ul>
            <h2>Planned Add-ins</h2>
            <ul>
                <li>Color guesser</li>
                <li>Trip Planner</li>
            </ul>
            <h2>Planned Larger Projects</h2>
            <ul>
                <li><h3>Swim Workouts Apple Watch App</h3></li>
                <ul>
                    <li>Haptics for intervals</li>
                    <li>Phone app to create workouts</li>
                    <li>Workouts split into 4 repeatable sections</li>
                    <ol>
                        <li>Warm up</li>
                        <li>Work</li>
                        <li>Recovery</li>
                        <li>Cool down</li>
                    </ol>
                </ul>
            </ul>
            
        </article>
    )
}