import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import React from 'react';
import axios from 'axios';

export const getPoliciesAsync = createAsyncThunk('policies/getPoliciesAsync', 
    async () => {
        const response = await fetch('http://localhost:5000/api/get')
        if(response.ok){
            const policies = await response.json();
            return { policies }
        }
    }
);

// Adding a "policy" to the server (so that it remains after refresh)
export const addPoliciesAsync = createAsyncThunk('policies/addPoliciesAsync', 
    async(payload) => {
        const response = await fetch(`http://localhost:5000/api/post`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ title: payload.title })
        })
        if(response.ok){
            const policy = await response.json();
            return { policy };
        }
})

// Toggle Complete on server (so that it remains after refresh)
export const toggleSelectAsync = createAsyncThunk('policies/toggleSelectAsync',
    async(payload) => {
        const response = await fetch(`http://localhost:5000/api/post/${payload.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ completed: payload.completed })
        })
        if(response.ok){
            const policy = await response.json();
            return { id: policy.id, completed: policy.selected}
        }
}
)

// Delete from api on server
export const deletePolicyAsync =
createAsyncThunk('policies/deletePolicyAsync', 
    async (payload) => {
        const response = await fetch(`http://localhost:7000/policies/${payload.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ title: payload.title })    
        })
        if(response.ok){
            const policy = await response.json();
            return { policy }
        }
    }
)

const policySlice = createSlice({
    name: 'policies',
    initialState: [],
    reducers: {},
    // Reducer getting payload from thunk function
    extraReducers: {
        [getPoliciesAsync.pending]: (state, action) => {
            console.log('fetching data...')
        },
        [getPoliciesAsync.fulfilled]: (state, action) => {
            console.log('fetched data successfully...')
            
            return action.payload.policies;
        },
        [addPoliciesAsync.fulfilled]: (state, action) => {
            state.push(action.payload.policy);
            console.log('Data added successfully...')
        },
        [toggleSelectAsync.fulfilled]: (state, action) => {
            const index = state.findIndex(
                (policy) => policy.id === action.payload.id
            );
            state[index].selected = action.payload.selected;
            // if(state[index].selected === 1) return
        },
        [deletePolicyAsync.fulfilled]: (state, action) => {
            return state.filter((policy) => policy.id !== action.payload.id)
        }
    }
})

// export const { 
//     addTodo,
//     toggleComplete,
//     deleteTodo,
// } = todoSlice.actions
export default policySlice.reducer