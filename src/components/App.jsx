import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './navigator/NavigationBar';
import Sidebar from './sidebar/Sidebar';
import Loadable from "react-loadable";

import '../styles/App.scss';

function MyLoadingComponent() {
  return <div>Loading...</div>;
}

const dashboard = Loadable({
  loader: () => import("./dashboard/Dashboard.jsx"),
  loading: MyLoadingComponent,
});

// const addTask = Loadable({
//   loader: () => import("../components/AddTask"),
//   loading: MyLoadingComponent,
// });

class App extends Component {
  constructor(props) {
    super(props);
    this.sidebarRef = React.createRef();
    this.state = {
      isSidebarOpen: true,
    };
  }

  toggleSidebar = () => {
    this.setState(prevState => (
      { isSidebarOpen: !prevState.isSidebarOpen }), () => {
      if(this.state.isSidebarOpen) {
        this.sidebarRef.current.focus();
      }
    });
  };

  render() {
    return (

      <div>
        <BrowserRouter>
          <div>
            <NavigationBar toggleSidebar={this.toggleSidebar}/>
            <Sidebar toggleSidebar={this.toggleSidebar} open={this.state.isSidebarOpen} myref={this.sidebarRef}/>
            <Switch>
              <Route path='/' component={dashboard} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
