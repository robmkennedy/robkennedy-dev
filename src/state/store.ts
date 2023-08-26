/// rtk toolkit configurestore automatically sets up redux thuink milldeware



import { configureStore } from '@reduxjs/toolkit';
import layoutSlice from './slices/layoutSlice';

const rootReducer = {
    layout: layoutSlice.reducer
}

const store = configureStore({ reducer: rootReducer });

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred RootState type based on root reducer: { sidePanelOpen: true }

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;