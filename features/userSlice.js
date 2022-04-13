import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
    },
    logout: state => {
      state = initialState
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
