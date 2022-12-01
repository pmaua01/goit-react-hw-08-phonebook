import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filtersReducer } from './filterContactSlice';

// const rootReducers = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//     filters: filtersReducer,
//   },
// });
