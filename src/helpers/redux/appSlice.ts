import { IAppReducer } from "@helpers/redux/IAppReducer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAppReducer = {};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    SetColorShceme: (state, action: PayloadAction<any>) => {
      state = { ...state, userColorScheme: action.payload };
      return state;
    },
  },
});

export const {
  SetColorShceme,
} = appSlice.actions;

export default appSlice.reducer;