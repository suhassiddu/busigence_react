import { combineReducers } from 'redux';

function schema_reducer(state = [], action){
    switch(action.type){
        case 'UPDATE_SCHEMA':
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

function mysqlform_reducer(state = {}, action){
    switch(action.type){
        case 'UPDATE_MYSQLFORM':
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
    schema: schema_reducer,
    header: column_reducer,
    mysqlform: mysqlform_reducer,
    joinform: joinform_reducer,
    table: table_reducer
});
