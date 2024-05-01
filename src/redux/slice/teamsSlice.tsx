import { createSlice } from '@reduxjs/toolkit';

const teamListData = Array(15)
  .fill('')
  .map((_, index) => {
    return {
      id: `${index}`,
      name: `John Doe${index}`,
      mobileNumber: '9876543210',
      isBookmarked: false,
      avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`,
    };
  });

const initialState = {
  users: teamListData || [],
};

const teamSlice = createSlice({
  name: 'authContext',
  initialState,
  reducers: {
    filterTeamUsers: (state, action) => {
      const { teamUsers } = action.payload;
      state.users = teamUsers;
    },
  },
});

export const { filterTeamUsers } = teamSlice.actions;

export default teamSlice.reducer;
