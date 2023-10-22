import { configureStore } from '@reduxjs/toolkit'

import userSlice2 from './userStore'
import userSlice from '../Slices/userSlice'

const store = configureStore({
    reducer: {
        user: userSlice2.reducer,
        user2: userSlice.reducer
    }
})

export default store