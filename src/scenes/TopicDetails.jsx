import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LoadingOrErrorCatcher from "../components/LoadingOrErrorCatcher";
import { getTopicByName } from "../apis/github/graphql";
import useGraphQLAPI from "../hooks/useGraphQLAPI";

function TopicDetails({ match }) {
  const topicName = match?.params?.topicName;

  const [data, isLoading, errorMsg, fetchData] = useGraphQLAPI(getTopicByName);

  useEffect(() => {
    fetchData(topicName);
  }, [topicName, fetchData]);

  const relatedTopics = data?.topic?.relatedTopics;
  const stargazerCount = data?.topic?.stargazerCount;

  return (
    <div>
      <div className="mb-3">
        <Link to="/">&lt; Go topic search</Link>
      </div>
      <LoadingOrErrorCatcher isLoading={isLoading} errorMsg={errorMsg}>
        <h2># {topicName}</h2>
        <p>Stargazer count: {stargazerCount}</p>
        <p>
          {relatedTopics?.length && "Related to: "}
          {relatedTopics?.map(({ name }) => (
            <span key={name} className="px-2">
              <Link to={`/${name}`}>{name}</Link>
            </span>
          ))}
        </p>
      </LoadingOrErrorCatcher>
    </div>
  );
}

TopicDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      topicName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TopicDetails;
