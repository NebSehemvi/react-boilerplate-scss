import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";

import Base from 'features/Base';


import * as I from './typings';

class AppContainer extends React.Component<I.StoreProps & I.DispatchProps & React.PropsWithChildren<I.Props>, I.State> {
	render() {
		return (
				<div className="app">
					<Switch>
						<Route exact path="/" component={Base} />
					</Switch>
				</div>
		);
	}
}

const appContainer = {
	mapStateToProps: (store: any): I.StoreProps => ({
		store
	}),
	mapDispatchToProps: (dispatch: Dispatch) => ({
	})
};

export default connect(
	appContainer.mapStateToProps,
	appContainer.mapDispatchToProps
)(AppContainer);
