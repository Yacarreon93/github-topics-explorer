import axios from "axios";
import { apiToken } from "../../config";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com/graphql",
});

axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${apiToken}`;

export const getTopicByName = (name) =>
  axiosInstance.post("", {
    query: `
      query GET_TOPIC($name: String!) {
        topic(name: $name) {
          stargazerCount
          relatedTopics(first: 10) {
            name
          }
        }
      }
    `,
    variables: { name },
  });
