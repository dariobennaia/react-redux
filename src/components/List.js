import React from 'react';
import { bindActionCreators } from 'redux';
import { sendFormData } from '../actions/index';
import { connect } from 'react-redux';
import { Table, Button } from 'reactstrap';

class List extends React.Component {

  removeOfList = (value, index) => {
    const { data, actions, sendFormData } = this.props;
    data.splice(index, 1)
    actions.push({ msg: "Você removeu o item " + value + " da listagem.", read: false })
    sendFormData({})
    sendFormData({
      actions: actions,
      data: data
    })
  }

  render() {
    const { data } = this.props;
    const listData = data && data.map((value, index) =>
      <tr key={index}>
        <td>{value}</td>
        <td className="float-right">
          <Button color="danger" onClick={() => this.removeOfList(value, index)}>X</Button>
        </td>
      </tr>
    );

    return (
      <div>
        <Table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            {listData}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    actions: store.clickReducer.actions,
    data: store.clickReducer.data
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  sendFormData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
