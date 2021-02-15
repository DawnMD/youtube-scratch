import axios from "axios";
const KEY = AIzaSyDTlPWrBzds4bH0gvLtf0d3ksh_86OE9YA;
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  headers: {},
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
