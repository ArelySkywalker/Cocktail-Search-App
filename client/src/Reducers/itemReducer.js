
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../Actions/types';

const initialState = {
    items: [
        { id: 11007, name: 'Margarita' },
        { id: 12162, name: 'Screwdriver' },
        { id: 11009, name: 'Moscow Mule' },
        { id: 11001, name: 'Old Fashioned' }
    ]
}

export default function(state = initialState, action) {
    switch(action) {
        case GET_ITEMS: 
            return {
                ...state
            }
        default:
            return state;
    }
};