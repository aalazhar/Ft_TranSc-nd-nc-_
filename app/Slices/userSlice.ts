import { createAsyncThunk ,createSlice, PayloadAction } from '@reduxjs/toolkit'
import { log } from 'console'

// interface UserInfos {
//   name: string;
//   userName: string;
//   rank: number;
//   level: number;
//   pathImg: string;
// }
// const UserInfo:UserInfos = {
//   name: 'hassaaaaaaan',
//   userName: '',
//   rank: 0,
//   level: 0,
//   pathImg: '',
// }


// export interface tInitialState  {
//   userInfo: UserInfos;
//   status: string;
//   error: any;
// }

// export const initialState:tInitialState = {
//   userInfo: UserInfo,
//   status: 'none',
//   error: null
// }

const initialState = {
  entity: [],
} as any;

export const fetchInfos = createAsyncThunk("user/fetch", async (thunkApi) => {
  const response = await fetch ("http://10.11.3.8:5000/Profile/98861", {
    method: "GET"
  });
  const data = await response.json();   
 
  // console.log(data);
  return (data);
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfos.pending, (state) => {
        // state.status = 'loading';
      })
      .addCase(fetchInfos.fulfilled, (state, action) => {
        // state.status = 'succeeded';
        // state.userInfo = action.payload;
        state.entity = action.payload;
        // state.entity.push(action.payload);
      })
      .addCase(fetchInfos.rejected, (state, action) => {
        // state.status = 'failed';
        // state.error = action.error.message;
      });
  },
});


// export const { addInfos } = userSlice.actions;
export default userSlice.reducer;

