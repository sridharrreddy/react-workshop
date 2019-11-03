import axios from 'axios';

async function GetUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}

export default GetUsers;
