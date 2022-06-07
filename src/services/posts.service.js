import axios from '../utils/axios';

// export const getPostsList = () => {
//     return axios.get(`/posts`);
// };

export const getPostsById = (id) => {
    return axios.get(`/posts/${id}`);
};

export const getUserInfo = () => {
    return axios.get('/users');
};