import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '~/store/store';

// Define a type for the slice state
interface LayoutState {
  theme: string;
}

// Define the initial state using that type
const initialState: LayoutState = {
  theme: 'dark',
};

export const layoutSlice = createSlice({
  name: 'layout',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = layoutSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.layout;

export default layoutSlice.reducer;
