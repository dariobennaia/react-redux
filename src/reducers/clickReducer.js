export const clickReducer = (state = { data: [] }, action) => {

    switch (action.type) {
        case 'SEND_FORM':
            return { ...state, ...action }
        // return {
        //     ...state, 
        //     action: action.action,
        //     data: action.data
        // }
        default:
            return state;
    }
}