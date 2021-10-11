# Github Topic Explorer

This app helps to search for Github topics. Clicking on each topic displays the other topics related to that topic and how many stargazers they have. And so forth.

## How to run app & test

- Install packages, run `npm i`.
- Set up API key:
  - Create a `.env` file from `.env.example`.
  - Set the API token in the `.env` file.
- Run the app, run `yarn start`.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To launch the test runner, run `yarn test`.

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic,
and how many stargazers they have. And so forth.

To interact with the Github GraphQL API you'll need to have:

- A [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- You'll want to make use of the key in the .env file within your application
  You may use whatever React framework or library you find useful. URL routing is optional.

## Observations

The Github GraphQL API does not provide any way to search topics by a term, according to the official documentation, the [search](https://docs.github.com/en/graphql/reference/queries#searchresultitemconnection) query does not support something like a TOPIC [SearchType](https://docs.github.com/en/graphql/reference/enums#searchtype), so Github REST API is used to perform this task.

The data on each topic such as stargazers count and related topics is provided by the Github GraphQL API.

## Dev Notes

Core packages:

- bootstrap
- react-bootstrap
- react-router-dom
- axios

The most use of Funcional components & React hooks the better.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Future Improvements

- Implement Github GraphQL API to perform topic searching.
- Create a useAPI hook to perform API calls in a standard way no matter the provider (eg. REST or GraphQL).
- Make pagination component dinanmyc according to the total count of topics, it's static to 5 pages at the moment.
- Retrieve and display another interesting topic information.
- Add unit tests on each component.
