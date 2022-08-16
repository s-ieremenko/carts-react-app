import React from 'react'
import { ReactComponent as ArrowUp } from './images/up-arrow-svgrepo-com.svg'
import { ReactComponent as ArrowDown } from './images/down-arrow-svgrepo-com.svg'

const CartItem = (props) => {
    const { id, img, title, price, quantity, removeItem } = props
    const formatPrice = (price) =>
        `$ ${price.toLocaleString('en-US')}`

    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <div className="content-part">
                <h4>{title}</h4>
                <h4 className="item-price">{formatPrice(price)}</h4>
                <button onClick={() => removeItem(id)}>remove</button>
            </div>
            <div className="counter">
                <button className="arrowUp">
                    <ArrowUp />
                </button>
                <p>{quantity}</p>
                <button className="arrowDown">
                    <ArrowDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem
