import CartList from "../componentes/CartList.jsx"
import { useContext } from "react"
import Context from "../context/context.js"

const Cart = () => {
    const { cart, addToCart, removeFromCart, cartTotal } = useContext(Context)
    return (
        <main>
            <div className="cart">
                <h2>Detalles del pedido</h2>
                {
                    cart.length !== 0 ?
                        <CartList
                            cart={cart}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            cartTotal={cartTotal}>
                            </CartList>
            : <p className="empty-cart">El carrito está vacio</p>
                }
        </div>
        </main >
    )

}

export default Cart
