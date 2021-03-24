import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { getRandomInt } from "../utils";
const SLICE_NAME = "randomizer";

type initialState = {
	items: string[];
	pickedIdxs: number[];
	loading: boolean;
};

const initialState: initialState = {
	items: [],
	pickedIdxs: [],
	loading: false,
};

export const pickItems = createAsyncThunk(
	`${SLICE_NAME}/pickItems`,
	async (quantity: number, thunkApi) => {
		const state = thunkApi.getState() as RootState;
		const { items } = state.randomizer;
		const result = [];
		function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}
		await sleep(500)
		for (let index = 0; index < quantity; index++) {
			let pickIdx = getRandomInt(0, items.length - 1);
			while (result.includes(pickIdx)) {
				pickIdx = getRandomInt(0, items.length - 1);
			}
			result.push(pickIdx);
		}
		return result;
	}
);

export const randomizerSlice = createSlice({
	name: SLICE_NAME,
	initialState,
	reducers: {
		reset: (state) => {
			return initialState;
		},
		setItems: (state, action: PayloadAction<string>) => {
			state.items = action.payload.split("\n");
		},
	},
	extraReducers: (builder) => {
		builder.addCase(pickItems.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(pickItems.fulfilled, (state, action) => {
			state.pickedIdxs = action.payload;
			state.loading = false;
		});
		builder.addCase(pickItems.rejected, (state) => {
			state.loading = false;
		});
	},
});

export const { reset, setItems } = randomizerSlice.actions;

export const selectRandomizer = (state: RootState) => {
	return state.randomizer;
};

export const selectPicks = (state: RootState) => {
	const { pickedIdxs, items } = state.randomizer;
	return pickedIdxs.map((idx) => items[idx]);
};

export default randomizerSlice.reducer;
