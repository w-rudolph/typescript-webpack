import { combineReducers } from 'redux'

const initState = [{ title: 'todo1', done: false }];

export default combineReducers({
    todos: (state = initState, action) => {
        switch (action.type) {
            case 'TODO_ADD_ONE':
                state = state.concat({
                    title: action.payload
                })
                break;
            default:
        }
        return state;
    }
});
