import baseUrl from "@/lib/axios";
import { chat } from "@/types/chat";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const GetChats = createAsyncThunk(
  "chat/getChats",
  async (token: string, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await baseUrl.get("/user/chats", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch chats"
      );
    }
  }
);
interface initialStateType {
  data: chat[];
  loading: boolean;
  error: string | null;
}
const initialState: initialStateType = {
  data: [],
  loading: false,
  error: null,
};
export const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {},
  extraReducers: (
    builder: import("@reduxjs/toolkit").ActionReducerMapBuilder<initialStateType>
  ) => {
    builder
      .addCase(GetChats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetChats.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.error = null;
      })
      .addCase(GetChats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.data = [];
      });
  },
});
export default chatSlice.reducer;
