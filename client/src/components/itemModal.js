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
import DatePicker from "react-date-picker";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
    amount: "",
    date: new Date()
  };

  handleChange = date => {
    this.setState({
      date: date
    });
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
    const dateFormatter = date => {
      var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      let day = date.getDate();
      let monthIndex = date.getMonth();
      let year = date.getFullYear();

      return day + " " + monthNames[monthIndex] + " " + year;
    };

    let formattedDate = dateFormatter(this.state.date);

    const newItem = {
      name: this.state.name,
      amount: this.state.amount,
      date: formattedDate
    };

    this.props.addItem(newItem);

    this.toggle();
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Button
          color="dark"
          style={{
            marginBottom: "2rem",
            marginLeft: "20rem",
            position: "center"
          }}
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
              </FormGroup>
              <DatePicker
                selected={this.state.startDate}
                value={this.state.date}
                onChange={this.handleChange}
                fixedHeight
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add to List
              </Button>
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
  { addItem }
)(ItemModal);
