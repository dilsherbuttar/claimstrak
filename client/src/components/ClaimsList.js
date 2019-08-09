import React, { Component } from "react";
import { Container, Button , ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
     
        
        <ListGroup >
        <TransitionGroup className='shopping-list'>
          {items.map(({ _id, name, amount, date }) => (
             <CSSTransition key={_id} timeout={500} classNames='fade'>
             <ListGroupItem style = {{display: "flex", justifyContent:"space-between"}}>
             <span >

              ${amount} submitted for {name} on {date}
             </span>
           
            
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this,_id)}
                >
                  &times;
                </Button>
           
           
            </ListGroupItem>
            </CSSTransition>
          ))}
          </TransitionGroup>
          </ListGroup>
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
