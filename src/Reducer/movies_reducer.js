import {MOVIES} from '../Action';

const movies_reducer = (state =[], action)=>{
    switch(action.type)
    {
        case MOVIES:
            return action.items;
        default:
            return state;
    }
}

export default movies_reducer;