import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import LoadingOrErrorCatcher from "../LoadingOrErrorCatcher";
import TopicListItem from "./TopicListItem";

function TopicList(props) {
  const { topics, totalCount, isLoading, errorMsg } = props;

  return (
    <div>
      <LoadingOrErrorCatcher isLoading={isLoading} errorMsg={errorMsg}>
        <ListGroup className="mb-3" variant="flush">
          <h3>{totalCount} topic results</h3>
          {topics?.map((data) => (
            <TopicListItem key={data?.name} data={data} />
          ))}
        </ListGroup>
      </LoadingOrErrorCatcher>
    </div>
  );
}

TopicList.propTypes = {
  topics: PropTypes.shape({
    name: PropTypes.string,
    display_name: PropTypes.string,
    short_description: PropTypes.string,
  }).isRequired,
  totalCount: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
};

export default TopicList;
