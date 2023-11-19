import { createSlice } from '@reduxjs/toolkit';


export const appStateSlice = createSlice({
  name: 'AppState',
  initialState: {
    isAuthModalOpen: false,
  },
  reducers: {
    setIsAuthModalOpen(state, action) {
      if(typeof action.payload !== 'boolean') return;
      state.isAuthModalOpen = action.payload;
    },
  },
});


export const {
  setIsAuthModalOpen,
} = appStateSlice.actions;

export default appStateSlice.reducer;