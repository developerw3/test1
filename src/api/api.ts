import axios from 'axios';

export const getStories = () => {

    return axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json`);
}

export const getDataTypeById = (id: number) => {

    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
}
