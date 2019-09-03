import React from 'react';
import { bindActionCreators } from 'redux';
import { sendFormData } from '../actions/index';
import { connect } from 'react-redux';
import { Navbar as NavbarBootstrap, NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    readNotification = () => {
        const { data, actions, sendFormData } = this.props;
        sendFormData({})
        sendFormData({
            data: data,
            actions: actions && actions.map((value) => {
                return {
                    msg: value.msg,
                    read: true
                }
            })
        })
    }

    render() {
        const { actions } = this.props;
        const count = actions ? actions.filter(value => !value.read).length : '0';
        const notifications = actions && actions.reverse().map((value, index) =>
            <DropdownItem key={index}>{value.msg}</DropdownItem>
        );
        return (
            <NavbarBootstrap color="faded" light>
                <NavbarBrand href="/" className="mr-auto">Redux</NavbarBrand>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} direction="left">
                    <DropdownToggle caret onClick={this.readNotification}>
                        {count}
                    </DropdownToggle>
                    <DropdownMenu>
                        {notifications ? notifications : <DropdownItem>Nenhuma notificação</DropdownItem>}
                    </DropdownMenu>
                </Dropdown>
            </NavbarBootstrap>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);