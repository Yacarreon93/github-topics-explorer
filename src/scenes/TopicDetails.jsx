import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function TopicDetails({ match }) {
  const topicName = match?.params?.topicName;

  return (
    <div>
      <div className="mb-3">
        <Link to="/">&lt; Go Back</Link>
      </div>
      <h2>{topicName}</h2>
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
