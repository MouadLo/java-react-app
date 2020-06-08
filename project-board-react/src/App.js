import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import ProjectBoard from './components/ProjectBoard';
import AddProjectTask from './components/projectTask/AddProjectTask';
import UpdateProjectTask from './components/projectTask/UpdateProjectTask';
import NavBar from './components/NavBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<NavBar />
						<Route exact path="/" component={ProjectBoard} />
						<Route exact path="/addProjectTask" component={AddProjectTask} />
						<Route
							exact
							path="/updateProjectTask/:pt_id"
							component={UpdateProjectTask}
						/>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
