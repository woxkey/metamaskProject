import IUserDto from '../interfaces/IUserDto';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import IUser from '../interfaces/IUser';

interface UserState {
	users: IUserDto[];
	loading: boolean;
}

const initialState: UserState = {
	users: [],
	loading: false,
};

export const getUsers = createAsyncThunk('getUsers', async () => {
	try {
		const response = await axios.get(
			`https://new-backend.unistory.app/api/data?page=0&perPage=50`
		);
		return response.data.items;
	} catch (err: unknown) {
		console.log(err);
	}
});

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, {payload}: PayloadAction<IUserDto>) => {
			state.users.push(payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.loading = true;
			})
			.addCase(getUsers.rejected, (state) => {
				state.loading = false;
			})
			.addCase(
				getUsers.fulfilled,
				(state, {payload}: PayloadAction<IUserDto[]>) => {
					state.loading = false;
					state.users = payload;
				}
			);
	},
});

export const {addUser} = userSlice.actions;

export default userSlice.reducer;
