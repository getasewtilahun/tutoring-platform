import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import profileService from './profileService'

const initialState = {
  profile: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// create user profile
export const create = createAsyncThunk(
  'auth/create',
  async (userId,userData, thunkAPI) => {
    try {
      return await profileService.create(userId,userData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(create.pending, (state) => {
        state.isLoading = true
      })
      .addCase(create.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(create.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
  },
})

export const { reset } = profileSlice.actions
export default profileSlice.reducer
