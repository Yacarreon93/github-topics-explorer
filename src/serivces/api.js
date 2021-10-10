import axios from "axios";
import { apiToken } from "../config";

const defaultPage = 1;
const defaultPerPage = 10;
const defaultSearchTerm = "";

axios.defaults.baseURL = "https://api.github.com";
axios.defaults.headers.common = { Authorization: `Bearer ${apiToken}` };

export const getTopics = ({
  page = defaultPage,
  perPage = defaultPerPage,
  search = defaultSearchTerm,
}) => axios.get(`/search/topics?q=${search}&page=${page}&per_page=${perPage}`);
