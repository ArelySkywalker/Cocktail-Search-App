// Import our Routers
import React, { Component }  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import RecipeContainer from './RecipeContainer';
import DrinkContainer from './DrinkContainer';
import SearchContainer from './SearchContainer';
import AboutContainer from './AboutContainer';
import FiltersContainer from './FiltersContainer';
import ResultsContainer from './ResultsContainer';
import UserContainer from './UserContainer';

const MainContainer = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={ HomeContainer } />
			<Route path="/whiskey" component={ RecipeContainer } />
			<Route path="/vodka" component={ RecipeContainer } />
			<Route path="/gin" component={ RecipeContainer } />
			<Route path="/rum" component={ RecipeContainer } />
			<Route path="/tequila" component={ RecipeContainer } />
			<Route path="/drink" component={ DrinkContainer } />
			<Route path="/search" component={ SearchContainer } />
			<Route path="/about" component={ AboutContainer } />
			<Route path="/filters" component={ FiltersContainer } />
			<Route path="/results" component={ ResultsContainer } />
			<Route path="/profile" component={ UserContainer } />
		</Switch>
	</BrowserRouter>
)

export default MainContainer;