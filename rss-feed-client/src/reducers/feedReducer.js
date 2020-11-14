export const feedReducer = (state = [], action) => {
    switch(action.type) {
        case "FETCH_FEED": 
            return action.payload
        case "ADD_FEED": 
            return[...state, action.payload]

            
            default: 
                return state
    }


}