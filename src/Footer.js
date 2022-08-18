import React from 'react'
import { useGlobalContext } from './context'

const Footer = () => {
    const { total, clearCart } = useGlobalContext()
    return (
        <footer>
            <div className="card-total">
                <h4>Total</h4>
                <span>{total}</span>
            </div>
            <button className="clearBtn" onClick={clearCart}>
                clear all
            </button>
        </footer>
    )
}

export default Footer
