export const fetchFeed = () => {
    return dispatch => {
        fetch("http://localhost:3000/feeds")
        .then(resp => resp.json)
        .then(feed => dispatch({type: 'FETCH_FEED', payload:feed}))
    }
}

export const addFeed = (feed) => {
    return dispatch => {
        fetch("http://localhost:3000/feeds", {
            method: 'POST', 
            body: JSON.stringify(feed), 
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(feed => {
            dispatch({type: 'ADD_FEED', payload:feed})
        })
    }
}

