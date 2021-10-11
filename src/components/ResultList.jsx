import React from "react";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";
import LoadingSpinner from "./LoadingSpinner";
import Topic from "./Topic";

export default function ResultList(props) {
  const { items, totalCount, isLoading, errorMsg } = props;

  return (
    <div>
      {errorMsg ? (
        <Alert variant="danger">{errorMsg}</Alert>
      ) : isLoading ? (
        <LoadingSpinner />
      ) : (
        <ListGroup className="mb-3" variant="flush">
          <h3>{totalCount} topic results</h3>
          {items?.map((data) => (
            <Topic key={data?.name} data={data} />
          ))}
        </ListGroup>
      )}
    </div>
  );
}
