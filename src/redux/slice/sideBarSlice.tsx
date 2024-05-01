import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collapsed: false,
};

const sideBarSlice = createSlice({
  name: 'sidebarToggler',
  initialState,
  reducers: {
    setCollapsed: (state, action) => {
      const { collapsed } = action.payload;
      state.collapsed = collapsed || false;
    },
  },
});

export const { setCollapsed } = sideBarSlice.actions;

export default sideBarSlice.reducer;
