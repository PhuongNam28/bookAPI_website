const initState ={
    addedBooks: []
}

const rootReducer = (state = initState, action)=>{
    console.log(state,action)
    switch(action.type){
        case 'BOOK/ADD_BOOK':
            return {
               ...state,
                addedBooks: [...state.addedBooks, action.payload]
            }
        default:
            return state;
    }
}

export default rootReducer;
export {initState}