import React from "react";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";
import LoadingSpinner from "./LoadingSpinner";

function LoadingOrErrorCatcher(props) {
  const { children, isLoading, errorMsg } = props;

  if (errorMsg) return <Alert variant="danger">{errorMsg}</Alert>;
  if (isLoading) return <LoadingSpinner />;
  return children;
}

LoadingOrErrorCatcher.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LoadingOrErrorCatcher;
