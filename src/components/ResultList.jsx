import React from "react";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";
import LoadingSpinner from "./LoadingSpinner";

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
          {items?.map(
            ({
              name,
              display_name: displayName,
              short_description: shortDescrription,
            }) => (
              <ListGroup.Item>
                <div className="mb-3">
                  <a href={`/${name}`}>{displayName || name}</a>
                </div>
                {shortDescrription && <p>{shortDescrription}</p>}
              </ListGroup.Item>
            )
          )}
        </ListGroup>
      )}
    </div>
  );
}
