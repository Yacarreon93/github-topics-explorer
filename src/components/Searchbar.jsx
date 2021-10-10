import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function Searchbar() {
  const search = () => {};

  return (
    <InputGroup className="mb-3">
      <FormControl placeholder="Search topic..." aria-label="Search topic" />
      <Button variant="outline-secondary" onClick={search}>
        Search
      </Button>
    </InputGroup>
  );
}
