import IUserDto from '../interfaces/IUserDto';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
	users: IUserDto[];
	loading: boolean;
	currentUser: IUserDto;
	user: IUserDto;
}

const initialState: UserState = {
	users: [],
	loading: false,
	currentUser: {} as IUserDto,
	user: {} as IUserDto,
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

export const getUser = createAsyncThunk('/getUser', async (id: string) => {
	try {
		const response = await axios.get(
			`https://new-backend.unistory.app/api/data/id/${id}`
		);
		return response.data;
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
			state.currentUser = payload;
		},
		deleteUser: (state, {payload}: PayloadAction<number>) => {
			state.users = state.users.filter((user) => user.id !== payload);
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
			)
			.addCase(getUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(getUser.rejected, (state) => {
				state.loading = false;
			})
			.addCase(
				getUser.fulfilled,
				(state, {payload}: PayloadAction<IUserDto>) => {
					state.loading = false;
					state.user = payload;
				}
			);
	},
});

export const {addUser, deleteUser} = userSlice.actions;

export default userSlice.reducer;
