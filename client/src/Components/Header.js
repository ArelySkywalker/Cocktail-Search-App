import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from './Menu';

class Header extends Component {
	state = { showing: false };

	static propTypes = {
		auth: PropTypes.object.isRequired
	}
	render() {
		const { isAuthenticated, user } = this.props.auth;

		const welcome = (
			<Fragment>
				<p>{ user ? `Welcome, ${user.name}` : '' }</p>
			</Fragment>
		);

		const { showing } = this.state;
		return (
			<div className={ `Header${ showing ? ' open' : '' }` }>
				<div className="row">
					<div className="col-4 Nav-icon">
						<a href="/">
							<i className="fas fa-cocktail"></i>
							<h1>Recipes</h1>
						</a>
					</div>
					<div className="col-8 Title">
						{ isAuthenticated ? welcome : '' }
						<span onClick={() => this.setState({ showing: !showing })}>
							<i className="fas fa-bars"></i>
							<i className="fas fa-times"></i>
						</span>
					</div>
				</div>
				{ showing 
					? <Menu />
					: null
				}
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
)(Header);