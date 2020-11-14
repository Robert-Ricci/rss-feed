export const fetchFeed = () => {
    return dispatch => {
        fetch("http://localhost:3000/feeds")
        .then(resp => resp.json)
        .then(feed => dispatch({type: FETCH_FEED, payload:feed}))
    }
}