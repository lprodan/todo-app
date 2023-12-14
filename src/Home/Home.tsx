import {Link} from "react-router-dom";
import "./Home.css"

export default function Home() {
    return <>
        <div className="container">
            <div>
                <p className="container-header">Organize your work and life, finally.</p>
                <p className="container-content">Become focused, organized, and calm with ToDo List.</p>
            </div>
            <Link to="/tasks" className="container-footer">Start To Do</Link>
        </div>
        <div>
            <p className="flower-link"><a href='https://pngtree.com/freepng/watercolor-flower-wisteria-purple-flower-bunch_6409023.html'>
                png image from pngtree.com/</a></p>
        </div>
    </>
}