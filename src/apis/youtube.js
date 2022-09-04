import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapi.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: process.env.REACT_APP_API_KEY,
  },
});

// export default axios.create({
//   baseURL: "https://api.unsplash.com",
//   headers: {
//     Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
//   },
// });
