import React from "react";
import "./App.css";
import CardList from "./components/card-list/CardList.component";
import SearchBox from "./components/search-box/SearchBox.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      searchWord: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          users: users.map(({ id, name, email }) => ({
            id,
            name,
            email,
          })),
        });
      });
  }

  handleSearch = (searchWord) => {
    this.setState({
      ...this.state,
      searchWord,
    });
  };


  render() {
    const { users, searchWord } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchWord.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleSearch={this.handleSearch}
          placeholder="search monsters"
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
