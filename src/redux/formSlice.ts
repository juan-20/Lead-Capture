import { configureStore, createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    fields: [],
  },
  reducers: {
    setFields: (state, action) => {
      state.fields = action.payload;
    },
  },
});

export const { setFields } = formSlice.actions;
export const selectFields = (state: { form: { fields: any; }; }) => state.form.fields;
export const formReducer = formSlice.reducer;

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;