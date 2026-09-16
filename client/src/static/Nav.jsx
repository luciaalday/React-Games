import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <div className="icon">&#9776;</div>
            <div className="nav-links">
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/style'>Stylesheet</Link>
                <div className="dropdown">
                    <div className="nav-link inactive">Games</div>
                    <div className="dropdown-content">
                        <Link className="nav-link" to='/tictactoe'>TicTacToe</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}