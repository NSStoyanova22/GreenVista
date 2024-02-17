import axios from 'axios';
const baseUrl = 'http://localhost:3000/';

export const loginUser = (userData) => {
    const url = baseUrl + 'login';
    return axios.post(url, { userData }).then((res) => {
        return res;
    });
}

export const registerUser = (userData) => {
    const url = baseUrl + 'signup';
    return axios.post(url, { userData }).then((res) => {
        return res;
    });
}

export const logOut = (userData) => {
    const url = baseUrl + 'logout';
    return axios.get(url).then((res) => {
        return res;
    });
}

export const forumDataList = () => {
    const headers = {
        "Content-Type": "application/json",
      };
    const url = baseUrl + 'forumDataList';
    return axios.get(url, headers).then((res) => {
        return res;
    });
}

export const createPost = (data) => {
    const url = baseUrl + 'createPost';
    return axios.post(url, { data }).then((res) => {
        return res;
    });
}

export const getAllPosts = () => {
    const url = baseUrl + 'posts';
    return axios.get(url).then((res) => {
        return res;
    });
}
