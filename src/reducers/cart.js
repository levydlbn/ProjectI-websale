const initialState = {
    listProductCart: [],
    activeId: null
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            {
                break
            }
        case 'DELETE_PRODUCT_TO_CART':
            {
                break
            }

        case 'DELETE_ALL_PRODUCT_TO_CART':
            {
                break
            }

        default:
            return state
    }
}

export default cartReducer