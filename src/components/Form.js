import React from 'react';
import { bindActionCreators } from 'redux';
import { sendFormData } from '../actions/index';
import { connect } from 'react-redux';
import { Button, Form as FormBootstrap, FormGroup, Label, Input } from 'reactstrap';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  changeInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  sendForm = async (e) => {
    e.preventDefault();

    const { actions, data, sendFormData } = this.props;
    const { name } = this.state;

    sendFormData({})
    actions.push({
      msg: "Voce adicionou um item a lista " + name,
      read: false
    });
    data.push(name);
    sendFormData({ actions: actions, data: data });
  }

  render() {
    return (
      <div>
        <FormBootstrap onSubmit={this.sendForm}>
          <FormGroup>
            <Label for="exampleEmail">Digite seu nome:</Label>
            <Input type="text" name="name" onChange={this.changeInput} autoComplete="off" />
          </FormGroup>
          <Button color="success">Send</Button>
        </FormBootstrap>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    data: store.clickReducer.data ? store.clickReducer.data : [],
    actions: store.clickReducer.actions ? store.clickReducer.actions : []
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  sendFormData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
