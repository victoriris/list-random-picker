import {
	Action,
	combineReducers,
	configureStore,
	getDefaultMiddleware,
	ThunkAction,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import randomizer from "./randomizer";

const appReducer = combineReducers({
	randomizer,
});

const store = configureStore({
	reducer: appReducer,
	middleware: getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof appReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export default store;
