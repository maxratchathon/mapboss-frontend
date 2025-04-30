/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { USER_SEARCH_URL, USER_URL } from '..';

export const getUsers = async () => {
    try {
        const response = await axios.get(USER_SEARCH_URL);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching users: ${error}`);
    }
};

export const getUserById = async (id: string) => {
    try {
        const response = await axios.get(`${USER_SEARCH_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching user with ID ${id}: ${error}`);
    }
};

export const createUser = async (userData: any) => {
    try {
        const response = await axios.post(USER_URL, userData);
        alert('User created successfully!');
        return response.data;
    } catch (error) {
        throw new Error(`Error creating user: ${error}`);
    }
};

export const updateUser = async (id: string, userData: any) => {
    try {
        const response = await axios.put(`${USER_URL}/${id}`, userData);
        alert(`User with ID ${id} updated successfully!`);
        return response.data;
    } catch (error) {
        throw new Error(`Error updating user with ID ${id}: ${error}`);
    }
};

export const deleteUser = async (id: string) => {
    try {
        const response = await axios.delete(`${USER_URL}/${id}`);
        alert(`User with ID ${id} deleted successfully!`);
        return response.data;
    } catch (error) {
        throw new Error(`Error deleting user with ID ${id}: ${error}`);
    }
};