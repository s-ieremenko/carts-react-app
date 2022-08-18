import React from 'react'
import CartItem from './CartItem'
import Footer from './Footer'
import { useGlobalContext } from './context'

const MainContent = () => {
    const { carts } = useGlobalContext()
    return (
        <main>
            <section className="cart">
                <h2>Your bag</h2>
                {carts.length ? (
                    <>
                        {carts.map((cart) => {
                            return (
                                <CartItem key={cart.id} {...cart} />
                            )
                        })}
                        <Footer />
                    </>
                ) : (
                    <div className="empty">is currently empty</div>
                )}
            </section>
        </main>
    )
}

export default MainContent
