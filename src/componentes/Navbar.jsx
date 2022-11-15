import { Link } from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context.js"

const Navbar = () => {
    const { cartTotal } = useContext(Context)
    return (

        <nav className="main-nav">
            <Link to="/"><h3><i className="fa-solid fa-pizza-slice"></i> Pizzería Mammá Mía!</h3></Link>
            <Link to="/carrito"><i className="fa-sharp fa-solid fa-cart-shopping"> ${cartTotal()}</i></Link>
        </nav>
    )

}

export default Navbar