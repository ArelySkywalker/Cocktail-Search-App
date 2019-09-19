import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './Auth/RegisterModal';
import LoginModal from './Auth/LoginModal';
import Logout from './Auth/Logout';

class Footer extends Component {
	state = { showing: false };

	static propTypes = {
		auth: PropTypes.object.isRequired
	}

	render() {
		const { isAuthenticated, user } = this.props.auth;

		const authLinks = (
			<Fragment>
				<li><a href="/profile">My Profile</a></li>
				<Logout />
			</Fragment>
		);

		const guestLinks = (
			<Fragment>
				<RegisterModal />
				<LoginModal />
			</Fragment>
		)

		const { showing } = this.state;
		return (
			<div className="Footer">
				<div className="container-wide">
					<div className="row">
						<div className="copyright col-md-6">
							<p>© 2019 Six Gummy Bears and some Scotch. All Rights Reserved.</p>
						</div>
						<div className="menu col-md-6">
							<ul>
								<li><a href="/about">About</a></li>
								{ isAuthenticated ? authLinks : guestLinks }
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(
	mapStateToProps,
	null
)(Footer);