import React, { useState } from 'react'
import CartItem from './CartItem'
import Footer from './Footer'
import { items } from './data'

const MainContent = () => {
    const [carts, setCarts] = useState(items)

    const removeItem = (id) => {
        const newListOfItems = carts.filter((item) => item.id !== id)
        setCarts(newListOfItems)
    }
    return (
        <main>
            <section className="cart">
                <h2>Your bag</h2>
                {carts.length ? (
                    carts.map((cart) => {
                        const { id, img, price, title, quantity } =
                            cart
                        return (
                            <CartItem
                                key={id}
                                id={id}
                                title={title}
                                img={img}
                                quantity={quantity}
                                price={price}
                                removeItem={removeItem}
                            />
                        )
                    })
                ) : (
                    <div>no items</div>
                )}
                <Footer />
            </section>
        </main>
    )
}

export default MainContent
