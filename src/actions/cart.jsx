export const addProductToCart = (product) => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: product
    }
}

export const deleteProductToCart = (product) => {
    return {
        type: 'DELETE_PRODUCT_TO_CART',
        payload: product
    }
}

export const deleteAllProductToCart = (product) => {
    return {
        type: 'DELETE_ALL_PRODUCT_TO_CART',
        payload: product
    }
}