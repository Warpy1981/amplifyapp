import axios from "axios";

const KEY = 'AIzaSyAWANwu6YneA5Gm-nUqkzhJEH-BrYagRTU';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 10,
        key: KEY,
    },
});
