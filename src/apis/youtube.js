import axios from "axios";

const KEY = process.env.REACT_APP_KEY;
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

// import axios from "axios";

// const KEY = "AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho";

// export default axios.create({
//   baseURL: "https://www.googleapis.com/youtube/v3",
//   params: {
//     part: "snippet",
//     type: "video",
//     maxResults: 5,
//     key: KEY,
//   },
// });

// export default axios.create({
//   baseURL: "https://api.unsplash.com",
//   headers: {
//     Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
//   },
// });
