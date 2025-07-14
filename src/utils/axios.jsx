import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTRkNDQ1MjM0M2ZkZDAyOTBmNzJlNzQyNTU1MDdjZSIsIm5iZiI6MTc1MjM1NzQxMy40NzUwMDAxLCJzdWIiOiI2ODcyZGEyNWE0NmEwMjJjOTdhOTdiZmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n6yQAJ6ei8NKdvCAYlBw2UgGDvMwTa9FWQnrX7cj5tA",
  },
});

export default instance;
