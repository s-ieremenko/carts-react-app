import React from 'react'
import { ReactComponent as IconBasket } from './images/shopping-basket.svg'
import { useGlobalContext } from './context'

const Nav = () => {
    const { amount } = useGlobalContext()

    return (
        <nav>
            <div className="nav-center">
                <h3>Smartphones</h3>
                <div className="nav-container">
                    <IconBasket />
                    <div className="amount-container">
                        <p>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
