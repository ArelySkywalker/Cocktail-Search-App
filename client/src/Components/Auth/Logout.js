import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../Actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }
    render() {
        return (
            <Fragment>
                <li><a onClick={this.props.logout} href="javascript:void(0);">Logout</a></li>
            </Fragment>
        )
    }
}

export default connect(
    null, 
    { logout }
)(Logout);