import React, { Component } from 'react';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Card from '../Components/Card';
import { connect } from 'react-redux';
import { getItems } from '../Actions/itemActions';
import propTypes from 'prop-types';

class UserContainer extends Component {

    componentDidMount() {
        this.props.getItems();
    }

	render() {
        const { items } = this.props.item;
		return (
			<div className="Recipes">
				<Banner />
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3>User Page</h3>
                            {items && items.map(
							(item, id) => {
								return (
                                    <p key={ id } >{ item.name }</p>
								)
							}
						)}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

UserContainer.propTypes = {
    getItems: propTypes.func.isRequired,
    item: propTypes.object.isRequired
};
const mapStateToProps = (state) => ({
    item: state.item
});
export default connect(mapStateToProps, { getItems })(UserContainer);