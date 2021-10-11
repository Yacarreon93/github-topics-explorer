import axios from "axios";
import { apiToken } from "../../config";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
});

axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${apiToken}`;

const defaultPage = 1;
const defaultPerPage = 10;
const defaultSearchTerm = "";

export const getTopics = ({
  page = defaultPage,
  perPage = defaultPerPage,
  search = defaultSearchTerm,
}) =>
  axiosInstance.get(
    `/search/topics?q=${search}&page=${page}&per_page=${perPage}`
  );
