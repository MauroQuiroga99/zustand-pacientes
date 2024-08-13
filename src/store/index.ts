import { combineReducers, configureStore } from "@reduxjs/toolkit";

import patientReducer from "./slices/patientSlice";

const rootReducer = combineReducers({
  patient: patientReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
