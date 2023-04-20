import {createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {

    value: [{
        id:1,
        description: 'Nawriz',
        isActive: true,
    }]

};

export const toDoSlice = createSlice({
    name: 'nodes',
    initialState,
    reducers: {
        // Action to add comment
        addNote: (state, action) => {
            const lastId=state.value[state.value.length-1].id;
            let defaulValue={id:lastId+1,description:action.payload.description,isActive:false}
            state.value.push(defaulValue);
        },

        // Special reducer for hydrating the state
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.nodes,
                };
            },
        },
    },
});

export const {addNote} = toDoSlice.actions;
export default toDoSlice.reducer;