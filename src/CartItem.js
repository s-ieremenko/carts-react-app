import React from 'react'
import { ReactComponent as ArrowUp } from './images/up-arrow-svgrepo-com.svg'
import { ReactComponent as ArrowDown } from './images/down-arrow-svgrepo-com.svg'
import { useGlobalContext } from './context'

const CartItem = ({ id, title, price, img, quantity }) => {
    const { remove, increase, decrease } = useGlobalContext()

    const formatPrice = (price) =>
        `$ ${price.toLocaleString('en-US')}`

    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <div className="content-part">
                <h4>{title}</h4>
                <h4 className="item-price">{formatPrice(price)}</h4>
                <button onClick={() => remove(id)}>remove</button>
            </div>
            <div className="counter">
                <button
                    className="arrowUp"
                    onClick={() => increase(id)}
                >
                    <ArrowUp />
                </button>
                <p>{quantity}</p>
                <button
                    className="arrowDown"
                    onClick={() => decrease(id)}
                >
                    <ArrowDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem
