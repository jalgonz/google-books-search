import "./nav.scss";
import {Link} from "react-router-dom";

export default function Nav() {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="/">Google Book Search</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Main<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/saved">Saved Collection</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
