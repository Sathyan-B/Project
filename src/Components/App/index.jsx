import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Transfer from '../Transfer';
import TransferView from '../Transfer/view';
import Reports from '../Reports';
import Documents from '../Documents';
import Accounts from '../Accounts';
import {withRouter} from 'react-router-dom';


 class App extends React.Component{
	
	constructor(props){
		super(props);

	}

	eventHandler(){
		console.log("no",this.props)
		this.props.history.push("/transfer");

	}

	render() {
  return (
    <div style={{height: "100%"}}>
      <Switch>
        <Route exact path="/transfer"> <Transfer /> </Route>
        <Route exact path="/accounts"> <Accounts /> </Route>
        <Route exact path="/documents"> <Documents /> </Route>
        <Route exact path="/reports"> <Reports /> </Route>
        <Route exact path="/transferView/:id"  component={props=>  <TransferView {...props}></TransferView>}></Route>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/home"> <Home /> </Route>


      </Switch>
      </div>
  );
	}
}


export default withRouter(App);