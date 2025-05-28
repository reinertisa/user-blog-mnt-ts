import {Link} from "react-router";

export default function NotFound() {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to the home page...</Link>
        </div>
    )
}