export const AddItemToCart = item => {
    return {
        type: 'ADD_ITEMS_TO_CART',
        payload: item
    }
}

export const DeleteItemFromCart = item => {
    return {
        type: 'DELETE_ITEMS_FROM_CART',
        payload: item
    }
}