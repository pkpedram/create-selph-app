
const filterActions = {
    setSideBar: (arrayOfKeys) => async dispatch => dispatch({type: 'SET_SIDEBAR_ITEMS', payload: arrayOfKeys}),
    generateParams: (data) => async dispatch => dispatch({type: 'GENERATE_PARAMS', payload: data}),
    serach: (data) => async dispatch => {
        if(data?.length >= 3 ){
        dispatch({type: 'GENERATE_PARAMS', payload: {search: data}})
    }
    if(data?.length == 0){
        dispatch({type: 'GENERATE_PARAMS', payload: {search: ''}})
    }
},
paginate: (offset, limit) => async dispatch => dispatch({type: 'GENERATE_PARAMS', payload: {
    offset: offset,
    limit: limit
}})
}

export default filterActions;