const shippingInitState = 
{
    shippingInfo: {}
}
export const shippingReducer = (state = shippingInitState.shippingInfo, action) => {
    switch(action.type) {
        case 'ADD_SHIPPING_INFO':
            return {
                ...state,
                shippingInfo: action.payload
            };
        default:
            return state;
    }
};