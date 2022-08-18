export const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, carts: [] }
    }
    if (action.type === 'REMOVE') {
        const newCartItems = state.carts.filter((cart) => {
            return cart.id !== action.payload
        })
        return { ...state, carts: newCartItems }
    }
    if (action.type === 'INCREASE') {
        const tempCarts = state.carts.map((cart) => {
            if (action.payload === cart.id) {
                return { ...cart, quantity: cart.quantity + 1 }
            }
            return cart
        })
        return { ...state, carts: tempCarts }
    }
    if (action.type === 'DECREASE') {
        const tempCarts = state.carts
            .map((cart) => {
                if (action.payload === cart.id) {
                    return { ...cart, quantity: cart.quantity - 1 }
                }
                return cart
            })
            .filter((cart) => cart.quantity !== 0)
        return { ...state, carts: tempCarts }
    }
    if (action.type === 'DISPLAY_ITEMS') {
        return { ...state, cart: action.payload }
    }
    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.carts.reduce(
            (acc, item) => {
                let { price, quantity } = item
                const itemTotal = price * quantity
                acc.total += itemTotal
                acc.amount += quantity
                return acc
            },
            {
                total: 0,
                amount: 0,
            }
        )
        total = total.toFixed(2)

        return { ...state, amount, total }
    }
    throw new Error('no matching action type')
}
