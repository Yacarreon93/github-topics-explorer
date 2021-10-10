import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

export default function Topic({ data }) {
  const {
    name,
    display_name: displayName,
    short_description: shortDescrription,
  } = data;

  return (
    <ListGroup.Item key={name}>
      <div className="mb-3">
        <a href={`/${name}`}>{displayName || name}</a>
      </div>
      {shortDescrription && <p>{shortDescrription}</p>}
    </ListGroup.Item>
  );
}

Topic.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    display_name: PropTypes.string,
    short_description: PropTypes.string,
  }).isRequired,
};
