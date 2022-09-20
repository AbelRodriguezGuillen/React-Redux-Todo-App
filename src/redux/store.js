import { configureStore } from "@reduxjs/toolkit";
import policyReducer from './policySlice'
//import policyReducer from './policySlice'

// export default configureStore({
//     reducer: {
//         todos: todoReducer,
//     },
// })
export default configureStore({
    reducer: {
        policies: policyReducer,
    },
})