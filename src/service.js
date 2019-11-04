import axios from 'axios';

export async function GetUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}

export async function GetUserPosts(userId, page = 1, limit = 10) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts?_page=${page}&_limit=${limit}`
  );
  return {
    data: response.data,
    total: parseInt(response.headers['x-total-count']),
  };
}

export async function DeleteUserPost(postId) {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
}
