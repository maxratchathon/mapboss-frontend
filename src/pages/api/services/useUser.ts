import axios from 'axios';
import { USER_SEARCH_URL } from '..';


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
        const response = await axios.post(API_URL, userData);
        return response.data;
    } catch (error) {
        throw new Error(`Error creating user: ${error}`);
    }
};

export const updateUser = async (id: string, userData: any) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, userData);
        return response.data;
    } catch (error) {
        throw new Error(`Error updating user with ID ${id}: ${error}`);
    }
};

export const deleteUser = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error deleting user with ID ${id}: ${error}`);
    }
};