import axios from 'axios';

const baseURL =
  'https://gist.githubusercontent.com/FooQoo/7864d3ae429cef171b9eb12de80c0a5b/raw/02ae0acae7ec926ea2ba46cd6a7169dafb2af46e/mock.json';

export const getGist = async () => {
  return await axios.get(baseURL).then((response) => {
    console.info(response.data);
    return response.data;
  });
};
