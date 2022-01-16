import "./SearchBox.style.css";

const SearchBox = (props) => {
  const { handleSearch, placeholder } = props;

  const handleChange = (event) => {
    const value = event.target.value;
    handleSearch(value);
  };

  return (
    <input
      type="search"
      name="search-box"
      className="search-box"
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default SearchBox;
