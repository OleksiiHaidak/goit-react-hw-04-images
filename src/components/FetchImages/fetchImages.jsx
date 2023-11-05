import axios from 'axios';


const pixabayApiKey = "39445880-54b6798b916331fa60d6cbc62";
const url = "https://pixabay.com/api/";
const perPage = 12;


const fetchImages = async (query, page) => {
  try {
    const {data} = await axios.get(
      `${url}?q=${query}&page=${page}&key=${pixabayApiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchImages;