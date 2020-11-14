export const feedReducer = (state = [], action) => {
    switch(action.type) {
        case "FETCH_FEED": 
            return action.payload

            default: 
                return state
    }


}