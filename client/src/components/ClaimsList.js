import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import uuid from "uuid";

class ClaimsList extends Component {
  state = {
    items: [
      { _id: uuid(), date: "10/01/2009", name: "Brittney", amount: "5000" },
      { _id: uuid(), date: "10/01/2009", name: "Jenn", amount: "1050" },
      { _id: uuid(), date: "10/01/2009", name: "Vivian", amount: "500" },
      { _id: uuid(), date: "10/01/2009", name: "Speech", amount: "587" }
    ]
  };

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.state;
    console.log(this.state);
    return (
      <Container>
        <Button
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter claim details");
            const amount = prompt("Enter amount");
            if (name && amount) {
              this.setState(state => ({
                items: [...this.state.items, { _id: uuid(), name, amount }]
              }));
            }
          }}
        >
          Add a claim
        </Button>
        <li>
          {items.map(({ _id, name, amount, date }) => (
            <ul key={_id}>
              ${amount} submitted for {name} on {date}
              <span style = {{margin: '10px'}}>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    this.setState(state => ({
                      items: state.items.filter(item => item._id !== _id)
                    }));
                  }}
                >
                  &times;
                </Button>
              </span>
            </ul>
          ))}
        </li>
      </Container>
    );
  }
}

export default ClaimsList;
