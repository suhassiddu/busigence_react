import { combineReducers } from 'redux';

function csvhead_reducer(state = {}, action){
    switch(action.type){
        case 'UPDATE_CSVHEAD':
            return action.payload
        default:
            return state
    }
}

function column_reducer(state = [], action){
    switch(action.type){
        case 'UPDATE_COLUMN':
            return action.payload
        default:
            return state
    }
}

function csvform_reducer(state = {}, action){
    switch(action.type){
        case 'UPDATE_CSVFORM':
            return action.payload
        default:
            return state
    }
}

function joinform_reducer(state = {}, action){
    switch(action.type){
        case 'UPDATE_JOINFORM':
            return action.payload
        default:
            return state
    }
}

function table_reducer(state = '', action){
    switch(action.type){
        case 'UPDATE_TABLE':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    csvhead: csvhead_reducer,
    header: column_reducer,
    csvform: csvform_reducer,
    joinform: joinform_reducer,
    table: table_reducer
});
