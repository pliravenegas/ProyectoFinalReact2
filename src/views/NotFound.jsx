import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <main>
            <div className="not-found">
                <h1>It's a 404 error! </h1>

                <h3>¡The page you are looking for can't  be found! </h3>

                <Link to="/" className="btn btn-primary"> Home</Link>
            </div>
        </main>

    )

}

export default NotFound