import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center my-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
