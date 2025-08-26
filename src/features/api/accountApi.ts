import {createAsyncThunk} from "@reduxjs/toolkit";
import type {UserRegister} from "../../utils/types";
import {base_url, createToken} from "../../utils/constants.ts";

export const registerUser = createAsyncThunk(
    'user/register',
    async (user: UserRegister) => {
        const response = await fetch(`${base_url}/account/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        if (response.status === 409) {
            throw new Error(`User ${user} already exists`);

        }
        if (!response.ok) {
            throw new Error(`Something went wrong`);
        }
       const data = await response.json();
        const token = createToken(user.login, user.password)
        return {user: data, token}
    }
)

export const fetchUser = createAsyncThunk(
    'user/fetch',
    async(user: UserRegister) => {
        const response = await fetch(`${base_url}/account/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic dXNlci1qb2huOjEyMzQ=',
            },
            body: JSON.stringify(user),
        });
        if (response.status === 401) {
            throw new Error(`User ${user.login}  Unauthorized`);

        }
        if (!response.ok) {
            throw new Error(`Something went wrong`);
        }
        const data = await response.json();
        const token = createToken(user.login, user.password)
        return {user: data, token}
    })