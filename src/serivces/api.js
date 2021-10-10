import axios from "axios";
import { apiToken } from "../config";

const topicSearchTerm = "react";

axios.defaults.baseURL = "https://api.github.com";
axios.defaults.headers.common = { Authorization: `Bearer ${apiToken}` };

export const getTopics = ({ page = 1, perPage = 10 }) =>
  axios.get(
    `/search/topics?q=${topicSearchTerm}&page=${page}&per_page=${perPage}`
  );
