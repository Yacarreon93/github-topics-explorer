import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Searchbar(props) {
  const { term, handleTermChange, handleClickOnSearch } = props;

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
      <Button variant="outline-secondary" onClick={handleClickOnSearch}>
        Search
      </Button>
    </InputGroup>
  );
}

Searchbar.propTypes = {
  term: PropTypes.string.isRequired,
  handleTermChange: PropTypes.func.isRequired,
  handleClickOnSearch: PropTypes.func.isRequired,
};

export default Searchbar;
