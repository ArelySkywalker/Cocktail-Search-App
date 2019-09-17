import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Card from '../Components/Card';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../Actions/itemActions';
import propTypes from 'prop-types';

class UserContainer extends Component {

    componentDidMount() {
        this.props.getItems();
	}
	
	onDeleteClick = (id) => {
		console.log(id);
		this.props.deleteItem(id);
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
							<ListGroup>
								{items.map(({id, name}) => (
									<ListGroupItem key={id}>
										<Button
											className="remove-btn"
											color="danger"
											size="sm"
											onClick={this.onDeleteClick.bind(this, id)}
										>
											&times;
										</Button>
										{name}
									</ListGroupItem>
								))}
							</ListGroup>
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
export default connect(
	mapStateToProps, 
		{ getItems, deleteItem }
)(UserContainer);