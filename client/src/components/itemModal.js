import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemAction";
import PropTypes from "prop-types";
import uuid from 'uuid'

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
    amount: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    
      this.setState({ [e.target.name]: e.target.value });

  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: this.state.name,
      amount: this.state.amount
    };

    
    this.props.addItem(newItem);

   
    this.toggle();
  };


  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Claim
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.state.toggle}>
          <ModalHeader toggle={this.toggle}>Add to claims list</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">Provider Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Add provider's name"
                  onChange={this.onChange}
                />
                <Label for="name">Amount</Label>
                <Input
                  type="text"
                  name="amount"
                  id="name"
                  placeholder="Add amount"
                  onChange={this.onChange}
                />
                <Button
                color = "dark"
                style = {{marginTop: "2rem"}}
                block
                >
                    Add to List
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  {addItem}
)(ItemModal);
