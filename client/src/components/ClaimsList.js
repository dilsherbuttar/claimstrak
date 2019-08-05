import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import uuid from "uuid";
import { connect } from 'react-redux';
import {getItems} from '../actions/itemAction';
import PropTypes from 'prop-types';

class ClaimsList extends Component {
 

  componentDidMount() {
      this.props.getItems();
  }

 

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    
    const { items } = this.props.item;
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
ClaimsList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, {getItems})(ClaimsList);
