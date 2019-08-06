import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import { connect } from 'react-redux';
import {getItems, deleteItem} from '../actions/itemAction';
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
     
        <li>
          {items.map(({ _id, name, amount, date }) => (
            <ul key={_id}>
              ${amount} submitted for {name} on {date}
              <span style = {{margin: '10px'}}>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this,_id)}
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

export default connect(mapStateToProps, {getItems, deleteItem})(ClaimsList);
