import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Constants } from "_utils";

const membershipSelected = createSlice({
  name: "membershipSelected",
  initialState: {
    membershipSelected: Constants.planType.Supporter,
  },
  reducers: {
    setMembershipSelected(state, action: PayloadAction<Constants.planType>) {
      state.membershipSelected = action.payload;
    },
  },
});

export const { setMembershipSelected } = membershipSelected.actions;
export default membershipSelected.reducer;
