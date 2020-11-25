import axios from 'axios';

export const getTodos = async (url) => {
  return axios.get(url)
    .catch(error => console.log(error))
};

export const postTodo = async (url, body) => {
  if (!body) return;
  return axios.post(url, body)
    .catch(error => console.log(error))
};

export const putTodo = async (url, body) => {
  if (!body) return;
  return axios.put(url, body)
    .catch(error => console.log(error))
};

export const deleteTodo = async (url, body) => {
  if (!body) return;
  return axios.delete(url, { data: body })
    .catch(error => console.log(error))
};