import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function Searchbar(props) {
  const { term, handleTermChange, handleSearch } = props;

  const onTermChange = (evt) => {
    const newTerm = evt?.currentTarget?.value;
    handleTermChange(newTerm);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        name="searchterm"
        value={term}
        onChange={onTermChange}
        placeholder="Search topic..."
        aria-label="Search topic"
      />
      <Button variant="outline-secondary" onClick={handleSearch}>
        Search
      </Button>
    </InputGroup>
  );
}
