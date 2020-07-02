import React from "react";

import "../../src/App.css";
import ListItems from "./ListItem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
    console.log("sad", this.state.items);
  };
  deleteItem = (key) => {
    const filterItem = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filterItem,
    });
  };
  setUpdate = (text, key) => {
    const editItem = this.state.items
    editItem.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
      return true;
    });
    this.setState({
      items: editItem,
    });
  };
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter Text"
              value={this.state.currentItem.text}
              onChange={this.handleChange}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}
export default Home;
