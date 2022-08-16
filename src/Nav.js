import React, { useState } from 'react'
import { ReactComponent as IconBasket } from './images/shopping-basket.svg'

const Nav = () => {
    return (
        <nav>
            <div className="nav-center">
                <h3>Use Reducer</h3>
                <div className="nav-container">
                    <IconBasket />
                    <div className="amount-container">
                        <p>4</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
